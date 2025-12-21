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

        


<div class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">القائمة</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="إغلاق"></button>
  </div>
  <div class="offcanvas-body">
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
           <div className='p-5 bg-black'>
                  <a href="#"><i className="fas fa-search p-2  m-2 color-icon"></i></a>
                <a href="#"><i className="fas fa-heart p-2  m-2 color-icon"></i></a>
                <a href="#"><i className="fas fa-shopping-cart p-2  m-2 color-icon"></i></a>
                </div>
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
      <button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        ☰ القائمة
      </button>

      {/* القائمة الجانبية تظهر فقط على الموبايل */}
      <div className="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">القائمة</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="إغلاق"></button>
        </div>
        <div className="offcanvas-body">
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










      export default class Nav extends Component {
       constructor() {
          super()
          this.state = {
            menuData: navMenu,
            theme: "light" // الحالة الافتراضية
          }
        }
      
        toggleTheme = () => {
          this.setState(
            { theme: this.state.theme === "light" ? "dark" : "light" },
            () => {
              // نضيف الكلاس على الـ body
              document.body.className = this.state.theme;
            }
          );
        }
        
        render() {
          return <>
      
      
            <section className='hight  bg-color '>
      
              <nav className="navbar navbar-expand-lg   h-nav  "  >
                <div className="container-fluid">
                   <button onClick={this.toggleTheme} className="btn btn-outline-secondary m-2">
                      {this.state.theme === "light" ? "🌙 وضع الظلام" : "☀️ وضع النهار"}
                    </button>
      
                  <div className='p-5'>
                    <a href="https://www.facebook.com/share/17cGtcRavL/"><i className="fab fa-facebook p-4  m-2   color-icon "></i></a>
                    <a href="https://www.instagram.com/_ad_special_piece?igsh=NWNvNjkyamFjZW02"><i className="fab fa-instagram p-4 m-2  color-icon "></i></a>
                    <a href="https://youtube.com"><i className="fab fa-youtube p-4 m-2  color-icon"></i></a>
                    <a href="https://www.tiktok.com/@specialpiece..ad?_r=1&_t=ZS-92A6xHm2iij"><i className="fab fa-tiktok p-4 m-2  color-icon"></i></a>
                  </div>
                 
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                 
                  <div className="collapse navbar-collapse p-5 " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
      
      
                      <div className='p-5'>
                        <a href="#"><i className="fas fa-search p-2  m-2 color-icon"></i></a>
                      <a href="#"><i className="fas fa-heart p-2  m-2 color-icon"></i></a>
                      <a href="#"><i className="fas fa-shopping-cart p-2  m-2 color-icon"></i></a>
                      </div>
      
      
      
      
      
                    </ul>
      
                  </div>
                </div>
              </nav>
              <div class="d-flex justify-content-center align-items-center  ">
                <nav className="navbar navbar-expand-lg bg-nav h-nav2 w-75 radius">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                      <img src="./public/photo/logo2.jpg " alt="" width="90" height="70" className=' logo' />
                    </a>
      
      
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                      <ul className="navbar-nav  ">
                        {
                          this.state.menuData &&
                          this.state.menuData.map(
                            (item, index) => <li key={index}>
                              <a className="nav-item nav-link active p-4" href={item.href}>
                                {item.title}
                              </a>
                            </li>
                          )
                        }
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
      
            </section>