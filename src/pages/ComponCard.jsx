import React from 'react'

export default function ComponCard() {
  return(
  <>
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
          <img src="/photo/Nelis2.jpg.jpeg" alt="" class="img-fluid images" />
        </a>
      </div>
    </div>

  </div>
</div>
  </>
  )
}
