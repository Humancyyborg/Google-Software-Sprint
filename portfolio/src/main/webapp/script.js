// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
// function addRandomGreeting() {
//   const greetings =
//       [" Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become"];

//   // Pick a random greeting.
//   const greeting = greetings[Math.floor(Math.random() * greetings.length)];

//   // Add it to the page.
//   const greetingContainer = document.getElementById('greeting-container');
//   greetingContainer.innerText = greeting;
// }

/** fetches harded coded string and display them in the broswer page onload*/
async function displayGreetins(){
const responseFromserver=await fetch("/hello");
const textFromResponse=await responseFromserver.text();

const  greetingContainer=documnet.getElementById('greetingCon');
greetingContainer.innerText=textFromResponse;
}



// /** Creates a map that shows landmarks around Google. */
// function createMap() {
//  const map = new google.maps.Map(
//      document.getElementById('map'),
//      {center: {lat: 37.422403, lng: -122.088073}, zoom: 15});
//   console.log(map);
//  addLandmark(
//      map, 37.423829, -122.092154, 'Google West Campus',
//      'Google West Campus is home to YouTube and Maps.')
//  addLandmark(
//      map, 37.421903, -122.084674, 'Stan the T-Rex',
//      'This is Stan, the T-Rex statue.')
//  addLandmark(
//      map, 37.420919, -122.086619, 'Permanente Creek Trail',
//      'Permanente Creek Trail connects Google to a system of bike trails.');
//       console.log(map);
// }
 
// /** Adds a marker that shows an info window when clicked. */
// function addLandmark(map, lat, lng, title, description) {
//  const marker = new google.maps.Marker(
//      {position: {lat: lat, lng: lng}, map: map, title: title});
 
//  const infoWindow = new google.maps.InfoWindow({content: description});
//  marker.addListener('click', () => {
//    infoWindow.open(map, marker);
//  });
// }


//  console.log(map);

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}