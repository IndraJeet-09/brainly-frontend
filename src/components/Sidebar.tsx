import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YouTubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";


export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-2">
        <div className="flex text-2xl  font-bold pt-4 items-center pr-2">
            <div className="pr-2 text-purple6 "></div>
            <BrainIcon />
            <div className="pl-2">Second Brain</div>
        </div>
        <div className="pt-10 pl-8">
            <SidebarItem icon={<TwitterIcon/>} text="Tweets"/>
            <SidebarItem icon={<YouTubeIcon/>} text="Videos"/>
        </div>
    </div>
}