function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  /**Selectors */
  const buttonStart = document.querySelector('[data-start]');
  const buttonStop = document.querySelector('[data-stop]');
  const body = document.querySelector('body');

  let timerId = null;
  /**Listener */
  buttonStart.addEventListener('click', onclickButtonStart);
  buttonStop.addEventListener('click', onclickButtonStop);

  /**Function start/stop change color */
  function onclickButtonStart() {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    timerId = setInterval(() => {
      body.style.background = getRandomHexColor();
    }, 1000);
  }

  function onclickButtonStop() {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timerId);
  }