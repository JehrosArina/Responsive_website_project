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



// Heart Functionality //

const hearIcon1 = document.getElementById('heart1');
const hearIcon2 = document.getElementById('heart2'); 
const hearIcon3 = document.getElementById('heart3'); 
const hearIcon4 = document.getElementById('heart4'); 
const hearIcon5 = document.getElementById('heart5'); 
const hearIcon6 = document.getElementById('heart6'); 
const hearIcon7 = document.getElementById('heart7'); 
const hearIcon8 = document.getElementById('heart8'); 
const hearIcon9 = document.getElementById('heart9'); 

let isItClick1 = false;


hearIcon1.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart1').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart1').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }
     


hearIcon2.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart2').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart2').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }

    hearIcon3.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart3').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart3').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }
     

    hearIcon4.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart4').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart4').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }

    hearIcon5.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart5').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart5').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }
     

    hearIcon6.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart6').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart6').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }


    hearIcon7.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart7').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart7').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }


    hearIcon8.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart8').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart8').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }


    hearIcon9.onclick = function(e){
    e.preventDefault();
      if(isItClick1){
        //    document.getElementById('h1').innerHTML= 'red';
                   document.getElementById('heart9').style.color= 'red';
                   isItClick1 = false;
      }else{
        // document.getElementById('h1').innerHTML= 'blue';
              document.getElementById('heart9').style.color= 'gray';
             isItClick1 = true;
      } 
   
    }


    // READ FUNCTIONALITY  //

    



const read1 = document.getElementById('read1');
const read2 = document.getElementById('read2');
const read3 = document.getElementById('read3');
const read4 = document.getElementById('read4');
const read5 = document.getElementById('read5');
const read6 = document.getElementById('read6');
const read7 = document.getElementById('read7');
const read8 = document.getElementById('read8');
const read9 = document.getElementById('read9');


     read1.onclick = function(e){
    e.preventDefault();
     document.getElementById('read1').style.color = 'green';
     
}

    read2.onclick = function(e){
    e.preventDefault();
     document.getElementById('read2').style.color = 'green';
     
}

  read3.onclick = function(e){
    e.preventDefault();
     document.getElementById('read3').style.color = 'green';
     
}


  read4.onclick = function(e){
    e.preventDefault();
     document.getElementById('read4').style.color = 'green';
     
}

  read5.onclick = function(e){
    e.preventDefault();
     document.getElementById('read5').style.color = 'green';
     
}

  read6.onclick = function(e){
    e.preventDefault();
     document.getElementById('read6').style.color = 'green';
     
}

  read7.onclick = function(e){
    e.preventDefault();
     document.getElementById('read7').style.color = 'green';
     
}

  read8.onclick = function(e){
    e.preventDefault();
     document.getElementById('read8').style.color = 'green';
     
}

  read9.onclick = function(e){
    e.preventDefault();
     document.getElementById('read9').style.color = 'green';
     
}



     
     
     
     
     
     
    
