
 var elemento ;
(function(){
        elemento =document.getElementsByTagName("button")[0];
// console.log("sadsasadsa");


})();
elemento.addEventListener('click',()=>{
    alert(`click en el boton `)

})

$(document).on('click','button',function(){
    console.log( "Hola, estoy utilizando jQuery")
})