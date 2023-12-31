var checkIfFromQueue = 0;
var unique_id = 0;

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
var t2 = gsap.timeline({ repeat: -1, yoyo: true });
var t3 = gsap.timeline({ repeat: -1, yoyo: true });

tl.to("#droppable", {
    duration: 3,
    y: "-20px",
    scale: 0.96,
    rotationX: 10,
    rotationY: 5,
    ease: "power1.inOut"
});

tl.to("#droppable", {
    duration: 3,
    y: "0px",
    scale: 1,
    rotationX: 0,
    rotationY: 0,
    ease: "power1.inOut"
});

t2.to(".droppableBorder", {
    duration: 3,
    y: "-20px",
    scale: 0.96,
    rotationX: 10,
    rotationY: 5,
    ease: "power1.inOut"
});

t2.to(".droppableBorder", {
    duration: 3,
    y: "0px",
    scale: 1,
    rotationX: 0,
    rotationY: 0,
    ease: "power1.inOut"
});

t3.to(".player", {
    duration: 4,
    y: "-20px",
    scale: 0.9,
    rotationX: 10,
    rotationY: 5,
    ease: "power1.inOut"
});

t3.to(".player", {
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
                      albumArtist = mutation.target.childNodes[3].childNodes[1].childNodes[1].textContent.split("Artist: ")[1].split("Add")[0].replace(/[\r\n\t]/g, '');
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

/////////////////////////
//END OF ANIMATION CODE//
/////////////////////////


function droppedMediaDragOver(event) {
    event.preventDefault();
    var dropZones = document.querySelectorAll('.droppedMedia');

    // Remove highlight from all drop zones
    dropZones.forEach(function (dropZone) {
        dropZone.classList.remove('highlight');
    });

    // Find the drop zone underneath the dragged element
    var elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);
    var dropZoneUnderneath = elementMouseIsOver.closest('.droppedMedia');

    // Highlight the drop zone if found
    if (dropZoneUnderneath) {
        dropZoneUnderneath.classList.add('highlight');
    }
}

function setDragImage(event, options = {}) {
    if (event.dataTransfer && event.dataTransfer.setDragImage) {
        var dragImageContainer = document.createElement("div");
        dragImageContainer.classList.add("drag-image-container");

        var dragImageElement = document.createElement("img");
        if (options.selectImg == 'UsandThem') {
            dragImageElement.src = './src/img/UsandThem.jpg';
        } else if (options.selectImg == 'Gen11') {
            dragImageElement.src = './src/img/11.jpg';
        }
        dragImageElement.classList.add("drag-image");

        // Add text to the drag image container
        var dragText = document.createTextNode(options.dragText || "");
        var dragTimeText = document.createTextNode(options.dragTimeText || "");
        dragImageContainer.appendChild(dragImageElement);
        dragImageContainer.appendChild(dragText);
        dragImageContainer.appendChild(dragTimeText);

        var clonedContainer = dragImageContainer.cloneNode(true);
        clonedContainer.style.top = 0;
        document.body.appendChild(clonedContainer);

        var boundingRect = clonedContainer.getBoundingClientRect();
        event.dataTransfer.setDragImage(clonedContainer, boundingRect.width / 2, boundingRect.height / 2);

        // Optionally remove the clone after drag start
        if (options.removeCloneAfterDrag) {
            setTimeout(function () {
                document.body.removeChild(clonedContainer);
            }, 0);
        }
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function dragStartMediaDropped(event) {

    // Store the dragged data
    console.log("IN dragStartMediaDropped.");
    var draggedText = event.target.querySelector('.media-info').textContent;
    var draggedImagePath = event.target.querySelector('.dragged-image').src;
    var elID = event.target.id;


    if (draggedText !== null) {
        event.dataTransfer.setData("draggedEl", draggedText);
        event.dataTransfer.setData("draggedElImagePath", draggedImagePath);
        event.dataTransfer.setData("elID", elID);
    }

    checkIfFromQueue = 1;

}

function handleDragEnd(event) {
    var dropZones = document.querySelectorAll('.droppedMedia');
    // Remove highlight from all drop zones
    dropZones.forEach(function (dropZone) {
        dropZone.classList.remove('highlight');
    });
}

function mediaItemDragStart(event) {

    console.log("in media-item drag start function");
    var draggedText = event.target.querySelector('.media-info').textContent;
    console.log(event.target.querySelector('.media-info'));
    var draggedImagePath = event.target.querySelector('.item-pic').src;

    console.log("draggedText: ", draggedText);
    console.log("draggedElImagePath: ", draggedImagePath);
    if (draggedText !== null) {
        event.dataTransfer.setData("draggedEl", draggedText);
        event.dataTransfer.setData("draggedElImagePath", draggedImagePath);
    }


}

function dragStartImgInQueue(event) {
    droppable.style.background = "pink";
}

function queueNotEmpty() {
    const droppableContainer = document.getElementById("droppable");
    const hasElementsWithClass = droppableContainer.querySelector(".droppedMedia");

    return hasElementsWithClass !== null;
}


function drop(event, artist, songs, img) {

    droppable.style.background = "#151515";
    var textData;
    var imgPath;

    if (artist != null && songs != null && img != null) {
        artist = artist.replace(/[\r\n]/g, "");
        songs = songs.replace(/[\r\n]/g, "");
    }

    var songContainer = document.createElement("div");
    songContainer.className = "media-grid-item";

    if (event == null) {
        textData = songs + " " + artist;
        imgPath = img;
    } else {
        event.preventDefault();
        textData = event.dataTransfer.getData("draggedEl");
        textData = textData.split("Artist");
        var temp = textData[1].split("+");
        textData.pop();
        textData.push(temp[0]);
        console.log(textData);
        textData = textData.join("<br>Artist");
        imgPath = event.dataTransfer.getData("draggedElImagePath");
    }
    // Create a container element to hold both text and image data
    var containerElement = document.createElement("div");
    containerElement.className = "dragged-item style-drag-item";
    containerElement.draggable = true;
    containerElement.id = unique_id;
    unique_id++;

    // Create an image element and set its source
    var imgElement = document.createElement("img");
    imgElement.src = imgPath;
    imgElement.className = "dragged-image";
    imgElement.draggable = false

    // Set the width and height
    imgElement.style.width = "50px";
    imgElement.style.height = "50px";

    songContainer.appendChild(imgElement);

    // Create a text element and set its content
    var textElement = document.createElement("div");
    textElement.innerHTML = textData;
    textElement.className = "media-info";
    songContainer.appendChild(textElement);


    containerElement.appendChild(songContainer);


    // Apply styles to the container element
    //containerElement.style.height = "70px";
    containerElement.style.backgroundColor = "#222222"; // Dark grey background

    // Make the image appear on the left side
    // imgElement.style.float = "left";

    // Add margin to the text element to create space on the right
    textElement.style.marginLeft = "10px"; // Adjust the margin as needed

    // Get the width of the drop container with id "droppable"
    var dropContainer = document.getElementById("droppable");
    var dropContainerWidth = dropContainer.offsetWidth;

    // Set the width of the container element
    // containerElement.style.width = "50px";

    // Append the container element to the document or another container


    // Check if the dragged element has a specific class
    if (textData === "") {  //added the 1 === 0 cause I don't want this path to be taken rn
        checkIfFromQueue = 0;
        //I'm gonna leave this for now so that I don't get too hung up o it but I'm stuggling to make it so that the elements that are
        //aleardy in the queue are deleted afterwards
    }
    else {


        // Clone the dragged element
        var clonedElement = containerElement.cloneNode(true);

        // Customize the appearance of the cloned element
        // clonedElement.style.width = "74%";
        clonedElement.style.position = "relative"; // Set position to relative
        clonedElement.style.cursor = "default";
        clonedElement.classList.add("droppedMedia"); // Add the CSS class
        clonedElement.ondragover = droppedMediaDragOver;
        clonedElement.ondragstart = dragStartMediaDropped;
        clonedElement.ondragend = handleDragEnd;


        // Create a delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Font Awesome trash can icon
        deleteButton.classList.add("action-button"); // Add the CSS class to the delete button
        // deleteButton.style.position = "absolute";
        // deleteButton.style.left = "0"; // Position on the left
        // deleteButton.style.display = "none"; // Initially hide the delete button
        deleteButton.style.visibility = "hidden";

        // Create more info button
        var infoButton = document.createElement("button");
        infoButton.textContent = "Info";
        infoButton.classList.add("action-button"); // Add the CSS class to the info button
        infoButton.addEventListener('click', function () {
            moreInfo_callFromQueue(this);
        });
        // infoButton.style.position = "absolute";
        // infoButton.style.right = "0"; // Position on the right
        // infoButton.style.display = "none"; // Initially hide the more info button
        infoButton.style.visibility = "hidden";

        // Attach the delete button to the cloned element
        clonedElement.insertBefore(deleteButton, clonedElement.firstChild);
        clonedElement.appendChild(infoButton);

        // Show the buttons when hovering over the cloned element
        clonedElement.addEventListener("mouseover", function () {
            // deleteButton.style.display = "inline-block";
            // infoButton.style.display = "inline-block";
            deleteButton.style.visibility = "visible";
            infoButton.style.visibility = "visible";
        });

        // Hide the buttons when the mouse leaves the cloned element
        clonedElement.addEventListener("mouseout", function () {
            // deleteButton.style.display = "none";
            // infoButton.style.display = "none";
            deleteButton.style.visibility = "hidden";
            infoButton.style.visibility = "hidden";
        });

        // Remove the cloned element when the delete button is clicked
        deleteButton.addEventListener("click", function () {
            clonedElement.parentNode.removeChild(clonedElement);
            if (!queueNotEmpty()) {
                // The drop container (droppable) is empty
                tl.resume();
                t2.resume();
                t3.resume();


                droppable.style.borderStyle = "dashed";
                droppable.style.borderColor = "#8b8b8b";
                var dropHereTextElement = document.getElementById('dropHereText');
                if (dropHereTextElement) {
                    dropHereTextElement.innerHTML = 'Drop Media Here!'; // This line clears the content
                }


                droppable.style.display = 'flex';
            }
        });


        if (!queueNotEmpty()) {
            // The drop container (droppable) is empty
            droppable.style.borderStyle = "solid";
            droppable.style.borderColor = "#222";

            document.getElementById("droppable").append(clonedElement);
            tl.pause();
            t2.pause();
            t3.pause();

            var dropHereTextElement = document.getElementById('dropHereText');
            if (dropHereTextElement) {
                dropHereTextElement.innerHTML = ''; // This line clears the content
            }

            droppable.style.display = 'block';
        }
        else if (event === null) {
            document.getElementById("droppable").append(clonedElement);
        }
        else {
            // The element is not empty
            console.log(event);
            //var next = document.elementFromPoint(event.clientX, event.clientY);
            var elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);
            var next;
            if (elementMouseIsOver.classList.contains("droppedMedia") || elementMouseIsOver.classList.contains("media-info") || elementMouseIsOver.classList.contains("dragged-image") || elementMouseIsOver.classList.contains("media-grid-item")) {
                next = elementMouseIsOver.closest('.droppedMedia');
            }
            else {
                next = elementMouseIsOver;
            }

            console.log("next: ", next);
            if (next.classList.contains("droppedMedia")) {
                console.log("next holds droppedMedia");
                // If it does, insert the cloned element before the next element
                next.parentNode.insertBefore(clonedElement, next);
            } else {
                // If not, append the cloned element to the droppable container
                document.getElementById("droppable").appendChild(clonedElement);
            }
        }

    }
    if (checkIfFromQueue) {
        var draggedEl_id = event.dataTransfer.getData("elID");
        console.log("ID: ", draggedEl_id)
        var draggedEl = document.getElementById(draggedEl_id);
        var queue = document.getElementById("droppable");
        queue.removeChild(draggedEl);
        checkIfFromQueue = 0;
    }


}

function addButtonHandler(element) {

    var draggedText = element.parentElement.textContent;
    var song = draggedText.split("Add")[0].split("Artist: ")[0]
    var artist = "<br> Artist: " + draggedText.split("Add")[0].split("Artist: ")[1]
    var img = element.parentElement.previousSibling.previousSibling.src;

    drop(null, artist, song, img);
}

function addButtonHandler_sod(element) {

    var draggedText = element.parentElement.textContent.split("\n\t\t\t\t\t\t\t\t\t\t\t");

    // console.log(draggedText);
    var song = draggedText[1]
    var artist = "<br> Artist: " + draggedText[2].split("by")[1]
    var img = element.parentElement.previousSibling.previousSibling.src;
    console.log(artist);
    console.log(song);
    console.log(img);


    drop(null, artist, song, img);
}

function dropHandler_sod(element){
  var draggedText = element.parentElement.textContent.split("\n\t\t\t\t\t\t\t\t\t\t\t");
  var song = draggedText[1];
  var artist = "<br> Artist: " + draggedText[2].split("by")[1];
  var img = element.src;
  console.log(img);
  drop(null, artist, song, img);
}
