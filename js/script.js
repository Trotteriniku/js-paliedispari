
const btn =document.querySelector('button');
let palienNum;

function palieCeck() {
    
} 

btn.addEventListener('click',function() {
    palienNum =document.getElementById('text');
    let palieNumEl = palienNum.value
    let parola1 = ''
    let parola2 = ''
    

   for (let i = 0; i < palieNumEl.length; i++) {
         parola1 += palieNumEl[i];
         
    }
    
   for (let j = palieNumEl.length -1; j >= 0; j--) {
        parola2 += palieNumEl[j];
   }
   console.log(parola2);

   parola1 === parola2 ? true: false;

   
    
   

} 
 
  
    // creo un for che mi stampi le lettere normali poi uno che lo fa al contrario e le loro i combaciano è palindroma
)