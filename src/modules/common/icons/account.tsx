import React from "react"
import { IconProps } from "types/icon"

const Account: React.FC<IconProps> = ({
    size = "25",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg 
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...attributes}>
            
            <path
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      strokeWidth="1.5"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />        
        
        </svg>

    )
}

export default Account
