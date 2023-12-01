function blender(){
  var queue = document.getElementById("dragAndDropBoder");
  const display = window.getComputedStyle(queue).getPropertyValue("display");
  console.log(queue.style.display);
  if(display == 'none'){
    queue.className = "droppableBorder";
    queue.style.display = 'block';
  }else if(queue.style.display === 'block')
    queue.style.display = 'none';
}
