const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

  function setDate (){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondHandDegrees = ((seconds / 60 )*360) + 90;
    secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minuteHandDegrees = ((minutes / 60)*360) + 90;
    minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
    console.log(minutes);
    
    const hourHandDegrees = ((minutes / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;

  }

setInterval(setDate, 1000);
