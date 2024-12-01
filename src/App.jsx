import React from 'react'
import Sidebar from './Components/Sidebar'
import Mainbar from './Components/Mainbar'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#977EFE] flex justify-center items-center'>

    <div className='h-[85%] w-[70%] border-8 rounded-3xl border-white flex'>
    <Sidebar/>
    <Mainbar/>

    </div>
    
    
     </div>
  )
}

export default App