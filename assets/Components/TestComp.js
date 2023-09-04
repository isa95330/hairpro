import React from 'react';

import'../css/app.css';
import'./public/assets/css/styles.css';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function TestComp() {

  const titleRef = useRef()

  const onLoad = () => {
    gsap.timeline({
      onComplete: function () {
        console.log('animation terminée')
      }
    })
      .fromTo(".letter",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.33,
        delay: 0.7
      }      
    )
    .to(".title", {
      y: 45,
      delay: 0.7
    })
    .to(".letter", {
      margin: "0 5vw",
      delay: 0.8,
      duration: 0.5
    })
    .to(".letter", {
      margin: "0",
      delay: 0.8,
      duration: 0.5
    })
    .to(".letter", {
      x: -titleRef.current.clientWidth,
      delay: 1,
      duration: 2,
      rotate: -360
    })
    .to(window, {      
      duration: 0.5,
      scrollTo: "#nextSection"
    })
    .to("#nextSection", {      
      backgroundColor: "#000",
      color: "#fff",
      duration: 0.2
    })
    .to(".title", {
      y: 0
      
    })
    .to(".letter", {
      x: 0,
      delay: 1,
      duration: 2
    })
  }

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    )
  }

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#000", color: "#FFF" })
  }

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#FFF", color: "#000" })
  }

  useEffect(() => {
    onLoad();
  }, [])
  useEffect(() => {
    slideInTop("#box1-gsap");
  }, [])
  useEffect(() => {
    slideInTop("#box2-gsap");
  }, [])


  
  return (
   
    <div className="TestComp">
      <h1 className="title" ref={titleRef}>
        <span className="letter">H</span>
        <span className="letter">A</span>
        <span className="letter">I</span>
        <span className="letter">R</span>
        
      </h1>
      <section id="nextSection">
        <div id="box1-gsap" className="box-gsap">
          <img src="images/Marie4.jpg" alt="..."></img>
        </div>
       
        <div id="box2-gsap" className="box-gsap">
         <p>La beauté du ciel est dans les étoiles</p>
          <h1>La beauté des femmes est dans leur cheveux</h1> 
        </div>
    
      </section>

      {/* <section id="lastSection">
        <div id="box5" className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
         
        </div>
      </section> */}
    </div>
  )
}
export default TestComp;
