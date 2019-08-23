import React from "react";
import Faux from "./Faux";

export default function() {
  let fauxVideos = Array(6)
    .fill()
    .map((_, i) => <FauxVideo key={i} />);

  return (
    <div className="flex p-4">
      <section className="flex-1 py-4 px-4">
        <Faux depth={400} ml={0} style={{ height: "16px", width: "90%" }} />
        <Faux
          depth={300}
          mt={4}
          ml={0}
          style={{ height: "12px", width: "40%" }}
        />

        <hr className="my-4" />

        <div className="flex">
          <Faux
            rounded
            depth={300}
            ml={0}
            style={{ height: "50px", width: "50px" }}
          />
          <div className="flex-1 mx-4 pt-3">
            <Faux depth={400} ml={0} style={{ height: "10px", width: "50%" }} />
            <Faux
              depth={300}
              mt={2}
              ml={0}
              style={{ height: "8px", width: "20%" }}
            />

            <Faux
              depth={300}
              mt={8}
              ml={0}
              style={{ height: "8px", width: "80%" }}
            />
            <Faux
              depth={300}
              mt={2}
              ml={0}
              style={{ height: "8px", width: "60%" }}
            />

            <div className="mt-8" />

            <FauxCredits x={100} y={40} />
            <FauxCredits x={120} y={20} />
            <FauxCredits x={80} y={30} />
            <FauxCredits x={90} y={15} />
          </div>
          <Faux
            bg="red"
            depth={600}
            ml={0}
            style={{ height: "42px", width: "150px" }}
          />
        </div>
      </section>
      <section style={{ width: "420px" }}>{fauxVideos}</section>
    </div>
  );
}

const FauxVideo = props => (
  <div className="flex mb-4">
    <Faux depth={300} style={{ height: "95px", width: "175px" }} />
    <div className="flex-1 ml-2 py-2">
      <Faux depth={400} style={{ height: "8px", width: "90%" }} />
      <Faux depth={400} mt={1} style={{ height: "8px", width: "60%" }} />
      <Faux depth={300} mt={5} style={{ height: "8px", width: "40%" }} />
      <Faux depth={300} mt={1} style={{ height: "8px", width: "30%" }} />
      <Faux depth={300} mt={1} style={{ height: "12px", width: "10%" }} />
    </div>
  </div>
);


const FauxCredits = props => (
    <div className="flex mt-3">
    <Faux
      depth={300}
      ml={0}
      style={{ height: "8px", width: `${props.x}px` }}
    />
    <Faux
      depth={300}
      ml={4}
      bg="blue"
      style={{ height: "8px", width: `${props.y}%` }}
    />
  </div>
)