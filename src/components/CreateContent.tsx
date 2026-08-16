import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

type ContentType = "youtube" | "twitter";

const ContentType = {
    Youtube: "youtube" as const,
    Twitter: "twitter" as const
}

export function CreateContent({open, onClose}){
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube || ContentType.Twitter)

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/content", {
             link,
             type,
             title,    
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })  
        onClose(); 
    }

    return <div>
        
        {open && <div> 
            <div className="w-screen h-screen bg-slate-600 fixed top-0 left-0 opacity-80 flex justify-center">

            </div>
            <div className="w-screen h-screen fixed top-0 left-0  flex justify-center">
                <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-2 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon/>
                        </div>
                    </div>
                    <div>
                        <Input ref={titleRef} placeholder={"Title"}/>
                        <Input ref={linkRef} placeholder={"Link"}/>
                    </div>
                    <div>
                        <h1 className="flex justify-center">Type</h1>
                        <div className="flex justify-center gap-2 p-4">
                            <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Youtube)
                            }} />
                            <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter)
                            }} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <Button onClick={addContent} variant="primary" text="Submit"/>
                    </div>
                </span>
            </div>
            </div>
        </div>}
    </div>

}

export function Input({ref, placeholder}: {placeholder: string; ref?: any}){
    return <div>
        <input ref={ref} placeholder={placeholder} type="text" className="px-4 py-2 border m-2 rounded" />
    </div>
}