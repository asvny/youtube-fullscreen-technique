import React, { Fragment, useEffect } from "react";
import Video, { VideoStatus, VideoActions } from "react-video-renderer";

import { useAppState } from "./AppState";
import {
  PauseIcon,
  PlayIcon,
  MuteIcon,
  VolumeIcon,
  FullscreenIcon,
  ExitFullscreenIcon,
  ChevronDown
} from "./Icons";

interface FullScreenAPIs {
  exitFullscreen: any;

  cancelFullscreen: any;
  webkitCancelFullScreen: any;
  mozCancelFullScreen: any;

  fullscreenElement: any;
  mozFullScreenElement: any;
  webkitFullscreenElement: any;

  webkitIsFullScreen: any;
  mozFullScreen: any;

  requestFullscreen: any;
  webkitRequestFullScreen: any;
  mozRequestFullScreen: any;
}

type FixDocument = HTMLDocument & FullScreenAPIs;
type FixElement = HTMLElement & FullScreenAPIs; 

export default function VideoPlayer() {
  let { state, setFullscreenMode } = useAppState();
  let { isFullscreen } = state;

  const handlePlayPause = (status: VideoStatus, actions: VideoActions) => (event : React.SyntheticEvent) => {
    let isPaused = status === "paused";

    if (isPaused) {
      actions.play();
    } else {
      actions.pause();
    }
  };

  const handleVolume = (isMuted: Boolean, actions: VideoActions) => (event: React.SyntheticEvent) => {
    if (isMuted) {
      actions.unmute();
    } else {
      actions.mute();
    }
  };

  const handleFullScreen = (event: React.SyntheticEvent) => {
    if (!document.fullscreenElement) {
      window.scrollTo(0, 0);
    }

    toggleFullscreen();
  };

  const handleViewDetails = (event: React.SyntheticEvent)  => {
    window.scrollTo({
      top: window.pageYOffset + 250,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    let handleFullscreenChange = ()  => {
      let doc = document as FixDocument;
      let isFullscreen =
        doc.fullscreenElement || doc.webkitIsFullScreen || doc.mozFullScreen || false;

      setFullscreenMode(isFullscreen);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);


    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, [setFullscreenMode]);

  return (
    <section className="bg-black flex justify-center relative">
      <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
        {(video, state, actions) => (
          <Fragment>
            {React.cloneElement(video as React.ReactElement<any>, {
              style: { height: isFullscreen ? "100vh" : "575px" },
              onClick: handlePlayPause(state.status, actions)
            })}
            <div className=" absolute bottom-0 left-0 w-full">
              <progress
                value={state.currentTime}
                max={state.duration}
                className="block slider w-full"
              />

              <div className="flex px-3 py-1 relative">
                <button onClick={handlePlayPause(state.status, actions)}>
                  {state.status !== "paused" ? <PauseIcon /> : <PlayIcon />}
                </button>
                <button
                  className="ml-1"
                  onClick={handleVolume(state.isMuted, actions)}
                >
                  {state.isMuted ? <MuteIcon /> : <VolumeIcon />}
                </button>
                <span className="inline-flex items-center justify-center ml-2 text-sm text-white">
                  {numberToMin(state.currentTime)} /{" "}
                  {numberToMin(state.duration)}
                </span>
                <button className="ml-auto" onClick={handleFullScreen}>
                  {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
                </button>

                {isFullscreen ? (
                  <button
                    className="absolute"
                    onClick={handleViewDetails}
                    style={{
                      left: "50%",
                      top: "10px",
                      transform: "translateX(-50%)"
                    }}
                  >
                    <ChevronDown />
                  </button>
                ) : null}
              </div>
            </div>
          </Fragment>
        )}
      </Video>
    </section>
  );
}

const numberToMin =  (number: string | number) => (parseFloat(String(number)) / 60).toFixed(2);

// https://gist.github.com/demonixis/5188326
function toggleFullscreen() {
  let doc = document as FixDocument;
  let element = doc.documentElement as FixElement;

  let isFullscreen =
    doc.webkitIsFullScreen || doc.mozFullScreen || false;

  element.requestFullscreen =
    element.requestFullscreen ||
    element.webkitRequestFullScreen ||
    element.mozRequestFullScreen ||
    function() {
      return false;
    };
  doc.cancelFullscreen =
    doc.cancelFullscreen ||
    doc.webkitCancelFullScreen ||
    doc.mozCancelFullScreen ||
    function() {
      return false;
    };

  isFullscreen ? doc.cancelFullscreen() : element.requestFullscreen();
}
