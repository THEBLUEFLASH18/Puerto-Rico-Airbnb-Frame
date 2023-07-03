const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 0);
});


var insideImages = [
  'images/Indoor/Image4.jpeg',
  'images/Indoor/Image5.jpeg'
];

var outsideImages = [
  'path/to/outside/image1.jpg',
  'path/to/outside/image2.jpg',
];

var currentInsideImageIndex = 0;
var currentOutsideImageIndex = 0;

function rotateImages() {
  var insideImageElement = document.querySelector('.Inside-content .thum img');
  var outsideImageElement = document.querySelector('.Outside-content .thum img');

  insideImageElement.src = insideImages[currentInsideImageIndex];
  outsideImageElement.src = outsideImages[currentOutsideImageIndex];

  currentInsideImageIndex = (currentInsideImageIndex + 1) % insideImages.length;
  currentOutsideImageIndex = (currentOutsideImageIndex + 1) % outsideImages.length;
}

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var insideContentElement = document.querySelector('.Inside-content');
var outsideContentElement = document.querySelector('.Outside-content');
var intervalId;

window.addEventListener('scroll', function () {
  if (isInViewport(insideContentElement) && isInViewport(outsideContentElement)) {
    if (!intervalId) {
      intervalId = setInterval(rotateImages, 1500);
    }
  } else {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
});


