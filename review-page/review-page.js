// 모달 요소와 모달을 여닫는 버튼 요소를 선택
const openModalBtns = document.querySelectorAll('.openModalBtn');
const modal = document.getElementById('myModal');

// 버튼 클릭 시 모달 열기
openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// 모달 바깥 영역 클릭 시 모달 닫기
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
