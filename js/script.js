// const countDownDate = new Date("Dec 22, 2024 09:39:50 ").getTime();
const countDownDate = new Date("Jan 01, 2025 00:00:00").getTime();

const elements = {
  values: {},
  labels: {},
  colons: {}
}

document.addEventListener('DOMContentLoaded', function() {
  elements.values = {
    days: document.getElementById(`daysValue`),
    hours: document.getElementById(`hoursValue`),
    minutes: document.getElementById(`minutesValue`),
    seconds: document.getElementById(`secondsValue`)
  };

  elements.labels = {
    days: document.getElementById(`daysLabel`),
    hours: document.getElementById(`hoursLabel`),
    minutes: document.getElementById(`minutesLabel`),
    seconds: document.getElementById(`secondsLabel`)
  };

  elements.colons = {
    days: document.getElementById(`daysColon`),
    hours: document.getElementById(`hoursColon`),
    minutes: document.getElementById(`minutesColon`)
  };

  incrementCount();
  setInterval(incrementCount, 1000); // Update every second
});

function incrementCount() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if ( distance < 0) {
    // New Year's Day passed, so count up from New Year's Day
    const timeComponents = calculateTimeComponents(now - countDownDate);
    updateScreenElements(timeComponents);
  } else {
    // New Year's Day has not passed yet, so count down to New Year's Day
    const timeComponents = calculateTimeComponents(distance);
    updateScreenElements(timeComponents);
    checkForNewYears(timeComponents);
  }
}

function updateScreenElements({ days, hours, minutes, seconds }) {
  const parentDiv = document.querySelector('.parent');

  if (days === 0) {
    hideElement(elements.values.days);
    hideElement(elements.labels.days);
    hideElement(elements.colons.days);
    parentDiv.style.gridTemplateColumns = '1fr 0.25fr 1fr 0.25fr 1fr 0.25fr';
  } else {
    elements.values.days.textContent = padZero(days);
    elements.labels.days.textContent = `day${makePlural(days)}`;
  }
  
  elements.values.hours.textContent = padZero(hours);
  elements.values.minutes.textContent = padZero(minutes);
  elements.values.seconds.textContent = padZero(seconds);
  
  elements.labels.hours.textContent = `hour${makePlural(hours)}`;
  elements.labels.minutes.textContent = `minute${makePlural(minutes)}`;
  elements.labels.seconds.textContent = `second${makePlural(seconds)}`;
}

function checkForNewYears({ days, hours, minutes, seconds }) {
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    hideElements();
    displayNYEMessage();
    clearTimeout(incrementCount);
    return;
  }
}

function hideElements() {
  hideElement(elements.values.days);
  hideElement(elements.values.hours);
  hideElement(elements.values.minutes);
  hideElement(elements.values.seconds);
  hideElement(elements.labels.days);
  hideElement(elements.labels.hours);
  hideElement(elements.labels.minutes);
  hideElement(elements.labels.seconds);
  hideElement(elements.colons.days);
  hideElement(elements.colons.hours);
  hideElement(elements.colons.minutes);
}

function displayNYEMessage() {
  const nyeMessageElement = document.getElementById('nye-message');
  nyeMessageElement.textContent = "Happy New Year!";
}

function calculateTimeComponents(distance) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
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