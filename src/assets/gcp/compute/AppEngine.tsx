import { IconInterface } from '@/assets/iconInterface'
import React from 'react'

function AppEngine({ className }: IconInterface) {
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
            '.cls-1{fill:#4285f4;}.cls-1,.cls-2,.cls-3{fill-rule:evenodd;}.cls-2{fill:#aecbfa;}.cls-3{fill:#669df6;}'
          }
        </style>
      </defs>
      <title>{'Icon_24px_AppEngine_Color'}</title>
      <g data-name="Product Icons">
        <g>
          <path
            className="cls-1"
            d="M14.3,10l-1.22,1.22A1.71,1.71,0,0,1,12,14.23a1.74,1.74,0,0,1-1.33-.64L9.45,14.81A3.43,3.43,0,1,0,14.3,10Z"
          />
          <path
            className="cls-2"
            d="M12,6.26a6.25,6.25,0,1,0,6.25,6.25A6.25,6.25,0,0,0,12,6.26M12,17a4.45,4.45,0,1,1,4.44-4.44A4.44,4.44,0,0,1,12,17"
          />
          <path
            className="cls-3"
            d="M21.62,11.9l-2.56-.81a7.1,7.1,0,0,1,.17,1.53,7.62,7.62,0,0,1-.08,1.08h2.47a.44.44,0,0,0,.38-.42v-1a.44.44,0,0,0-.38-.42"
          />
          <path
            className="cls-3"
            d="M12,5.52a7.48,7.48,0,0,1,1.5.15l-.92-2.55c-.07-.22-.21-.38-.42-.38h-.38a.45.45,0,0,0-.42.38l-.8,2.54A7.64,7.64,0,0,1,12,5.52"
          />
          <path
            className="cls-3"
            d="M4.77,12.62a7.1,7.1,0,0,1,.17-1.53l-2.56.81a.44.44,0,0,0-.38.42v1a.44.44,0,0,0,.38.42H4.85a7.62,7.62,0,0,1-.08-1.08"
          />
          <path
            className="cls-2"
            d="M12,10a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,12,10Zm0,3.75a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,12,13.76Z"
          />
        </g>
      </g>
    </svg>
  )
}

export default React.memo(AppEngine)
