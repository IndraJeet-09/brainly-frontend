import type { ReactElement } from "react"


export function SidebarItem({text, icon}: {
    text: string,
    icon: ReactElement
}){
    return <div>
        {icon} {text}
    </div>
}