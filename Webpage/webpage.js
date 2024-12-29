  document.getElementById("FbButton").addEventListener("click", function (event) {
    event.preventDefault(); 
    const confirmation = confirm("Bạn sẽ được chuyển tiếp sang trang khác. Bạn có muốn tiếp tục không?");
    
    if (confirmation) {
      window.location.href = "https://www.facebook.com/duy.dong.9028194/";
    } else {
      alert("Đã hủy");
    }
  });
//   const slider = document.querySelector('.slider-container');
// const videos = document.querySelectorAll('.slider iframe');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// let currentIndex = 0;
// function updateSlider() {
//   videos.forEach((video, index) => {
//     if (index === currentIndex) {
//       video.classList.add('active');
//     } else {
//       video.classList.remove('active');
//     }
//   });
// }
// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex === 0) ? videos.length - 1 : currentIndex - 1;
//   updateSlider();
// });
// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex === videos.length - 1) ? 0 : currentIndex + 1;
//   updateSlider();
// });
// updateSlider();

  