import React from 'react'
import "./team.scss"

export default function Team() {
  return (
    <div className="team">
        <div className="container">
        <h1>Our team</h1>
        <div className="cards">
        <div className="card">
            <div className="bg-image">
                <img src="assets/background.png" alt=""/>
            </div>
            <div className="pic">
                <img src="assets/Profile_CM.png" alt=""/>
            </div>
            <div className="info">
                <h2>Marie</h2>
                <h3>CO FOUNDER / DATA SCIENTIST / CM </h3>
                <p>Web2 front end developer jumping into the Web3 world. Loves fitness, spending time with his cat and big on Maurice's steaks.</p>
            </div>
        </div>
        <div className="card">
            <div className="bg-image">
                <img src="assets/background.png" alt=""/>
            </div>
            <div className="pic">
                <img src="assets/alex.png" alt=""/>
            </div>
            <div className="info">
                <h2>Alexandre</h2>
                <h3>CO FOUNDER / ENGINEER / DESIGNER </h3>
                <p>Web2 front end developer jumping into the Web3 world. Loves fitness, spending time with friends and my girlfriend and playing video games.</p>
            </div>
        </div>
        </div>  
        </div>
    </div>
  )
}
