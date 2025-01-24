

 const btn=document.querySelector("#boton1");
 const btn2=document.querySelector("#boton2");
 const caja=document.querySelector("#cajita");
 const img1=document.querySelector("#img1");
 const img2=document.querySelector("#img2");
 btn.addEventListener("click",()=>{
    alert("Hola Mundo")
 });
 btn2.addEventListener("click",()=>{
    var texto;
    texto=caja.value;
    alert(texto)
 })
 img1.addEventListener("mouseover",()=>{
    img2.style.display="block"
 })
 img1.addEventListener("mouseaut",()=>{
    img2.style.display="none"
 })
 img1.addEventListener("doblclick",()=>{
    img1.style.display="none"
 })