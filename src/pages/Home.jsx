import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return <>
<br />
<br />
<br />

<h1 className='text-center'>الاقسام</h1>

     <div className="row container-fluid">
  {/* القسم الأيسر */}
  <div className="col-12 col-lg-6 row ">
    {/* صورة إضافر */}
    <div className="col-12 col-lg-6 position-relative">
      <a href="#">
        <img
          src="../../public/photo/Nelis.webp"
          alt="اضافر"
          width="350"
          height="250"
          className="m-5 "
        />
      </a>
      <div className="image-overlay text-center">
        <h2>اضافر</h2>
      </div>
    </div>

    {/* صورة شنط */}
    <div className="col-12 col-lg-6">
      <a href="#">
        <img
          src="../../public/photo/Bages.webp"
          alt="شنط"
          width="350"
          height="250"
          className="m-5"
        />
      </a>
    </div>

    {/* صورة اكسسوارات */}
    <div className="col-12 col-lg-6">
      <a href="#">
        <img
          src="../../public/photo/اكسسوار1.jpeg"
          alt="اكسسوارات"
          width="350"
          height="250"
          className="m-5"
        />
      </a>
    </div>

    {/* صورة ساعة */}
    <div className="col-12 col-lg-6">
      <a href="#">
        <img
          src="../../public/photo/ساعه.webp"
          alt="ساعة"
          width="350"
          height="250"
          className="m-5"
        />
      </a>
    </div>
  </div>

  {/* القسم الأيمن (اللوجو) */}
  <div className="col-6 d-flex justify-content-center align-items-center  d-none d-lg-block">
    <a href="#">
      <img
        src="../../public/photo/logo3.jpg"
        alt=""
        width="600"
        height="600"
        className="m-5 "
      />
    </a>
  </div>
</div>

    </>
  }
}
