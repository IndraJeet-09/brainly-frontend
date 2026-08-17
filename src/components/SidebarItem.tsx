import type { ReactElement } from "react"


export function SidebarItem({text, icon, onClick}: {
    text: string,
    icon: ReactElement,
    onClick: () => void
}){
    return <div onClick={onClick} className="flex text-gray-700 pt-10 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-50 pl-4 text-xl">
        <div className="pr-2 ">
        {icon}
        </div>
        <div >
        {text}
        </div>
    </div>
}