const input = document.getElementById('inputbox');
const butns= document.querySelectorAll('button');

let string="";
Array.from(butns).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string=string.slice(0,string.length-1);
            input.value=string;
        }
        else{
            string=string + e.target.innerHTML;
            input.value=string;
        }
    })
})