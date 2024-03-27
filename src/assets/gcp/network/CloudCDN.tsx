import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function CloudCDN({ className }: IconInterface) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      className={className}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:none;}.cls-2{fill:#669df6;}.cls-2,.cls-3,.cls-4{fill-rule:evenodd;}.cls-3{fill:#aecbfa;}.cls-4{fill:#4285f4;}'
          }
        </style>
      </defs>
      <title>{'Icon_24px_CDN_Color'}</title>
      <g data-name="Product Icons">
        <rect className="cls-1" x={2} y={2} width={20} height={20} />
        <g>
          <polygon
            id="Fill-1"
            className="cls-2"
            points="12 2 12 4.41 15.13 7.63 15.13 5.21 12 2"
          />
          <polygon
            id="Fill-1-Copy-2"
            className="cls-2"
            points="19.5 12 16.38 15.13 18.88 15.13 22 12 19.5 12"
          />
          <polygon
            id="Fill-1-Copy-3"
            className="cls-2"
            points="4.5 12 7.63 15.13 5.13 15.13 2 12 4.5 12"
          />
          <polygon
            id="Fill-1-Copy"
            className="cls-2"
            points="12 22 12 19.59 15.13 16.38 15.13 18.79 12 22"
          />
          <polygon
            id="Fill-2"
            className="cls-3"
            points="12 2 8.88 5.21 8.88 7.63 12 4.41 12 2"
          />
          <polygon
            id="Fill-2-Copy-2"
            className="cls-3"
            points="18.88 8.88 16.38 8.88 19.5 12 22 12 18.88 8.88"
          />
          <polygon
            id="Fill-2-Copy-3"
            className="cls-3"
            points="5.13 8.88 7.63 8.88 4.5 12 2 12 5.13 8.88"
          />
          <polygon
            id="Fill-2-Copy"
            className="cls-3"
            points="12 22 8.88 18.79 8.88 16.38 12 19.59 12 22"
          />
          <polygon
            id="Fill-9"
            className="cls-3"
            points="15.13 15.13 8.88 15.13 8.88 8.88 15.13 8.88 15.13 15.13"
          />
          <polygon
            id="Fill-10"
            className="cls-2"
            points="15.13 8.88 15.13 15.13 8.88 15.13 15.13 8.88"
          />
          <polygon
            className="cls-4"
            points="15.13 8.88 15.13 15.13 12 12 15.13 8.88"
          />
        </g>
      </g>
    </svg>
  )
}

export default React.memo(CloudCDN)
