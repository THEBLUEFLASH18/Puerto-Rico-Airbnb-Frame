const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let imagesIndoor = [
  'images/Indoor/Image4.jpeg',
  'images/Indoor/Image5.jpeg',
  // add more image paths
];

let imagesOutdoor = [
  'images/Outdoor/Image15.jpeg',
  'images/Outdoor/Image20.jpeg',
  // add more image paths
];

let currentIndexIndoor = 0;
let currentIndexOutdoor = 0;

function changeImageIndoor() {
  let imgElement = document.querySelector('.box:nth-child(1) .thum img');
  imgElement.src = imagesIndoor[currentIndexIndoor];
  currentIndexIndoor = (currentIndexIndoor + 1) % imagesIndoor.length;
}

function changeImageOutdoor() {
  let imgElement = document.querySelector('.box:nth-child(2) .thum img');
  imgElement.src = imagesOutdoor[currentIndexOutdoor];
  currentIndexOutdoor = (currentIndexOutdoor + 1) % imagesOutdoor.length;
}

setInterval(changeImageIndoor, 3000); // change every 3 seconds
setInterval(changeImageOutdoor, 3000); // change every 3 seconds



function randomPosition(element) {
  var x = window.innerWidth;
  var y = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  element.style.left = randomX + 'px';
  element.style.top = randomY + 'px';
}

window.onload = function() {
  var cloud1 = document.getElementById('cloud-icon1');
  var cloud2 = document.getElementById('cloud-icon2');
  setInterval(function(){ randomPosition(cloud1); }, 5000); // Change position every 5 seconds
  setInterval(function(){ randomPosition(cloud2); }, 5000); // Change position every 5 seconds
}
