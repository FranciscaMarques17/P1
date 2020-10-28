
let mouseCursor = document.querySelector(".cursor");


window.addEventListener('mousemove', cursor);

// 'e' é event; no console.log dá para ver o pageX e pageY
function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

//vai buscar a palavra
const text = document.querySelector('.transparency');

//põe dentro de stringTxt o conteudo real do texto aka as letras aka o string
const stringTxt = text.textContent;

//divide o string com aspas - nota: quando estava com div contava as letras do restante código (PERGUNTAR???)
const splitTxt = stringTxt.split("");
text.textContent = ""; //para não repetir a palavra

//aceder a cada letra com span
for (let i=0; i< splitTxt.length; i++){
    text.innerHTML += "<span>" + splitTxt[i] + "</span>";
}


//timer
let char = 0;
let timer = setInterval(tikTok, 100);

//tranparente
function tikTok(){

    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char ++;

    if(char === splitTxt.length){
        //complete();
        return;
        
    }
}

function complete(){
    clearInterval(timer);
    timer= null;
}


function toggleScrollOff(e){
    let element = e.target;

    element.setAttribute('scrollamount', '0');
}

function toggleScrollOn(e){
    let element = e.target;

    element.setAttribute('scrollamount', 500);
}