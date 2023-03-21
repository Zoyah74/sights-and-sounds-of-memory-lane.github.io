// var slider = document.getElementById("myRange");

// if(slider < 8){
//     document.getElementsByClassName("container").style.columns= "3";
// }

const slider = document.querySelector('#myRange');

slider.addEventListener('input', () => {
    // Update the grid's CSS
  });

  const container = document.querySelector('.container');
  const value = slider.value;
  const columns = Math.max(1, Math.min(10, value)); // clamp the value between 1 and 5
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    
  slider.addEventListener('input', () => {
    const container = document.querySelector('.container');
    const value = slider.value;
    const columns = Math.max(1, Math.min(10, value));
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  });
  
  // Set the initial value of the grid's CSS
  slider.dispatchEvent(new Event('input'));

  