
const btn =document.querySelector('button');
let palienNum;


btn.addEventListener('click',function() {
    palienNum =document.getElementById('text');
    const alert =document.querySelector('.alert');
    alert.classList.remove('d-none')
    let palieNumEl = palienNum.value
    let parola1 = ''
    let parola2 = ''
    let msg;

   for (let i = 0; i < palieNumEl.length; i++) {
         parola1 += palieNumEl[i];   
    }
   for (let j = palieNumEl.length -1; j >= 0; j--) {
        parola2 += palieNumEl[j];
   }

   if (parola1 === parola2) {
        alert.classList.add('alert-success')
        msg =`
        Bravo ${parola1} è una parola palindroma!!
        `
        alert.innerHTML=msg
   } else {
        alert.classList.remove('alert-success')
        alert.classList.add('alert-info')
        msg =`
        Mi spiace ma ${parola1} è una parola non  palindroma prova con parole come (osso,ingegni...etc)!!
        `
        alert.innerHTML=msg
   }
   
        
   

} 
 
  
    // creo un for che mi stampi le lettere normali poi uno che lo fa al contrario e le loro i combaciano è palindroma
)