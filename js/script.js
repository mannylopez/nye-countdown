const countDownDate = new Date("Dec 22, 2024 08:52:00 ").getTime();
// const countDownDate = new Date("Jan 01, 2025 00:00:00").getTime();

document.addEventListener('DOMContentLoaded', function() {
  countdown();
  setInterval(countdown, 1000); // Update every second
});

function countdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if ( distance < 0) {
    const timeComponents = calculateTimeComponents(now - countDownDate);
    updatePastDisplay(timeComponents);
  } else {
    const timeComponents = calculateTimeComponents(distance);
    updateDisplay(timeComponents);
  }
}

function displayNegativeTime() {
  const daysElement = document.getElementById('daysValue');
  daysElement.textContent = "negative time";
  clearTimeout(countdown);
}

function updatePastDisplay({ days, hours, minutes, seconds }) { 

  const parentDiv = document.querySelector('.parent');

  const daysElement = document.getElementById('daysValue');
  const hoursElement = document.getElementById('hoursValue');
  const minutesElement = document.getElementById('minutesValue');
  const secondsElement = document.getElementById('secondsValue');

  const daysLabelElement = document.getElementById('daysLabel');
  const hoursLabelElement = document.getElementById('hoursLabel');
  const minutesLabelElement = document.getElementById('minutesLabel');
  const secondsLabelElement = document.getElementById('secondsLabel');

  if (days === 0) {
    hideElement(daysElement);
    hideElement(daysLabelElement);
    hideElement(document.getElementById('daysColon'));
    parentDiv.style.gridTemplateColumns = '1fr 0.25fr 1fr 0.25fr 1fr 0.25fr';
  } else {
    daysElement.textContent = padZero(days);
    daysLabelElement.textContent = `day${makePlural(days)}`;
  }

  hoursElement.textContent = padZero(hours);
  minutesElement.textContent = padZero(minutes);
  secondsElement.textContent = padZero(seconds);
  
  hoursLabelElement.textContent = `hour${makePlural(hours)}`;
  minutesLabelElement.textContent = `minute${makePlural(minutes)}`;
  secondsLabelElement.textContent = `second${makePlural(seconds)}`;
}

function updateDisplay({ days, hours, minutes, seconds }) {
  const parentDiv = document.querySelector('.parent');

  const daysElement = document.getElementById('daysValue');
  const hoursElement = document.getElementById('hoursValue');
  const minutesElement = document.getElementById('minutesValue');
  const secondsElement = document.getElementById('secondsValue');

  const daysLabelElement = document.getElementById('daysLabel');
  const hoursLabelElement = document.getElementById('hoursLabel');
  const minutesLabelElement = document.getElementById('minutesLabel');
  const secondsLabelElement = document.getElementById('secondsLabel');

  if (days === 0) {
    hideElement(daysElement);
    hideElement(daysLabelElement);
    hideElement(document.getElementById('daysColon'));
    parentDiv.style.gridTemplateColumns = '1fr 0.25fr 1fr 0.25fr 1fr 0.25fr';
  } else {
    daysElement.textContent = padZero(days);
    daysLabelElement.textContent = `day${makePlural(days)}`;
  }
  
  hoursElement.textContent = padZero(hours);
  minutesElement.textContent = padZero(minutes);
  secondsElement.textContent = padZero(seconds);
  
  hoursLabelElement.textContent = `hour${makePlural(hours)}`;
  minutesLabelElement.textContent = `minute${makePlural(minutes)}`;
  secondsLabelElement.textContent = `second${makePlural(seconds)}`;

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    hideElement(daysElement);
    hideElement(hoursElement);
    hideElement(minutesElement);
    hideElement(secondsElement);
    hideElement(daysLabelElement);
    hideElement(hoursLabelElement);
    hideElement(minutesLabelElement);
    hideElement(secondsLabelElement);
    hideElement(document.getElementById('daysColon'));
    hideElement(document.getElementById('hoursColon'));
    hideElement(document.getElementById('minutesColon'));
    
    displayNYEMessage();

    clearTimeout(countdown);
    return;
  }
}

function calculateTimeComponents(distance) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function displayNYEMessage() {
  const nyeMessageElement = document.getElementById('nye-message');
  nyeMessageElement.textContent = "Happy New Year!";
}

function padZero(i) {
  return i < 10 ? `0${i}` : i;
}

function makePlural(i) {
  return i == 1 ? '' : 's';
}

function hideElement(element) {
  element.style.display = 'none';
}