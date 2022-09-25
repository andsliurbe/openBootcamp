const nombre ="carlos";
const apellido = "Garcia";

const objeto ={
    nombre ,
    apellido
}
sessionStorage.setItem("objeto",JSON.stringify(objeto))
localStorage.setItem("miobjeto",JSON.stringify(objeto))


fecha = new Date();


console.log(`fecha inicial  ${fecha}`)

console.log(`minuts- ${fecha.getMinutes()}`)

fecha.setMinutes(fecha.getMinutes()+5)
console.log(`minutos agregados ${fecha.getMinutes()}`)

console.log(`fecha modificada  ${fecha}`)

console.log(fecha)
document.cookie="objeto="+JSON.stringify(objeto)+";expires="+fecha.toUTCString();
