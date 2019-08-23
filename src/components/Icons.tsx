import React from "react";

export const PlayIcon = (props: Object) => (
  <svg viewBox="0 0 36 36" height="34" width="34" {...props}>
    <path fill="#fff" d="M12 26l6.5-4v-8L12 10zm6.5-4l6.5-4-6.5-4z" />
  </svg>
);

export const PauseIcon = (props: Object) => (
  <svg viewBox="0 0 36 36" height="34" width="34" {...props}>
    <path
      fill="#fff"
      d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
    />
  </svg>
);

export const VolumeIcon = (props: Object) => (
  <svg viewBox="0 0 36 36" height="34" width="34" {...props}>
    <path
      d="M8 21h4l5 5V10l-5 5H8v6zm11-7v8c1.48-.68 2.5-2.23 2.5-4 0-1.74-1.02-3.26-2.5-4zm0-2.71c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77v2.06z"
      fill="#fff"
    />
  </svg>
);

export const MuteIcon = (props: Object) => (
  <svg viewBox="0 0 36 36" height="34" width="34" {...props}>
    <path
      fill="#fff"
      d="M21.48 17.98a4.5 4.5 0 00-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51a8.796 8.796 0 001.03-4.15c0-4.28-2.99-7.86-7-8.76v2.05c2.89.86 5 3.54 5 6.71zm-14.73-9l-1.27 1.26 4.72 4.73H7.98v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81l2.04 2.05 1.27-1.27-9-9-7.72-7.72zm7.72.99l-2.09 2.08 2.09 2.09V9.98z"
    />
  </svg>
);

export const FullscreenIcon = (props: Object) => (
  <svg viewBox="0 0 36 36" height="34" width="34" {...props}>
    <path
      fill="#fff"
      d="M10 16h2v-4h4v-2h-6v6zM20 10v2h4v4h2v-6h-6zM24 24h-4v2h6v-6h-2v4zM12 20h-2v6h6v-2h-4v-4z"
    />
  </svg>
);

export const ExitFullscreenIcon = (props: Object) => (
  <svg viewBox="0 0 36 36" height="34" width="34" {...props}>
    <path fill="#fff" d="M14 14h-4v2h6v-6h-2v4zM22 14v-4h-2v6h6v-2h-4zM20 26h2v-4h4v-2h-6v6zM10 22h4v4h2v-6h-6v2z" />
  </svg>
);

export const ChevronDown = (props: Object) => (
  <svg viewBox="0 0 24 24" height="20" width="20" {...props}>
    <path
      fill="#fff"
      d="M22 8.2l-9.5 9.6c-.3.2-.7.2-1 0L2 8.2c-.2-.3-.2-.7 0-1l1-1c.3-.3.8-.3 1.1 0l7.4 7.5c.3.3.7.3 1 0l7.4-7.5c.3-.2.8-.2 1.1 0l1 1c.2.3.2.7 0 1z"
    />
  </svg>
);
