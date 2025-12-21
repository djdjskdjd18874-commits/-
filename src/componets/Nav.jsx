import React, { Component } from 'react'
import { navMenu } from '../../static/menu'

export default class Nav extends Component {
 constructor() {
    super()
    this.state = {
      menuData: navMenu,
    
    }
  }

  
  
  render() {
    return <>


      <section className='hight  bg-color '>

        <nav className="navbar navbar-expand-lg   h-nav  "  >
          <div className="container-fluid">
           

            <div className='p-5'>
              <a href="https://www.facebook.com/share/17cGtcRavL/"><i className="fab fa-facebook p-4  m-2   color-icon "></i></a>
              <a href="https://www.instagram.com/_ad_special_piece?igsh=NWNvNjkyamFjZW02"><i className="fab fa-instagram p-4 m-2  color-icon "></i></a>
              <a href="https://youtube.com"><i className="fab fa-youtube p-4 m-2  color-icon"></i></a>
              <a href="https://www.tiktok.com/@specialpiece..ad?_r=1&_t=ZS-92A6xHm2iij"><i className="fab fa-tiktok p-4 m-2  color-icon"></i></a>
              
            </div>
           
           
           
             


                <div className='p-5'>
                  <a href="#"><i className="fas fa-search p-2  m-2 color-icon"></i></a>
                <a href="#"><i className="fas fa-heart p-2  m-2 color-icon"></i></a>
                <a href="#"><i className="fas fa-shopping-cart p-2  m-2 color-icon"></i></a>
                </div>





              

            </div>
          
        </nav>

        


<div class="offcanvas offcanvas-start d-lg-none bg-dark-subtle" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  <div class="offcanvas-header"> 
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">القائمة</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="إغلاق"></button>
  </div>
  <div class="offcanvas-body">
     <ul className="navbar-nav">
       <div className='p-5 bg-dark-subtle'>
                  <a href="#"><i className="fas fa-search p-4  m-3  text-dark"></i></a>
                <a href="#"><i className="fas fa-heart p-4  m-3 text-dark"></i></a>
                <a href="#"><i className="fas fa-shopping-cart p-3  m-3 text-dark"></i></a>
                </div>
 
          {
            this.state.menuData &&
            this.state.menuData.map(
              (item, index) => (
                <li key={index}>
                  <a className="nav-item nav-link active p-4" href={item.href}>
                    {item.title}
                  </a>
                </li>

              )
            )
          }
          
        </ul>
  </div>
</div>

       <div class="d-flex justify-content-center align-items-center">
  <nav className="navbar navbar-expand-lg bg-nav h-nav2 w-75 radius">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="./public/photo/logo2.jpg" alt="" width="90" height="70" className="logo" />
      </a>

      {/* زر الفتح يظهر فقط على الموبايل */}
      <button className="btn  bg-success-subtle d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        ☰ القائمة
      </button>

      {/* القائمة الجانبية تظهر فقط على الموبايل */}
      <div className="offcanvas offcanvas-start d-lg-none " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">القائمة</h5>
          <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="إغلاق"></button>
        </div>
        <div className="offcanvas-body ">
          
          <ul className="navbar-nav">
            
            {
              this.state.menuData &&
              this.state.menuData.map(
                (item, index) => (
                  <li key={index} className="nav-item">
                    <a className="nav-link active p-4" href={item.href}>
                      {item.title}
                    </a>
                  </li>
                )
              )
            }
            
          </ul>
        </div>
      </div>

      {/* الكولابس العادي يظهر فقط على الشاشات الكبيرة */}
      <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
        <ul className="navbar-nav">
          {
            this.state.menuData &&
            this.state.menuData.map(
              (item, index) => (
                <li key={index}>
                  <a className="nav-item nav-link active p-4" href={item.href}>
                    {item.title}
                  </a>
                </li>
              )
            )
          }
        </ul>
      </div>
    </div>
  </nav>
</div>


      </section>
  <div className="bg-Home d-flex justify-content-center align-items-center d-none d-lg-block">
  <div className="text-center">
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1 className="text-white">Shop</h1>
    <h1 className="text-white">الرئيسية</h1>
  </div>
</div>





    </>

  }
}
