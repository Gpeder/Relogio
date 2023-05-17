const horas=document.querySelector('.horas')
const minutos=document.querySelector('.minutos')
const segundos=document.querySelector('.segundos')

const relogio = setInterval(function time(){

    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minu = dateToday.getMinutes();
    let segun = dateToday.getSeconds();

    
    if (hora < 10) hora ="0" + hora;
    if (minu < 10) minu ="0" + minu;
    if (segun < 10) segun ="0" + segun;
    
    horas.textContent= hora;
    minutos.textContent= minu;
    segundos.textContent= segun;
})