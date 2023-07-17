let slides=document.getElementsByClassName('myslide');
let dots=document.getElementsByClassName('fa-circle');
let numberOfslide=0;
slides[0].style.display='block';
dots[0].style.color='black';

function set(current){
    numberOfslide=current; //set the correct numberOfslide
    if(current>2){
        numberOfslide=0;
    }
    else if(current<0){
        numberOfslide=2;
    }
    for(let i=0;i<3;i++){   //clearing any display
        slides[i].style.display='none';
    }
    for(let i=0;i<3;i++){
        dots[i].style.color='#b0b0b0';
    }
    slides[numberOfslide].style.display='block';  //show the current slide
    dots[numberOfslide].style.color='black';
}

setInterval(()=>{
    let current=numberOfslide+1;
    set(current);
},4000);