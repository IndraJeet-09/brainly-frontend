import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void,
    fullWidth?: boolean,
    loading?: boolean 
}

const variantClasses = {
    "primary": "bg-purple6 text-white ",
    "secondary": "bg-purple2 text-purple6"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center "

export function Button({variant, text, startIcon, onClick, loading, fullWidth}: ButtonProps){
    return <button onClick={onClick} className={variantClasses[variant]+" "+ defaultStyles + `${fullWidth ? " w-full flex justify-center items-center": ""} ${loading ? " opacity-45" : ""}`} disabled={loading}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
}