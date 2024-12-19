  document.getElementById("FbButton").addEventListener("click", function (event) {
    event.preventDefault(); 
    const confirmation = confirm("Bạn sẽ được chuyển tiếp sang trang khác. Bạn có muốn tiếp tục không?");
    
    if (confirmation) {
      window.location.href = "https://www.facebook.com/duy.dong.9028194/";
    } else {
      alert("Đã hủy");
    }
  });
  