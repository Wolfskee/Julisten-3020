gsap.from("#logo", {
    duration: 0.75,
    scale: 0.5,
    ease: "bounce.out",
    opacity: 0,
    y: -100
});

gsap.from("header", {
    duration: 1.5,
    scale: 0.9,
    opacity: 0,
    ease: "expo.out",
    y: 20,
    rotationX: 10,
    transformOrigin: "center bottom"
});


var tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to("#droppable", {
    duration: 4,
    y: "-20px",
    scale: 0.9,
    rotationX: 10,
    rotationY: 5,
    ease: "power1.inOut"
});

tl.to("#droppable", {
    duration: 4,
    y: "0px",
    scale: 1,
    rotationX: 0,
    rotationY: 0,
    ease: "power1.inOut"
});


const links = document.querySelector('nav').children;
function handleLinkClick(event) {

  console.log(links);

  event.preventDefault();

  `links.forEach(link => {
    link.classList.remove('enlarged');
  });`
  for (var i = 0; i < links.length; i++) {
    var child = links[i];
    child.classList.remove('enlarged');
  }

  event.currentTarget.classList.add('enlarged');
}


for (var i = 0; i < links.length; i++) {
  var child = links[i];
  child.addEventListener('click', handleLinkClick);
}

document.addEventListener('DOMContentLoaded', function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.id === 'droppable') {
                var playerElement = document.querySelector('.player');
                console.log(playerElement);
                if (playerElement) {
                    var albumCover;
                    var albumSongName;
                    var albumArtist;
                    var playerAlbum;
                    var playerSongAlbumCover;
                    var playerSongName;
                    var playerArtist;

                    console.log(mutation.target.childNodes[3]);
                    if(mutation.target.childNodes[3]){
                      albumCover = mutation.target.childNodes[3].childNodes[1].querySelector('img').src;

                      albumSongName = mutation.target.childNodes[3].childNodes[1].childNodes[1].textContent.split("Artist: ")[0];
                      albumArtist = mutation.target.childNodes[3].childNodes[1].childNodes[1].textContent.split("Artist: ")[1].split("Add")[0];
                      playerAlbum = playerElement.childNodes[1].childNodes[1].childNodes[0];
                      //console.log(mutation.target.childNodes[3].childNodes[1].childNodes[1].textContent.split("Artist: ")[1].split("Add")[0]);
                      playerSongAlbumCover = playerElement.childNodes[1].childNodes[1].childNodes[1].querySelector('img');
                      playerSongName = playerElement.childNodes[1].childNodes[1].childNodes[3];
                      playerArtist = playerElement.childNodes[1].childNodes[1].childNodes[5];
                      console.log(playerElement.childNodes[1].childNodes[1].childNodes[5]);
                    }

                    if (mutation.target.children.length > 1 && mutation.target.children.id !== "dropHereText") {
                        playerElement.style.display = 'block'; // 或者是您希望的显示方式
                        playerSongAlbumCover.src = albumCover;
                        playerSongName.innerHTML = albumSongName;
                        playerArtist.innerHTML = albumArtist;
                    } else if (mutation.target.children.id !== "dropHereText"){
                        playerElement.style.display = 'none';
                    }
                }
            }
        });
    });

    // 配置 observer
    var config = { childList: true, subtree: true };
    // 为 droppable 元素启动 observer
    var droppableElement = document.getElementById('droppable');
    observer.observe(droppableElement, config);
});
