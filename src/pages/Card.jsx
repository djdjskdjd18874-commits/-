import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { useParams } from "react-router";
import products from "../../static/product";



gsap.registerPlugin(ScrollTrigger);

export default function Card(product) {
  function Nelis({ products }) {
  const { id } = useParams(); // يجيب الـ id من الرابط
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2>المنتج غير موجود</h2>;
  }
  
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
    <div className="row m-1">
      {/* القسم الأيسر (الصورة) */}
      <div className="col-6 d-flex justify-content-center">
        <img src={product.image} alt={product.name} className="card-imgs" />
      </div>

      {/* القسم الأيمن (النص) */}
      <div className="col-6">
        <h1>{product.name}</h1>
        <h4>{product.price}$</h4>
        <p>سلسله ستانلس ستيل من تصنيع فلوكه متوفره بسمك 1.5 مللي</p>
        <div className="d-flex flex-wrap gap-3">
          <button className="red">اضافه الي السله</button>
          <button className="green">اشتري الان</button>
        </div>
      </div>
    </div>
  );
}
}

  
