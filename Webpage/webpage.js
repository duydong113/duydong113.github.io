document.getElementById("emailButton").addEventListener("click", function () {
    alert("Feel free to email me at: jovanka@example.com");
  });
  
  let slideIndex = 0;

  function changeSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    slides[slideIndex].classList.remove('active');  // Ẩn ảnh hiện tại
  
    slideIndex += n;
  
    if (slideIndex < 0) {
      slideIndex = slides.length - 1; // Chuyển về ảnh cuối cùng nếu ở ảnh đầu tiên
    } else if (slideIndex >= slides.length) {
      slideIndex = 0; // Chuyển về ảnh đầu tiên nếu ở ảnh cuối cùng
    }
  
    slides[slideIndex].classList.add('active');  // Hiển thị ảnh mới
  }
  
  // Khởi tạo slider và hiển thị ảnh đầu tiên
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider img');
    if (slides.length > 0) {
      slides[slideIndex].classList.add('active');  // Hiển thị ảnh đầu tiên
    }
  });
  