const ruotaMinuti = document.getElementById("ruotaMinuti");
const ora = document.getElementById("ora");

// var d = new Date();
// ora.innerHTML = d.getHours();

// function calcolaGradi() {
//     return d.getMinutes() * 6 + d.getSeconds() / 60;
// }

// ruotaMinuti.style.setProperty("--angolo-iniziale", calcolaGradi() + "deg");

// var id = setInterval(frame, 60);
// var tmp = 0;
// var start = calcolaGradi();
// ruotaMinuti.style.transform = "rotate(" + start + "deg)";
// function frame() {
//     if (tmp == 360) {
//         ora.innerHTML = d.getHours();
//         clearInterval(id);
//     } else {
//         ++tmp;
//         ruotaMinuti.style.transform = "rotate(" + calcolaGradi() + "deg)";
//     }
// }

function setTime() {

    let d = new Date(); 

    // let date = date_now.getDate();
    // let day = date_now.getDay();
    // let month = date_now.getMonth();
    // let year = date_now.getFullYear();

    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    // let calc_hr = (hr * 30) + (min / 2);
    // let calc_min = (min * 6) + (sec / 10);
    // let calc_sec = sec * 6;
    
    // hourEl.style.transform = `rotate(${calc_hr}deg)`;
    // minuteEl.style.transform = `rotate(${calc_min}deg)`;
    // secondEL.style.transform = `rotate(${calc_sec}deg)`;

    ora.innerHTML = hr;
    ruotaMinuti.style.transform = "rotate(" + (min + 5 * sec / 300) * 6 + "deg)";

}

setTime()
setInterval(setTime, 1000);

