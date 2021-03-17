import * as React from "react";

import "../styles.css";

function Arrow(props) {
  return (
    <svg
      width={50}
      height={50}
      className="margin-top arrow-margin"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <title>{"Circle-Load-Button Copy"}</title>
      <defs>
        <path id="prefix__a" d="M3 1L.5 3.5 6 9 .5 14.5 3 17l8-8z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <a xlinkHref="#">
          <circle
            transform="rotate(-180 24.5 24.5)"
            cx={24}
            cy={24}
            r={24}
            opacity={0.3}
            stroke="#FFF"
            strokeWidth={2}
          />
          <use
            fill="#F9F9F9"
            transform="matrix(0 1 1 0 16 20.5)"
            xlinkHref="#prefix__a"
          />
        </a>
      </g>
    </svg>
  );
}

export default Arrow;
