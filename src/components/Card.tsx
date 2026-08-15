import { ShareIcon } from "../icons/ShareIcon"
import { PlusIcon } from "../icons/PlusIcon"

interface CardProps {
    title: string,
    link: string,
    type: "youtube" | "twitter",
}

export default function Card({title, link, type}: CardProps){
    return <div className="p-4 max-w-96 max-h-fit bg-white rounded-md shadow-md border-slate-100 ">
        <div className="flex justify-between ">
            <div className="flex items-center text-md">
                <div className="pr-2 text-gray-500">
                <ShareIcon/>
                </div>
                {title}
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank">
                        <ShareIcon/>
                    </a>
                </div>
                <div className="text-gray-500">
                <PlusIcon/>
                </div>
            </div>
        </div>

        <div className="pt-4">
            {type === "youtube" && <iframe className="w-full min-h-full" src={link.replace("watch", "embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        
            {type === "twitter" && <div><blockquote className="twitter-tweet"><p lang="en" dir="ltr">BRAINMAXXING<br></br>You’re not dumb. Accept your intelligence. Read books out loud. Study mathematics. Do something new. Learn a new language. Leave your comfort zone. Write your thoughts. Use your non-dominant hand. Juggle. Release stress. Exhale deeply. Sleep without an alarm. Wake… <a href="https://t.co/qzP57IhhHC">https://t.co/qzP57IhhHC</a></p>&mdash; Silentum 🦁 (@xKhalifan) <a href={link}>July 11, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charSet="utf-8"></script></div> }
        </div>
   
    </div>
}