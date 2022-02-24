import React from 'react'

import './welcome.css'
const WelcomeScreen = ({setShowCategory}) => {
    const goToSection = () => setShowCategory(true);
  return (
    <div className='mainContainer'>
        <div className="welcomeSection">
           <h1>WELCOME TO <br/><span className='name-title'>CHUCK NORRIES</span> </h1>  
        </div>
        <button className='btn-main' onClick={goToSection}>Read Jokes</button>
    </div>
  )
}

export default WelcomeScreen