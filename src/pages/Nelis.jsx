import React, { Component } from 'react';
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ComponCard from "./ComponCard";
import products from "/static/product";





gsap.registerPlugin(ScrollTrigger);


export default class Nelis extends Component {

 componentDidMount() {
    gsap.utils.toArray(".images").forEach((img) => {
      gsap.fromTo(img,
        { opacity: 0, scale: 0.7, rotation: 15 },   // يبدأ صغير وبدوران بسيط
        {
          scrollTrigger: {
            trigger: img,
            start: "top 85%",     // يبدأ لما الصورة تدخل الشاشة
            end: "bottom 15%",    // ينتهي لما الصورة تخرج
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          scale: 1,               // يكبر تدريجيًا
          rotation: 0,            // يرجع للوضع الطبيعي
          duration: 1.5,
          ease: "back.out(1.7)"
        }
        
      );
      
    });
  
 



 }

 
  render() {
    return <>
   
   

    <br />
    <br />
    <ComponCard/>
    <div className="row">
  {products.map((product, index) => (
    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div className="position-relative image-container">
        
          <img src={product.image} alt="Card" className="images" />   
              <div className="text-center bg-body-secondary image">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h5>{product.price}</h5>
        </div>
      </div>
    </div>
  ))}
</div>








      </>
    
    
  }
}
