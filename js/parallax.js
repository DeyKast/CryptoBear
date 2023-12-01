document.addEventListener("mousemove", function (event) {
  var mouseY = event.clientY;
  var scaleFactor = 0.02; // Змініть цей коефіцієнт, щоб контролювати інтенсивність ефекту

  // Знаходимо елементи .leftShapes та .rightShapes
  var leftShapes = document.querySelector(".leftShapes");
  var rightShapes = document.querySelector(".rightShapes");

  // Встановлюємо translate з урахуванням коефіцієнта масштабування
  leftShapes.style.transform = "translateY(" + mouseY * scaleFactor + "px)";
  rightShapes.style.transform = "translateY(" + mouseY * scaleFactor + "px)";
});
