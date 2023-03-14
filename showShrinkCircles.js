window.onload=function(){
  // create a key value pair of colors
  const colors={
    'orange':'#e86d16',
    'green':'#0f8f0f',
    'red':'#f90808'
  };
  // select a default background color
  var bg_color = colors['orange'];
  // console.log(bg_color);
  // create a function that will draw a circle
  function create(event){
    // console.log('mouse click');
    let el=document.createElement('p');
    let size=Math.floor(Math.random()*(200-10+1))+10;
    // add styles to el
    el.style.position='absolute';
    el.style.left = event.clientX+'px';
    el.style.top = event.clientY+'px';

    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.backgroundColor=bg_color;
    el.style.borderRadius=Math.floor(size / 2) + 'px'

    // class name for the element that will be created
    el.className='round';

    // add el to the body after last child
    document.body.appendChild(el);
  }
  // create an event listener for click to call the function create
  document.addEventListener('click',create);
  // just reload the page
  document.getElementById('reset').addEventListener('click',function(){
    window.location.reload();
  });
  // process the selected/clicked color and assign it as background color
  var button = document.getElementsByClassName('btn');
  for (let i = 0; i < 3; i++){
    button[i].onclick=function(e){
      e.stopPropagation();
      highlight(colors[this.innerText]);
    }
  }
  // create a function that will render the selected color as background and as highlight colors
  function highlight(color){
    bg_color = color;
    nodes = document.getElementsByClassName('round');
    for(let i = 0; i < nodes.length; i++){
      if (nodes[i].style.backgroundColor == bg_color) {
        nodes[i].style.boxShadow = '10px 20px 30px black';
      }
    }
  }
  // create a function that will shrink the shapes and remove from DOM
  shrink = function(){
    nodes=document.getElementsByClassName('round');
    for(let i = 0; i < nodes.length; i++){
      let height = nodes[i].style.height.replace('px', '');//removes px from height value
      let width = nodes[i].style.width.replace('px', '');

      if(height <= 0){
        nodes[i].remove();
      }else{
        nodes[i].style.height = Math.floor(height - 2 / 2) + 'px';
        nodes[i].style.width = Math.floor(height - 2 / 2) + 'px';
      }
    }
  }

  // calls the shrink function every after 75ms using setInterval
  setInterval(shrink, 200);
}