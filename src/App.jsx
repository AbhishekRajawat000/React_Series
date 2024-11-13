

import './App.css'

import { useState } from "react"

function App() {
 const [color, setColor]= useState('olive')

 // random color generator
 const randomColor = () => {
  const r = Math.floor(Math.random() * 256); // Random value between 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  setColor(`rgb(${r}, ${g}, ${b})`);
}

//  function changeColor(color){ use this function to change the color but  another way useing setColor 
//   setColor(color);
//  }

  return (
   <div className='w-full h-screen duration-200' style = {{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center shadow-lg bg-slate-400 px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full bg-red-500 dark:md:hover:bg-slate-400 ...text-black'>Red</button>
        <button onClick={()=>setColor('yellow')} className='outline-none px-4 py-1 rounded-full bg-yellow-500 dark:md:hover:bg-slate-400 ... shadow-lg text-black'>Yellow</button>
        <button onClick={()=>setColor('pink')} className='outline-none px-4 py-1 rounded-full bg-pink-500 dark:md:hover:bg-slate-400 ... shadow-lg text-black'>Pink</button>
        <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full bg-blue-500 dark:md:hover:bg-slate-400 ... shadow-lg text-black'>Blue</button>
        <button onClick={()=>setColor('Green')} className='outline-none px-4 py-1 rounded-full bg-green-500 dark:md:hover:bg-slate-400 ... shadow-lg text-black'>Green</button>
        <button onClick={()=>setColor(randomColor)} className='outline-none px-4 py-1 rounded-full bg-gray-500 dark:md:hover:bg-slate-400 ... shadow-lg text-black'>RDM</button>
      </div>

    </div>
   </div>
  )
}

export default App

