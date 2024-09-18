const input=document.querySelector('input');
const buttoninserir=document.querySelector('.button_inserir');

const buttonremovetodos=document.querySelector('.button_remove_todos');
const ol= document.querySelector('ol');
const button = document.querySelectorAll('button');


button.forEach((itembutton,indice)=>{
    itembutton.addEventListener('mouseenter',()=>{
        itembutton.style.cursor='pointer'
    })

    if(indice == 0){
        itembutton.style.border='none'
        itembutton.style.fontWeight='bold'
        itembutton.style.padding='5px'
        itembutton.style.borderRadius='4px'
    }

    if(indice == 1){
        itembutton.style.border='none'
        itembutton.style.fontWeight='bold'
        itembutton.style.padding='5px'
        itembutton.style.borderRadius='4px'
    }


    if(indice == 2){
        itembutton.style.border='none'
        itembutton.style.fontWeight='bold'
        itembutton.style.padding='5px'
        itembutton.style.borderRadius='4px'
    }




    



})


//aplicando evento teclado para inserir os dados 

input.addEventListener('keyup',teclado);
function teclado(evento){

    if(input.value=="" &&   evento.key === 'Enter'){
        alert('Erro,digite algo')
    }else{
        
        if( evento.key === 'Enter'  ){
            const li= document.createElement('li');
            const button=document.createElement('button')
            button.setAttribute ('class','button_a')
            li.append(input.value,button);
        ol.appendChild(li);
        button.innerText='❌'
        input.value="" 
        button.addEventListener('click', removeuni);
        function removeuni(){
            li.remove();
        }

        }
    }

   

}



//aplicando button para inserir 
buttoninserir.addEventListener('click',inserir);
function inserir(){
    const li = document.createElement('li');
    const button=document.createElement('button')
            button.setAttribute ('class','button_b')
            li.append(input.value,button);
    ol.appendChild(li);
    button.innerText='❌'
     input.value=""
        button.addEventListener('click', removeuni);
        function removeuni(){
            li.remove();
        }


}











//aplicando remover todos
buttonremovetodos.addEventListener('click',removetodos);
function removetodos(){
const removeli=document.querySelectorAll('li');
ol.remove(removeli[removeli.length]);
location.reload()

}













