let btnref=document.querySelectorAll(".button-option");
let popupref=document.querySelector(".popup");
let newgamebtn=document.getElementById("new-game");
let restartbtn=document.getElementById("restart");
let msgref=document.getElementById("message");

let winningpattern=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

let xturn=true;
let count=0;
  const disableButtons=() => {
      btnref.forEach((element) => (element.disabled=true));
      popupref.classList.remove("hide");
  };

   const enableButtons= () => {
       btnref.forEach((element) => {
           element.innerText="";
           element.disabled= false;
       });

       popupref.classList.add("hide");
   };
 

 const winfunction = (letter) =>{
     disableButtons();
     if(letter == "X"){
         msgref.innerHTML= "&#x1F389; <br> 'X' wins";
     }
     else{
         msgref.innerHTML="&#x1F389; <br> 'O' wins";
     }
 };

 const drawFuction= () => {
     disableButtons();
    msgref.innerHTML="&#x1F60E; <br> it's a draw";
 };


 newgamebtn.addEventListener("click",() => {
     count=0;
     enableButtons();
 });



 restartbtn.addEventListener("click",() =>{
     count=0;
     enableButtons();
 });





 const winchecker=() => {
     for(let i of winningpattern){
         let[element1,element2,element3]=[
             btnref[i[0]].innerText,
             btnref[i[1]].innerText,
             btnref[i[2]].innerText,
         ];

         if(element1 != "" && (element2 != "") && (element3 != "")){
             if(element1 == element2 && element2== element3){
                 winfunction(element1);
             }
         }
     }
 }

btnref.forEach((element) => {
    element.addEventListener("click",() => {
        if(xturn){
            xturn=false;
            element.innerText="X";
            element.disabled=true;
        }
        else{
            xturn=true;
            element.innerText="O";
            element.disabled=true;
        }
        count+=1;
        if(count===9){
            drawFuction();

        }

        winchecker();
    });
});

window.onload = enableButtons;