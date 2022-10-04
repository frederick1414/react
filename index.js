function Timer() {

    let time = new Date();

    let hours = time.getHours().toString().length < 2 ? "0" + time.getHours() : time.getHours();
    let minutes = time.getMinutes().toString().length < 2 ? "0" + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds().toString().length < 2 ? "0" + time.getSeconds() : time.getSeconds();

    let clokh1 = `${hours}:${minutes}:${seconds}`;

    document.getElementById("time").innerHTML = clokh1;
  
}

setInterval(() => {
    Timer();
}, 1000);