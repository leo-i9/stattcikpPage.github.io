const work = document.querySelectorAll('.work .item');
const wCont = work.length;
let count = 0;
console.log(wCont)
document.querySelector(".btn-closes").addEventListener("click", e=>{
    document.querySelector(".menu-movil").classList.toggle("cloro")
})

work.forEach(element => {
    element.addEventListener("click",e=>{
        console.log(e);
        e.preventDefault();
        count = parseInt(element.getAttribute("data-id"));
        count--;
        console.log(count);
       // const corrunt = document.querySelectorAll('.detalles-conteiner .item2')

        document.querySelectorAll("#detalles-conteiner .item2").forEach(item=>{item.classList.add("item-hiden")})
        document.querySelectorAll("#detalles-conteiner .item2")[count].classList.toggle("item-hiden")
        document.querySelector("#screen").style['animation-name']="dey-tey"

      
            document.querySelector("#btn-z").addEventListener('click', e=>{
                e.preventDefault()
            
                if(count > 0   ){
                document.querySelectorAll("#detalles-conteiner .item2").forEach(item=>{item.classList.add("item-hiden")})
                document.querySelectorAll("#detalles-conteiner .item2")[count-1].classList.toggle("item-hiden")
                if(count > 0)count--; 
            }
            });
document.querySelector("#btn-d").addEventListener("click",e=>{
 
    e.preventDefault()
    if(  count < wCont-1 ){
   document.querySelectorAll("#detalles-conteiner .item2").forEach(item=>{item.classList.add("item-hiden")})
    document.querySelectorAll("#detalles-conteiner .item2")[count+1].classList.toggle("item-hiden")
    if(count < wCont-1)count++;
}
})
        
        setTimeout(()=>{
            document.querySelector("#detalles-conteiner").style.display="block"
        },400)
      setTimeout(()=>{
        document.querySelector("#screen").style=""
      },
      1500
      )
      document.querySelector("#btn-close").addEventListener("click", e=>{
        e.preventDefault()
        document.querySelector("#detalles-conteiner").style.display ="none"
      })
    })
});



///MUY BIEN AQUI VA LO DE EL JUEGO DEL MEMORAMA JAJAJJAJ TU PUEDES

