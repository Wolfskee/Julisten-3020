var checkIfFromQueue = 0;

function droppedMediaDragOver(event) {
    event.preventDefault();
    var dropZones = document.querySelectorAll('.droppedMedia');

    // Remove highlight from all drop zones
    dropZones.forEach(function(dropZone) {
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
    droppable.style.background = "green";
    event.dataTransfer.setData("draggedEl", event.target.id);  
    checkIfFromQueue = 1;          

}

function queueNotEmpty() {
    const droppableContainer = document.getElementById("droppable");
    const hasElementsWithClass = droppableContainer.querySelector(".droppedMedia");

    return hasElementsWithClass !== null;
}


function drop(event) {
    //droppable.style.background = "red";

    var dropZones = document.querySelectorAll('.droppedMedia');

    // Remove highlight from all drop zones
    dropZones.forEach(function(dropZone) {
        dropZone.classList.remove('highlight');
    });


    event.preventDefault();
    var data = event.dataTransfer.getData("draggedEl");
    var draggedElement = document.getElementById(data);
    const tag = draggedElement.getAttribute("data-tag");
    console.log("datatag:", tag);


    // Check if the dragged element has a specific class
    if (checkIfFromQueue === 1 && 1 === 0){  //added the 1 === 0 cause I don't want this path to be taken rn
        droppable.style.background = "blue";
        checkIfFromQueue = 0;
        //I'm gonna leave this for now so that I don't get too hung up o it but I'm stuggling to make it so that the elements that are
        //aleardy in the queue are deleted afterwards
    }
    else{

        
        // Clone the dragged element
        var clonedElement = draggedElement.cloneNode(true);

        // Customize the appearance of the cloned element
        clonedElement.style.width = "74%";
        clonedElement.style.position = "relative"; // Set position to relative
        clonedElement.style.cursor = "default";
        clonedElement.classList.add("droppedMedia"); // Add the CSS class
        clonedElement.ondragover = droppedMediaDragOver;
        clonedElement.ondragstart = dragStartMediaDropped;




        // Create a delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Font Awesome trash can icon
        deleteButton.classList.add("action-button"); // Add the CSS class to the delete button
        deleteButton.style.position = "absolute";
        deleteButton.style.left = "0"; // Position on the left
        deleteButton.style.display = "none"; // Initially hide the delete button

        // Create more info button
        var infoButton = document.createElement("button");
        infoButton.textContent = "Info";
        infoButton.classList.add("action-button"); // Add the CSS class to the info button
        infoButton.style.position = "absolute";
        infoButton.style.right = "0"; // Position on the right
        infoButton.style.display = "none"; // Initially hide the more info button

        // Attach the delete button to the cloned element
        clonedElement.appendChild(deleteButton);
        clonedElement.appendChild(infoButton);

        // Show the buttons when hovering over the cloned element
        clonedElement.addEventListener("mouseover", function () {
            deleteButton.style.display = "inline-block";
            infoButton.style.display = "inline-block";
        });

        // Hide the buttons when the mouse leaves the cloned element
        clonedElement.addEventListener("mouseout", function () {
            deleteButton.style.display = "none";
            infoButton.style.display = "none";
        });

        // Remove the cloned element when the delete button is clicked
        deleteButton.addEventListener("click", function () {
            clonedElement.parentNode.removeChild(clonedElement);
            if (!queueNotEmpty()) {
                // The drop container (droppable) is empty
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
            if (clonedElement.classList.contains("droppedMedia")){
        }
            document.getElementById("droppable").append(clonedElement);
            

            var dropHereTextElement = document.getElementById('dropHereText');
            if (dropHereTextElement) {
                dropHereTextElement.innerHTML = ''; // This line clears the content
            }

            droppable.style.display = 'block';
        } else {
            // The element is not empty

            var next = document.elementFromPoint(event.clientX, event.clientY);
            // Check if the next element has the class "droppedMedia"
            if (next.classList.contains("droppedMedia")) {
                // If it does, insert the cloned element before the next element
                next.parentNode.insertBefore(clonedElement, next);
            } else {
                // If not, append the cloned element to the droppable container
                document.getElementById("droppable").appendChild(clonedElement);
            }
        }

    }

    
}


// Example usage:
var UsandThemDraggable = document.getElementById("UsandThemID");
var Gen11Draggable = document.getElementById("Gen11ID");

UsandThemDraggable.addEventListener("dragstart", function (event) {
    setDragImage(event, {
        selectImg: 'UsandThem',
        dragText: ' UsandThem',
        setDragImage: true,
        removeCloneAfterDrag: true
    });
    event.dataTransfer.setData("draggedEl", event.target.id);
});

Gen11Draggable.addEventListener("dragstart", function (event) {
    setDragImage(event, {
        selectImg: 'Gen11',
        dragText: ' Gen11',
        setDragImage: true,
        removeCloneAfterDrag: true
    });
    event.dataTransfer.setData("draggedEl", event.target.id);
});