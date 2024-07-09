// 모달 요소와 모달을 여닫는 버튼 요소를 선택
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");


// 버튼 클릭 시 모달 열기
btn.onclick = function() {
  modal.style.display = "block";
}



// 모달 바깥 영역 클릭 시 모달 닫기
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}