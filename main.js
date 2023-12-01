import { fetchUserData, fetchCurrentTime } from './api.js';
import { mapToPersonObjects } from './utils.js';

const outputElement = document.querySelector('.container');
const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
outputElement.appendChild(cardDiv);

const img = document.createElement('img');
const nameSpan = document.createElement('span');
const emailSpan = document.createElement('span');
const phoneSpan = document.createElement('span');
const locationSpan = document.createElement('span');
const timeSpan = document.createElement('span');
const button = document.createElement('button');

img.src = "user_nt_found.jpg";
nameSpan.textContent = "Name: name surname";
emailSpan.textContent = "Mail: mail";
phoneSpan.textContent = "Phone: phone";
locationSpan.textContent = "Location: city ";
timeSpan.textContent = "Current Time: time";
button.textContent = 'GENERATE USER';
button.addEventListener('click', generateRandomUser);

cardDiv.appendChild(img);
cardDiv.appendChild(nameSpan);
cardDiv.appendChild(emailSpan);
cardDiv.appendChild(phoneSpan);
cardDiv.appendChild(locationSpan);
cardDiv.appendChild(timeSpan);
outputElement.appendChild(button);

async function generateRandomUser() {
  try {
    const personData = await fetchUserData();
    const personObject = await mapToPersonObjects(personData);

    const currentTimeData = await fetchCurrentTime(personObject.location.city);

    img.src = `${personObject.picture.large}`;
    nameSpan.textContent = `Name: ${personObject.name.first}`;
    emailSpan.textContent = `Mail: ${personObject.email}`;
    phoneSpan.textContent = `Phone: ${personObject.phone}`;
    locationSpan.textContent = `Location: ${personObject.location.city}`;
    timeSpan.textContent = `Current Time: ${currentTimeData.hour}:${currentTimeData.minute}:${currentTimeData.second}`;
  } catch (error) {
    console.error('Error generating random user:', error);
  }
}