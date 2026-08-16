import { useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import  Card  from '../components/Card'
import { CreateContent } from '../components/CreateContent'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const contents = useContent();

  return ( <div>

    <Sidebar />
    <div className='p-4 ml-96 min-h-screen bg-grey1 border-2'>
      <CreateContent open={modalOpen} onClose={() => {
        setModalOpen(false)
      }}/>
      <div className='flex justify-end gap-4'>
      <Button onClick={() => {setModalOpen(true)}} variant='primary' text="Add Content" startIcon={<PlusIcon/>}></Button>
      <Button onClick={async() => {
        const res = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
          share: true 
        }, {
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        });
        const url = `http://localhost:5173/share/${res.data.hash}`;
        navigator.clipboard.writeText(url)
      }} variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}></Button>
      </div>
      
      {/* {JSON.stringify(contents)} */}
      <div className='flex flex-wrap gap-6 items-start pt-4'>
        {contents?.map(({type, link, title}) => <Card type={type} link={link} title={title}/>)}

      {/* <Card type='twitter' link='https://x.com/xKhalifan/status/2076011903357452465' title='BRAINMAXXING'/>
      <Card type='youtube' link='https://www.youtube.com/embed/4MAupwjl3pc?si=5ERrVqyJM7CdQpff' title='Art of Wining in TECH'/> */}

      </div>
    </div>
  </div>
  )
}

export default Dashboard
