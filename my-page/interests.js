function chipButton(){
    const chipButtons=document.querySelectorAll('.chip-button');
    console.log(chipButtons)
    console.log(chipButtons[0])
    console.log("반복문")
    for (let chipBtn of chipButtons){
        let l = chipBtn.parentElement;

        chipBtn.addEventListener('change', ()=>{
            console.log(`${chipBtn.id} 체크가 ${chipBtn.checked}로 바뀜`)
            aaa=chipBtn.parentElement;
            console.log(aaa)

            if (chipBtn.checked){
                aaa.classList.add('btn-rw');
                aaa.classList.remove('btn-gray');
            } else{
                aaa.classList.add('btn-gray');
                aaa.classList.remove('btn-rw');
            }
        })

        l.addEventListener('click',
            ()=>{
                chipBtn.checked=!chipBtn.checked;
            
            }
        )
        // console.log(chipBtn)

        

            // element.classList.replace('변경전이름', '변경후이름');
            // aaa.style.color=chipBtn.checked?'#FF0000':'#000000';
    }
}

window.onload = function(){
    chipButton();
};