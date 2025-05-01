const changeColour = function (){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i< 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

const changeBgColor = function (){
    document.body.style.backgroundColor = changeColour();
}

let interval;
const startChanging = function(){
    if(!interval){
        interval = setInterval(changeBgColor, 1000);
    }
}

const stopChanging = function (){
    clearInterval(interval)
    interval = null;
}

document.querySelector('#start').addEventListener('click', startChanging)

document.querySelector('#stop').addEventListener('click', stopChanging)