window.addEventListener("load", ()=>{
  const btn = document.querySelector("menu-toggle-btn");
  const gnb = document.querySelector(".gnb")



  btn.addEventListener("click", () =>{
    let comStyle = window.getComputedStyle(gnb);
    console.log(height)

if(height ==="0px"){
  //scrollHeight = 보이지 않는 컨텐츠를 포함한 높이
  gnb.style.maxHeight = gnb.scrollHeight + "px";
}else{ //gnb의 높이가 0이 아니면 다시 접음(gnb가 펼쳐져 있을 시.)
  gnb.style.maxHeight = "0px";
}

})

})