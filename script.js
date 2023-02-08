//Fuction Click .btn-number
function Click(x){
    var btn = document.getElementsByClassName("btn-number");
    for( let z = 0; z < 5; z++){
        if(z != x ){
            btn[z].style.backgroundColor = 'hsl(213, 19%, 22%)';
            btn[z].style.color = 'hsl(216, 12%, 54%)';
        }
        else{
            btn[z].style.backgroundColor = 'hsl(217, 12%, 63%)';
            btn[z].style.color = 'hsl(0, 0%, 100%)';
        }
    }
    //Valuer
    localStorage.t = x+1;

}
//Valuer selected 
document.getElementById("valuer").innerHTML = localStorage.t;