import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const products = [ 
  { id: 1, name: "تيشيرت", price: 150, image: "../../public/photo/نيلز1.jpg" },
   { id: 2, name: "حذاء", price: 300, image: "/images/shoes.jpg" }, 
  { id: 3, name: "شنطة", price: 200, image: "/images/bag.jpg" },
 ];

export default function Card() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    // نستخدم context عشان ننظف الأنيميشن لما يتعمل unmount
    const ctx = gsap.context(() => {
      // أنيميشن للكونتينر كله
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",   // يبدأ لما يوصل 80% من الشاشة
          toggleActions: "play none none reverse"
        }
      });

      // أنيميشن متسلسل للعناصر الداخلية
      gsap.from(el.querySelectorAll("h1, h4, p, .d-flex"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <br />
      <br />

      <div className="m-1 row" ref={containerRef}>
        {/* القسم الأيسر (الصورة) */}
        <div className="col-6 col-md-6 d-flex justify-content-center">
          <a href="">
            <img
              src="../../public/photo/نيلز1.jpg"
              alt="نيلز"
              className="   card-imgs"
            
            />
          </a>
        </div>

        {/* القسم الأيمن (النص) */}
        <div className="col-12 col-md-6  ">
          <div className="w-100  b">
            <h1>1.5mm flouka single layer rat tail</h1>
            
            <br />
            <br />
            <br />

            <h4>السعر: 80</h4>
            <br />
            <br />
            <br />
            <p>سلسله ستانلس ستيل من تصنيع فلوكه متوفره بسمك 1.5 مللي</p>
            <br />
            <br />
            <br />

            <div className="d-flex flex-wrap gap-3">
              <button className="red">اضافه الي السله</button>
              <button className="green">اشتري الان</button>
            </div>
          </div>

        </div>
      </div>


    </>

  );
}
