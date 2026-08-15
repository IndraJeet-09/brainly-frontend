import { Input } from "../components/CreateContent"


function Signin() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded shadow-md min-w-48">
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
        </div>
    </div>
  )
}

export default Signin