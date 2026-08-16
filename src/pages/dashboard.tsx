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
  const [selectedType, setSelectedType] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const contents = useContent();

  const filterContent = 
    selectedType === "all"
      ? contents 
      : contents.filter((content) => content.type === selectedType)
  
  console.log("selected:", selectedType);
  console.log("all:", contents);
  console.log("filtered:", filterContent);

  return ( <div>

    <Sidebar setSelectedType = {setSelectedType} />
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
      
      <div className='flex flex-wrap gap-6 items-start pt-4'>
        {filterContent?.map(({type, link, title}) => <Card key={link} type={type} link={link} title={title}/>)}

      </div>
    </div>
  </div>
  )
}

export default Dashboard
