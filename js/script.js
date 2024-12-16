function showCurrentTime() {
  const localTimeElement = document.getElementById('current-time');
  const now = new Date();
  localTimeElement.textContent = now.toLocaleTimeString();
  setTimeout(showCurrentTime, 1000); // Update every second
}

var countDownDate = new Date("Dec 15, 2024 22:59:00").getTime();
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
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days === 0) {
    document.getElementById('daysValue').style.display = 'none';
    document.getElementById('daysLabel').style.display = 'none';
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

  setTimeout(countdown, 1000);
}

function padZero(i) {
  return i < 10 ? "0" + i : i;
}

function makePlural(i) {
  return i == 1 ? '' : 's';
}