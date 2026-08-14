import type { ReactElement } from "react"
import { ShareIcon } from "../icons/ShareIcon"
import { PlusIcon } from "../icons/PlusIcon"

interface CardProps {
    text: string,
    startIcon: ReactElement,
    // link: ,
    // type:
}

export function Card(){
    return <div className="p-8 max-w-96 max-h-fit bg-white rounded-md shadow-md border-slate-100 ">
        <div className="flex justify-between">
            <div className="flex">
                <ShareIcon/>
                Project Ideas
            </div>
            <div className="flex">
                <ShareIcon/>
                <PlusIcon/>
            </div>
        </div>
    </div>
}