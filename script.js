const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  horas.textContent = hr < 10 ? '0' + hr : hr;
  minutos.textContent = min < 10 ? '0' + min : min;
  segundos.textContent = sec < 10 ? '0' + sec : sec;
}


const relogio = setInterval(atualizarRelogio, 1000);
