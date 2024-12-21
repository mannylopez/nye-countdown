var countDownDate = new Date("Dec 21, 2024 01:15:30").getTime();
// var countDownDate = new Date("Jan 01, 2025 00:00:00").getTime();

function countdown() {
  const parentDiv = document.querySelector('.parent');

  const daysElement = document.getElementById('daysValue')
  const hoursElement = document.getElementById('hoursValue')
  const minutesElement = document.getElementById('minutesValue')
  const secondsElement = document.getElementById('secondsValue')

  const daysLabelElement = document.getElementById('daysLabel')
  const hoursLabelElement = document.getElementById('hoursLabel')
  const minutesLabelElement = document.getElementById('minutesLabel')
  const secondsLabelElement = document.getElementById('secondsLabel')

  var now = new Date().getTime();;
  var distance = countDownDate - now;
  
  // TODO: Check `distance` to make sure we don't go into negative time
  if ( distance < 0) {
    daysElement.textContent = "negative time"
    clearTimeout(countdown);
    return;
  }
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days === 0) {
    daysElement.style.display = 'none';
    daysLabelElement.style.display = 'none';
    document.getElementById('daysColon').style.display = 'none';
    parentDiv.style.gridTemplateColumns = '1fr 0.25fr 1fr 0.25fr 1fr 0.25fr';
  } else {
    daysElement.textContent = `${padZero(days)}`
    daysLabelElement.textContent = `day${makePlural(days)}`
  }
  
  hoursElement.textContent = `${padZero(hours)}`
  minutesElement.textContent = `${padZero(minutes)}`
  secondsElement.textContent = `${padZero(seconds)}`
  
  hoursLabelElement.textContent = `hour${makePlural(hours)}`
  minutesLabelElement.textContent = `minute${makePlural(minutes)}`
  secondsLabelElement.textContent = `second${makePlural(seconds)}`

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    daysElement.style.display = 'none';
    hoursElement.style.display = 'none';
    minutesElement.style.display = 'none';
    secondsElement.style.display = 'none';
    // secondsElement.textContent = "Happy new years"
    daysLabelElement.style.display = 'none';
    hoursLabelElement.style.display = 'none';
    minutesLabelElement.style.display = 'none';
    secondsLabelElement.style.display = 'none';
    document.getElementById('daysColon').style.display = 'none';
    document.getElementById('hoursColon').style.display = 'none';
    document.getElementById('minutesColon').style.display = 'none';
    
    const nyeMessageElement = document.getElementById('nye-message');
    nyeMessageElement.textContent = "Happy New Year!";

    clearTimeout(countdown);
    return;
  }
  // const nyeMessageElement = document.getElementById('nye-message');
  // nyeMessageElement.textContent = "Happy New Year!";
  setTimeout(countdown, 1000); // Update every second
}

function padZero(i) {
  return i < 10 ? "0" + i : i;
}

function makePlural(i) {
  return i == 1 ? '' : 's';
}