document.addEventListener("mousemove", function (event) {
  var mouseY = event.clientY;
  var scaleFactor = 0.02;

  var leftShapes = document.querySelector(".leftShapes");
  var rightShapes = document.querySelector(".rightShapes");

  leftShapes.style.transform = "translateY(" + mouseY * scaleFactor + "px)";
  rightShapes.style.transform = "translateY(" + mouseY * scaleFactor + "px)";
});
