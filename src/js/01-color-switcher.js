function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  
  const button = document.querySelector('[data-start]');
  //const span = document.querySelector(".color");
  
  button.addEventListener("click", () => {
    //span.textContent = getRandomHexColor();
    document.body.setAttribute(
      'style',
      'background:' //+ span.textContent
    );});
