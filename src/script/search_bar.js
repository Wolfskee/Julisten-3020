function onSearch(){
    var searchResults = document.getElementById('search-button-input').value;
    var callDisplay = true;
    if (searchResults === "Bohemian Rhapsody"){
        img1 = 'src/img/search-bar-icons/Queen_A_Night_At_The_Opera.png';
        img2 = 'src/img/search-bar-icons/Queen_Jazz.png';
        img3 = 'src/img/search-bar-icons/Queen_The_Game.png';
        img1Name = "Bohemian Rhapsody";
        img2Name = "Don't Stop Me Know";
        img3Name = "Another one bites the dust";
        by = "Queen";
    }else if (searchResults === "Energy106"){
        img1 = 'src/img/search-bar-icons/Energy106.jpg';
        img2 = 'src/img/search-bar-icons/Virgin103.png';
        img3 = 'src/img/search-bar-icons/CJPB.png';
        img1Name = "Energy 106 live radio";
        img2Name = "Virgin 103.1 live radio";
        img3Name = "CJOB 680 live radio";
        by = "live radio";
    }else if (searchResults === "Ted Talk"){
        img1 = 'src/img/search-bar-icons/Ted_Talk_img1.jpg';
        img2 = 'src/img/search-bar-icons/Ted_Talk_img2.jpg';
        img3 = 'src/img/search-bar-icons/Ted_Talk_img3.jpg';
        img1Name = "How gratitude rewires your brain | Robin Kramer";
        img2Name = "Are you really good at something as you think? | Christina Costa";
        img3Name = "Why you shouldn't trust boredom? | Kevin H. Gary";
        by = "Ted Talk Daily";
    }else{
        insideMain.innerHTML = `
    <div
        <h1>"${searchResults}" search results: Not Yet implimented.</h1> 
            Try one of the following:
            "Bohemian Rhapsody"
            "Ted Talk"
            "Energy106"
        </div>
    </div>
    
    `;
    callDisplay = false;
    }

        
    if (callDisplay === true){
        display(searchResults);
    }

}


function display(searchResults){
        insideMain.innerHTML = `
        <h3 class="search-header"> ${searchResults} search results:</h3> 
        <div class="media-grid-item" draggable="true" ondragstart="mediaItemDragStart(event)" ondragend="handleDragEnd(event)">
            <img src=${img1} class="mr-3 item-pic" draggable="false" alt="Lullaby">
            <div class="media-body">
                <div class="media-info">
                        <span style="font-size:1.05rem">${img1Name}</span><br>
                        <span style="font-size:0.9rem">Artist: ${by}</span><br>
                    </div>
                <button class="add-to-queue-btn" onclick="addButtonHandler(this)" draggable="false">
                    <icon>
                        <img src="src/img/plus-icon.svg" alt="Add song to Queue" style="width: 25px; height: 25px; transform: translate(-6.1px, -3px);">
                    </icon>
                    <span class="tooltip-text">Add song to Queue</span>
                </button>
                <!-- <a href=" javascript:void(0);" onclick="moreInfo(this)" style="color: white" draggable=false>
                    <u>More Info</u></a> -->
                <button class="add-to-queue-btn" onclick="moreInfo(this)" draggable="false">
                    <icon>
                        <img src="src/img/info-icon.svg" alt="More info" style="width: 26px; height: 26px; transform: translate(-6.7px, -3px);">
                    </icon>
                    <span class="tooltip-text"><span>More info</span></span>
                </button>
            </div>
        </div>
        <h3 class="search-header-other">Other media you may enjoy based on search result:</h3> 
        <div class="media-grid">
        <div class="media-grid-item" draggable="true" ondragstart="mediaItemDragStart(event)" ondragend="handleDragEnd(event)">
        <img src=${img2} class="mr-3 item-pic" draggable="false" alt="Lullaby">
        <div class="media-body">
            <div class="media-info">
                    <span style="font-size:1.05rem">${img2Name}</span><br>
                    <span style="font-size:0.9rem">Artist: ${by}</span><br>
                </div>
            <button class="add-to-queue-btn" onclick="addButtonHandler(this)" draggable="false">
                <icon>
                    <img src="src/img/plus-icon.svg" alt="Add song to Queue" style="width: 25px; height: 25px; transform: translate(-6.1px, -3px);">
                </icon>
                <span class="tooltip-text">Add song to Queue</span>
            </button>
            <!-- <a href=" javascript:void(0);" onclick="moreInfo(this)" style="color: white" draggable=false>
                <u>More Info</u></a> -->
            <button class="add-to-queue-btn" onclick="moreInfo(this)" draggable="false">
                <icon>
                    <img src="src/img/info-icon.svg" alt="More info" style="width: 26px; height: 26px; transform: translate(-6.7px, -3px);">
                </icon>
                <span class="tooltip-text"><span>More info</span></span>
            </button>
        </div>
    </div>

    <div class="media-grid-item" draggable="true" ondragstart="mediaItemDragStart(event)" ondragend="handleDragEnd(event)">
    <img src=${img3} class="mr-3 item-pic" draggable="false" alt="Lullaby">
    <div class="media-body">
        <div class="media-info">
                <span style="font-size:1.05rem">${img3Name}</span><br>
                <span style="font-size:0.9rem">Artist: ${by}</span><br>
            </div>
        <button class="add-to-queue-btn" onclick="addButtonHandler(this)" draggable="false">
            <icon>
                <img src="src/img/plus-icon.svg" alt="Add song to Queue" style="width: 25px; height: 25px; transform: translate(-6.1px, -3px);">
            </icon>
            <span class="tooltip-text">Add song to Queue</span>
        </button>
        <!-- <a href=" javascript:void(0);" onclick="moreInfo(this)" style="color: white" draggable=false>
            <u>More Info</u></a> -->
        <button class="add-to-queue-btn" onclick="moreInfo(this)" draggable="false">
            <icon>
                <img src="src/img/info-icon.svg" alt="More info" style="width: 26px; height: 26px; transform: translate(-6.7px, -3px);">
            </icon>
            <span class="tooltip-text"><span>More info</span></span>
        </button>
    </div>
</div>
        `;
 }

var img1 = null;
var img1Name = null;
var img2 = null;
var img2Name = null;
var img3 = null;
var img3Name = null;
var by = null;
const insideMain = document.getElementById('main-container');
const search_button = document.getElementById('search-button');
search_button.addEventListener('click', onSearch);