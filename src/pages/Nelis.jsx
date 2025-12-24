import React, { Component } from 'react';
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    
       <div class="container-fluid  ">
  <div class="row g-2"> 
   <div class="d-flex justify-content-center align-items-center min-vh-100  ">

 <div class="bg-bink w-75 m-2 m-lg-5 p-2 p-lg-5 d-flex justify-content-center align-items-center">

    <form class="shadow p-4 rounded bg-white">
      <h2 class="text-center mb-4">طريقتنا في المقاسات (One Size Fits All)</h2>
      <p class="text-center text-muted mb-4">
        إحنا صممنا أطقم الأظافر بنظام الـ One Size المتطور عشان نوفر عليكي حيرة القياس.
      </p>

      <table class="table table-bordered text-center">
        <thead class="table-dark">
          <tr>
            <th>المجموعة</th>
            <th>عدد القطع</th>
            <th>المقاسات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>المجموعة الأساسية</td>
            <td>12 قطعة</td>
            <td>المقاسات الأساسية مع قطع إضافية للأحجام الأكثر شيوعاً</td>
          </tr>
          <tr>
            <td>المجموعة المتوسطة</td>
            <td>15 قطعة</td>
            <td>مقاسات متنوعة بزيادات دقيقة عشان تضمني تلاقي "المقاس المثالي" لكل ضافر</td>
          </tr>
          <tr>
            <td>المجموعة الاحترافية</td>
            <td>24 قطعة</td>
            <td>كل المقاسات الممكنة (من الصغير جداً للكبير)، وبتديكي بدائل لأي ضافر ممكن يضيع أو يتكسر</td>
          </tr>
        </tbody>
      </table>
    </form>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3 h-100 m-4 d-none d-md-block">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/Nelis2.jpg.jpeg" alt="" class="img-fluid images" />
        </a>
      </div>
    </div>

  </div>
</div>

    
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
         <Link to="/card">
            <img src="/public/photo/نيلز1.jpg" alt="Card" className="images" />
          </Link>
        <div className=' text-center bg-body-secondary  image '>
          <h3>
            
          </h3>
          <p>
            
          </p>
          <h5>
            
          </h5>
          
        </div>
       
           
        
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز2.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز3.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز4.jpg" alt="" class="images" />
        </a>
      </div>
    </div>


    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز5.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>


     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز6.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز7.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز8.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز9.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز10.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز11.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز12.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
    


     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز13.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز14.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز15.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز16.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز17.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز18.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز19.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز20.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز21.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز22.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز23.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز24.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>
     <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div class="position-relative image-container">
        <a href="">
          <img src="../../public/photo/نيلز25.jpg" alt="" class=" images" />
        </a>
      </div>
    </div>

   

  </div>
</div>









      </>
    
    
  }
}
