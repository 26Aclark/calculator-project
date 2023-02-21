let counter = 0;
document.getElementById('neon-button').onclick = () => {
    counter = counter + 1;
    document.getElementById('neon-counter').innerText = counter;
  };
  document.getElementById('neon-button1').onclick = () => {
    counter = counter + 10;
    document.getElementById('neon-counter').innerText = counter;
  };
  document.getElementById('neon-button2').onclick = () => {
    counter = counter + 100;
    document.getElementById('neon-counter').innerText = counter;
  };
  document.getElementById('neon-button3').onclick = () => {
    counter = counter - counter;
    document.getElementById('neon-counter').innerText = counter;
  };
