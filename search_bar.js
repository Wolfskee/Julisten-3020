function onSearch(){
    var searchResults = document.getElementById('search-button-input').value;
    callDisplay = false;
    img1Length = null;
    img2Length = null;
    img3Length = null;
    by = null;

    if (searchResults === "Bohemian Rhapsody"){
        img1 = 'src/img/search-bar-icons/Queen_A_Night_At_The_Opera.png';
        img2 = 'src/img/search-bar-icons/Queen_Jazz.png';
        img3 = 'src/img/search-bar-icons/Queen_The_Game.png';
        img1Name = "Bohemian Rhapsody";
        img1Length = "5:54";
        img2Name = "Don't Stop Me Know";
        img2Length = "3:29";
        img3Name = "Another one bites the dust";
        img3Length = "3:29";
        by = "Queen";
        callDisplay = true;
    }else if (searchResults === "Energy106"){
        img1 = 'src/img/search-bar-icons/Energy106.jpg';
        img2 = 'src/img/search-bar-icons/Virgin103.png';
        img3 = 'src/img/search-bar-icons/CJPB.png';
        img1Name = "Energy 106 live radio";
        img2Name = "Virgin 103.1 live radio";
        img3Name = "CJOB 680 live radio";
        callDisplay = true;
    }else if (searchResults === "Ted Talk"){
        img1 = 'src/img/search-bar-icons/Ted_Talk_img1.jpg';
        img2 = 'src/img/search-bar-icons/Ted_Talk_img2.jpg';
        img3 = 'src/img/search-bar-icons/Ted_Talk_img3.jpg';
        img1Name = "How gratitude rewires your brain | Robin Kramer";
        img1Length = "11:16";
        img2Name = "Are you really good at something as you think? | Christina Costa";
        img2Length = "10:13";
        img3Name = "Why you shouldn't trust boredom? | Kevin H. Gary";
        img3Length = "12:04";
        by = "Ted Talk Daily";
        callDisplay = true;
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
    }

    if(callDisplay == true){
        display(searchResults);
    }
}


function display(searchResults){
    if (img1Length === null){
        insideMain.innerHTML = `
        <div
            <h1 class="search-header"> ${searchResults} search results:</h1> 
            <div class="media">
                <img src="${img1}"  class="mr-3 album-art">
                <div class="media-body">
                    <h5 class="mt-0">${img1Name}</h5>
                </div>
            </div>
        </div>
        <div
            <h1 style="margin-bottom-20;"> Other media you may like based on your search result:</h1> 
            <div 
            <h1> ------------------------------------------------------------------------- </h1>
            </div>
            <div class="media">
                <img src="${img2}"  class="mr-3 album-art">
                <div class="media-body">
                    <h5 class="mt-0">${img2Name}</h5>
                </div>
            </div>
        </div>
        <div 
        <h1> ------------------------------------------------------------------------- </h1>
        </div>
        <div 
            <div class="media">
                <img src="${img3}"  class="mr-3 album-art">
                <div class="media-body">
                    <h5 class="mt-0">${img3Name}</h5>
                </div>
            </div>
        </div>
        
        `;
 
    }else{
    insideMain.innerHTML = `
    <div
        <h1 class="search-header"> ${searchResults} search results:</h1> 
        <div class="media">
			<img src="${img1}"  class="mr-3 album-art">
			<div class="media-body">
				<h5 class="mt-0">${img1Name}</h5>
                <div>${img1Length}</div>
                <div>${by}</div>
            </div>
	    </div>
    </div>
    <div
        <h1 style="margin-bottom-20;"> Other media you may like based on your search result:</h1> 
            <div 
            <h1> ------------------------------------------------------------------------- </h1>
            </div>
            <div class="media">
                <img src="${img2}"  class="mr-3 album-art">
                <div class="media-body">
                    <h5 class="mt-0">${img2Name}</h5>
                    <div>${img2Length}</div>
                    <div>${by}</div>
                </div>
            </div>
        </div>
        <div 
        <h1> ------------------------------------------------------------------------- </h1>
        </div>
        <div 
            <div class="media">
                <img src="${img3}"  class="mr-3 album-art">
                <div class="media-body">
                    <h5 class="mt-0">${img3Name}</h5>
                    <div>${img3Length}</div>
                    <div>${by}</div>
                </div>
            </div>
    </div> 
    `;
    }

}


var img1 = null;
var img1Name = null;
var img1Length = null;
var img2 = null;
var img2Name = null;
var img2Length = null;
var img3 = null;
var img3Name = null;
var img3Length = null;
var by = null;

const insideMain = document.getElementById('main-container');
const search_button = document.getElementById('search-button');
search_button.addEventListener('click', onSearch);