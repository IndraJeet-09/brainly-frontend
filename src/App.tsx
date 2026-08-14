import './App.css'
import { Button } from './components/Button'
import  Card  from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <div >
      <Button variant='primary' text="Add Content" startIcon={<PlusIcon/>}></Button>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}></Button>

      <Card type='twitter' link='https://x.com/xKhalifan/status/2076011903357452465' title='BRAINMAXXING'/>
      <Card type='youtube' link='https://www.youtube.com/embed/4MAupwjl3pc?si=5ERrVqyJM7CdQpff' title='Art of Wining in TECH'/>
    </div>
  )
}

export default App
