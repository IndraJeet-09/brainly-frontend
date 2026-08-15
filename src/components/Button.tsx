import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void 
}

const variantClasses = {
    "primary": "bg-purple6 text-white",
    "secondary": "bg-purple2 text-purple6"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center"

export function Button({variant, text, startIcon, onClick}: ButtonProps){
    return <button onClick={onClick} className={variantClasses[variant]+" "+ defaultStyles}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}