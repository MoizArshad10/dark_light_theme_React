import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [state , setState] = useState("light-theme")

  const change = () =>{
    if(state === "light-theme"){
      setState("dark-theme")
    }
    else{
      setState("light-theme")
    }
  }
 useEffect(()=>{
    document.querySelector("body").className = state
 },[state])
  return (
    <>
      <nav>
        <div className="logo">
          <h2>CODE</h2>
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li onClick={change}>{state == "light-theme" ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i> }</li>
        </ul>
      </nav>

      <div className="content">
        <div className="text">
          <h2>Trend's With Generation</h2>
          <h4>Shop Now Exciting Offers</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eos eaque provident consequatur inventore tempore ipsum veniam quisquam voluptatum pariatur et harum tempora placeat accusamus, adipisci dolorem rem in totam iure ipsam, deserunt beatae, expedita nemo sequi! Obcaecati quos nisi perferendis quo quisquam asperiores consequatur alias nesciunt ad, porro accusamus ipsa rerum, vitae deleniti facilis iure iste earum expedita laboriosam! Illo corrupti rem quisquam quod, nulla accusantium odit hic quam!</p>
        <button>Read More</button>
        </div>
        <div className="img">
          <img src="https://images.pexels.com/photos/29179699/pexels-photo-29179699/free-photo-of-young-woman-enjoying-music-indoors.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"  alt="" />
        </div>
      </div>
    </>
  )
}

export default App
