// Navigation bar //

const nav = document.getElementById('nav-bar');
const close = document.getElementById('close');
const bar = document.getElementById('bar');

//click the bar

if(bar){

    bar.addEventListener('click', () =>{
    nav.classList.add('active'); 
    })
    }

// close the bar
    
if(close){

    close.addEventListener('click', () =>{
    nav.classList.remove('active'); 
    })
    }

    

    //  MAIN NFUNCTIONALITY //
 
let ol = document.querySelector('ol');

ol.addEventListener('click',function(e){
    if(e.target.className == "remove"){ // only select element which has class name 'remove'
    let length = document.querySelectorAll('.remove').length;
    if(length > 0){ //ignore to remove all list
    let remove = e.target.parentNode;
    remove.parentNode.removeChild(remove);
    }
    }
});