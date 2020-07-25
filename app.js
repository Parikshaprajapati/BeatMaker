window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
         "#26a760",
         "#e23d56",
         "#ac1aa6",
         "#ddbe18",
         "#0e51e8",
         "#19d9bc"
    ];
    
    //console.log(sounds);
    //lets get going with the sound here
    
    pads.forEach((pad,index)=>{
      pad.addEventListener('click',function(){
          sounds[index].currentTime=0;
         sounds[index].play(); 
          createBubbles(index);
      });   
    });
    
    //create a function that makes bubbles
    const createBubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
    bubble.addEventListener('animationend',function(){
       visual.removeChild(this); 
    });
    };
});

