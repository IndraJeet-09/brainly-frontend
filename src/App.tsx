import Dashboard from "./pages/dashboard";
import SharePage from "./pages/SharePage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Routes, Route , BrowserRouter } from "react-router-dom";

export default function App(){
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/share/:shareLink" element={<SharePage/>}/>
    </Routes>
  </BrowserRouter>
}