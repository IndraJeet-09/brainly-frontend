import './App.css'
import { Button } from './components/Button'
import  Card  from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <div className='p-4'>
      <div className='flex justify-end gap-4'>
      <Button variant='primary' text="Add Content" startIcon={<PlusIcon/>}></Button>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}></Button>
      </div>
      <div className='flex gap-4'>
      <Card type='twitter' link='https://x.com/xKhalifan/status/2076011903357452465' title='BRAINMAXXING'/>
      <Card type='youtube' link='https://www.youtube.com/embed/4MAupwjl3pc?si=5ERrVqyJM7CdQpff' title='Art of Wining in TECH'/>

      </div>
    </div>
  )
}

export default App
