import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Modal} from "./components/Modal"
function App() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div>
     <button onClick={()=>setOpenModal(true)}>Modal</button>
     <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
    </div>
  )
}

export default App
