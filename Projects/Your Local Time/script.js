const clock = document.getElementById('clock');

setInterval(function (){
    const time = new Date();
    clock.innerHTML = time.toLocaleString();
},1000)