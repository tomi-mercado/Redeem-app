import { SVGProps } from 'react';

const arrows = {
  ArrowRight: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>arrow-up</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Catalog-p2" transform="translate(-1260.000000, -512.000000)">
          <g id="menu" transform="translate(132.000000, 512.000000)">
            <g id="arrow-right" transform="translate(1128.000000, 0.000000)">
              <circle
                id="Oval-4"
                stroke="currentColor"
                stroke-width="1"
                cx="24"
                cy="24"
                r="23.5"
              ></circle>
              <polygon
                id="Shape"
                fill="currentColor"
                fill-rule="evenodd"
                transform="translate(24.000000, 23.705000) scale(1, -1) rotate(-90.000000) translate(-24.000000, -23.705000) "
                points="28.59 20 24 24.58 19.41 20 18 21.41 24 27.41 30 21.41"
              ></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  ArrowLeft: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>arrow-left</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Catalog-p2" transform="translate(-1200.000000, -512.000000)">
          <g id="menu" transform="translate(132.000000, 512.000000)">
            <g id="arrow-left" transform="translate(1068.000000, 0.000000)">
              <g id="Group-15">
                <circle
                  id="Oval-4"
                  stroke="currentColor"
                  cx="24"
                  cy="24"
                  r="23.5"
                ></circle>
                <polygon
                  id="Shape"
                  fill="currentColor"
                  transform="translate(24.000000, 23.705000) rotate(-270.000000) translate(-24.000000, -23.705000) "
                  points="28.59 20 24 24.58 19.41 20 18 21.41 24 27.41 30 21.41"
                ></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  ArrowDown: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      {...props}
    >
      <desc>Created with Fabric.js 1.7.22</desc>
      <defs></defs>
      <g transform="translate(128 128) scale(0.72 0.72)">
        <g
          style={{
            stroke: 'none',
            strokeWidth: 0,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'none',
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
        >
          <path
            d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z"
            style={{
              stroke: 'currentColor',
              strokeWidth: 0,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: 'rgb(0,0,0)',
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            stroke-linecap="round"
          />
        </g>
      </g>
    </svg>
  ),
};

export default arrows;
