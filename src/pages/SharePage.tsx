import axios from "axios";
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Sidebar } from "../components/Sidebar";

function SharePage() {
    const [contents, setContents] = useState([])
    const {shareLink} = useParams();

    useEffect(() => {
        if(!shareLink) return;
        axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`)
        .then((response) => {
            setContents(response.data.content)
        })
    }, [shareLink])
    
  return (
    <div>
        <Sidebar />
        <div className='p-4 ml-96 min-h-screen bg-grey1 border-2'>
            <div className='flex flex-wrap gap-6 items-start pt-4'>
                    {contents?.map(({type, link, title}) => <Card type={type} link={link} title={title}/>)}
            </div>
        </div>
    </div>
  )
}

export default SharePage
