const musicList = [

    {
        song: "./songs/Imagine-Dragons-Bad-Liar.mp3",
        image: "./images/Origins.jpg",
        name: "Bad Liar",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Imagine-Dragons-Demons.mp3",
        image: "./images/NightVisions.jpg",
        name: "Demons",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Imagine-Dragons-Thunder.mp3",
        image: "./images/Thunder.jpg",
        name: "Thunder",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Amsterdam-ImagineDragons.mp3",
        image: "./images/NightVisions.jpg",
        name: "Amsterdam",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Gold-ImagineDragons.mp3",
        image: "./images/SmokeMirrors.jpg",
        name: "Gold",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/NightVisions-ImagineDragons.mp3", //This is actually just a trailer, fix it!
        image: "./images/NightVisions.jpg",
        name: "Night Visions",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/OnTopOfTheWorld-ImagineDragons.mp3",
        image: "./images/OnTopOfTheWorld.jpg",
        name: "On Top Of The World",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Shots-ImagineDragons.mp3",
        image: "./images/Shots.jpg",
        name: "Shots",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Zero-ImagineDragons.mp3",
        image: "./images/Origins.jpg",
        name: "Zero",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/BattleCry-ImagineDragons.mp3", //change image from here down for Imagine Dragons Songs.
        image: "./images/SmokeMirrors.jpg",
        name: "BattleCry",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Friction-ImagineDragons.mp3",
        image: "./images/SmokeMirrors.jpg",
        name: "Friction",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/HearMe-ImagineDragons.mp3",
        image: "./images/HearMe.jpg",
        name: "Hear Me",
        author: "Imagine Dragons"
    },
    
    {
        song: "./songs/HopelessOpus-ImagineDragons.mp3",
        image: "./images/HopelessOpus.jpg",
        name: "Hopeless Opus",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/IDontKnowWhy-ImagineDragons.mp3",
        image: "./images/Evolve.jpg",
        name: "I Don't Know Why",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/ItsTime-ImagineDragons.mp3",
        image: "./images/ItsTime.jpg",
        name: "It's Time",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Levitate-ImagineDragons.mp3",
        image: "./images/Evolve.jpg",
        name: "Levitate",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Monster-ImagineDragons.mp3",
        image: "./images/SmokeMirrors.jpg",
        name: "Monster",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Roots-ImagineDragons.mp3",
        image: "./images/Roots.jpg",
        name: "Roots",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/StartOver-ImagineDragons.mp3",
        image: "./images/StartOver.jpg",
        name: "Start Over",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/WalkingTheWire-ImagineDragons.mp3",
        image: "./images/Evolve.jpg",
        name: "Walking The Wire",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Warriors-ImagineDragons.mp3",
        image: "./images/Warriors.jpg",
        name: "Warriors",
        author: "Imagine Dragons"
    },

    {
        song: "./songs/Dean-Lewis-Waves.mp3",
        image: "./images/Waves.jpg",
        name: "Waves",
        author: "Dean Lewis"
    },

    {
        song: "./songs/Dean-Lewis-Half-A-Man.mp3",
        image: "./images/HalfAMan.jpg",
        name: "Half A Man",
        author: "Dean Lewis"
    },

    {
        song: "./songs/Dean-Lewis-For-The-Last-Time.mp3",
        image: "./images/HalfAMan.jpg",
        name: "For The Last Time",
        author: "Dean Lewis"
    },

    {
        song: "./songs/Dean-Lewis-Stay-Awake.mp3",
        image: "./images/HalfAMan.jpg",
        name: "Stay Awake",
        author: "Dean Lewis"
    },

    {
        song: "./songs/Dean-Lewis-A-Place-We-Knew.mp3",
        image: "./images/APlaceWeKnew.jpg",
        name: "A Place We Knew",
        author: "Dean Lewis"
    }
];

var authorPlaylist = [];

var previousSongs = [];
var previousSongsTime = [];

var likedSongs = [];
var dislikedSongs = [];

var currentSong;
// var songAudioComponent;
var songImage;
var songAuthor;
var songName;
var audio;
var icon;
var bar;

var randNumber;
var playing = false;
var skip;
var back;

var changeSongOnCooldown;

var randOrderButton;
var songByArtistsButton;
var songAuthorsUl;
var stationType = musicList;
var stationName = musicList;

var opened = false;

var thumbsUp;
var thumbsDown;

// var newChildrenArray = [];


//fix bug with the like/dislike buttons
//set functionality that when a click is outside popup song-author selection the window closes;
//make randomOrder button automatically selected on page load(startWebsite);

let startWebsite = () => {

    grabComponents();

    randNumber = Math.floor(Math.random() * musicList.length);

    songImage.src = musicList[randNumber].image;
    songName.innerHTML = musicList[randNumber].name;
    songAuthor.innerHTML = musicList[randNumber].author;

    currentSong = musicList[randNumber];

    previousSongs.unshift(musicList[randNumber]);

    audio = new Audio(musicList[randNumber].song);
    icon.addEventListener("click", () => {
        if(playing === false){
            playing = true;
            audio.play();
            icon.classList.remove("fa-play-circle");
            icon.classList.add("fa-pause-circle");
        }
        else{
            playing = false;
            audio.pause();
            icon.classList.remove("fa-pause-circle");
            icon.classList.add("fa-play-circle");
        }
    });

    changeSongOnCooldown = true;

    setTimeout(() => {
        changeSongOnCooldown = false;
    }, 1500);

    startingEventListeners();
}

let grabComponents = () => {
    // songAudioComponent = document.querySelector('.song-audio');
    songImage = document.querySelector('.song-image');
    songAuthorsUl = document.querySelector('#songAuthorsUl');
    songAuthor = document.querySelector('.song-artist');
    songName = document.querySelector('.song-name');
    icon = document.querySelector('.play-icon');
    bar = document.querySelector('.bar');
    back = document.querySelector('.fa-backward');
    skip = document.querySelector('.fa-forward');
    
    randOrderButton = document.querySelector('#randomOrder');
    songByArtistsButton = document.querySelector('#ulContainer').children[0];

    thumbsUp = document.querySelector('.fa-thumbs-up');
    thumbsDown = document.querySelector('.thumbsDown');

    leftSectionList = document.getElementById('left-section').children[0];


}

let startingEventListeners = () => {
    audio.addEventListener('timeupdate', () => bar.style.width = audio.currentTime / audio.duration * 251 + "px");

    skip.addEventListener('click', () => nextRandomSong(stationType));

    audio.addEventListener('ended', () => nextRandomSong(stationType));

    back.addEventListener('click', () => {previousSong(1)});

    document.querySelectorAll('.option').forEach(item => item.addEventListener('click', highlightOnClick));

    songByArtistsButton.addEventListener('click', () => openStationChoices(false));

    thumbsUp.addEventListener('click', thumbsUpClicked);
    thumbsDown.addEventListener('click', thumbsDownClicked);

    for (let i = 0; i < songAuthorsUl.children.length; i++) {
        songAuthorsUl.children[i].addEventListener('click', clicked);
    }

    for (let i = 0; i < songAuthorsUl.children.length; i++) {
        songAuthorsUl.children[i].addEventListener('click', subStationHoldSelection)
    }

    randOrderButton.addEventListener('click', () => {

        openStationChoices(true);

        if(stationType === musicList) return;

        stationName = musicList;
        stationType = musicList;
        nextRandomSong(stationType);
        removeHoldSelectionStyles();
    });

}

let checkThumbSelection = () => { //fix both selected glitch

    var songLiked = false;
    var songDisliked = false;

    for (let i = 0; i < likedSongs.length; i++) {
        if (currentSong === likedSongs[i]){
            thumbsUp.style.background = 'rgb(91, 192, 190, 0.1)';
            songLiked = true;
        }
    }

    if(!songLiked){
        thumbsUp.style.background = '';
    }


    for (let d = 0; d < dislikedSongs.length; d++) {
        if(currentSong === dislikedSongs[d]){
            thumbsDown.style.background = 'rgb(91, 192, 190, 0.1)';
            songDisliked = true;
        }
    }

    if(!songDisliked){
        thumbsDown.style.background = '';
    }
}

let thumbsUpClicked = () => { //i think spacing is done incorecctely

    thumbsUp.style.background = 'rgb(91, 192, 190, 0.1)';
    thumbsDown.style.background = '';

    var duplicate = false;

    for (let i = 0; i < likedSongs.length; i++) {
        if(currentSong === likedSongs[i]) {
            duplicate = true;
        }
    }

    if(duplicate === false) {
        likedSongs.unshift(currentSong);
    }

    for (let d = 0; d < dislikedSongs.length; d++) {
        if(currentSong === dislikedSongs[d]){

            // console.log("Remove: " + dislikedSongs[d].name);

            dislikedSongs.splice(dislikedSongs[d], 1);

            // console.log("should remove from diliked id = " + d);
        }

        // console.log("DislikedSongs: ");
        // console.log(dislikedSongs);
        // console.log("Liked Songs: ");
        // console.log(likedSongs);
    }
}

let thumbsDownClicked = () => {
    thumbsDown.style.background = 'rgb(91, 192, 190, 0.1)';
    thumbsUp.style.background = '';

    var duplicate = false;

    for (let d = 0; d < dislikedSongs.length; d++) {
        if(currentSong === dislikedSongs[d]) {
            duplicate = true;
        }
    }

    if(duplicate === false) {
        dislikedSongs.unshift(currentSong);
    }

    for (let i = 0; i < likedSongs.length; i++) {
        if(currentSong === likedSongs[i]){

            // console.log("Remove: " + likedSongs[i].name);

            likedSongs.splice(likedSongs[i], 1);

            // console.log("should remove from likedSongs id = " + i);
        }

        // console.log("DislikedSongs: ");
        // console.log(dislikedSongs);
        // console.log("Liked Songs: ");
        // console.log(likedSongs);
    }
}

function subStationHoldSelection() {
    removeHoldSelectionStyles();
    this.style.background = "rgba(11, 19, 43)";
}

let removeHoldSelectionStyles = () => {
    for (let i = 0; i < songAuthorsUl.children.length; i++) {
        songAuthorsUl.children[i].style.background = '';
    }
}

function clicked(){

    if(stationName !== this.innerHTML){
        stationName = this.innerHTML;
        orderByAuthor(this.innerHTML);
        nextRandomSong(stationType);

        setTimeout(() => {
            songAuthorsUl.style.transform = 'translateY(-5%)';
            songAuthorsUl.style.opacity = 0; 
            opened = false;
        }, 700);
    }
}

let openStationChoices = (closeWindow) => {
    if(opened === false && closeWindow === false){
        opened = true;

        for (let i = 0; i < songAuthorsUl.children.length; i++) {

            let style = songAuthorsUl.children[i].style;

            // style.opacity = 1; 
            // style.transform = 'translateY(0%)'; 
            style.pointerEvents = 'all'; 
        }

        songAuthorsUl.style.opacity = 1; 
        songAuthorsUl.style.transform = 'translateY(0%)'; 
    }

    if(opened && closeWindow){
        opened = false;

        for (let i = 0; i < document.querySelector('#songAuthorsUl').children.length; i++) {

            let style = songAuthorsUl.children[i].style;

            // style.transform = 'translateY(-90%)'; 
            // style.opacity = 0; 
            style.pointerEvents = 'none'; 
        }

        // songAuthorsUl.style.transform = 'translateY(-5%)';
        songAuthorsUl.style.transform = 'translateY(-5%)';
        songAuthorsUl.style.opacity = 0;

        // let style = songAuthorsUl.style;

        // style.transform = 'translateY(-90%)'; 
        // style.opacity = 0; 
        // style.pointerEvents = 'none'; 
        
    }
}

let orderByAuthor = (selectedAuthor) => {

    authorPlaylist = [];

    for (let i = 0; i < musicList.length; i++) {
        
        if(musicList[i].author === selectedAuthor){
            authorPlaylist.push(musicList[i]);
        }
    }
    
    if(authorPlaylist.length < 3) return console.log("Error: Selected Arthor does not have enough songs");

    stationType = authorPlaylist;
}

function highlightOnClick(){
    document.querySelectorAll('.option').forEach(option => {
        option.children[0].style.background = '';
        option.children[0].style.borderRadius = '';   
    });
    
    this.children[0].style.background = "rgb(28, 37, 65)";
    this.children[0].style.borderRadius = "15px 0px";
}


let nextRandomSong = (list) => {

    if(changeSongOnCooldown) return;

    changeSongOnCooldown = true;

    setTimeout(() => {
        changeSongOnCooldown = false;
    }, 1500);


    audio.pause();
    audio.currentTime = 0;

    if(randNumber != null && randNumber > list.length - 1) {
        randNumber =  Math.floor(Math.random() * list.length);
    }

    randNumber +=  Math.floor(Math.random() * (list.length-1) + 1);

    if(randNumber >= list.length) randNumber -= list.length;

    currentSong = list[randNumber];

    audio.src = list[randNumber].song;
    audio.play();

    previousSongs.unshift(list[randNumber]);

    if(previousSongs.length > 20) previousSongs.pop();

    songName.innerHTML = list[randNumber].name;
    songAuthor.innerHTML = list[randNumber].author;
    songImage.src = list[randNumber].image;
    setIconToPause();

    checkThumbSelection();

    updateLeftSection();
}

let previousSong = (numBack) => {

    if(changeSongOnCooldown) return;

    changeSongOnCooldown = true;

    setTimeout(() => {
        changeSongOnCooldown = false;
    }, 1500);

    if(previousSongs.length === 1){
        console.log("Return");
        return;
    }

    audio.src = previousSongs[numBack].song; //error here (undefined)
    audio.play();

    songName.innerHTML = previousSongs[numBack].name;
    songAuthor.innerHTML = previousSongs[numBack].author;
    songImage.src = previousSongs[numBack].image;

    for (let i = 0; i < numBack; i++) { //maybe make better way of doing this
        previousSongs.shift();  
    }

    updateLeftSectionReverse(numBack);

    setIconToPause();
}

let setIconToPause = () => {

    playing = true;

    if(icon.classList.contains("fa-play-circle"))
    {
        icon.classList.remove("fa-play-circle");
        icon.classList.add("fa-pause-circle");
    }
} 

let updateLeftSection = () => {

    // let currentPrevSong = previousSongs[1];

    if (previousSongs.length > 7) {
        //remove bottom item

        for (let i = 6; i < leftSectionList.children.length; i++) {

            var childToDelete = leftSectionList.children[i];

            childToDelete.style.opacity = 0;
            childToDelete.style.transform = 'translateX(-100%)';

            setTimeout(() => {
                childToDelete.remove(); //error here
                // leftSectionList.removeChild(childToDelete);
            }, 1000);
        }

        // leftSectionList.children[4].style.opacity = 0.6;
        // leftSectionList.children[5].style.opacity = 0.4;

        leftSectionList.style.transition = 'all 0.8s';

        if(window.innerWidth > 1400) {
            leftSectionList.style.marginTop = '4vw';
        }

        else {
            leftSectionList.style.marginTop = '5vw';
        }

        // console.log(window.innerWidth + " inner");

        setTimeout(() => {
            createNewPrevElement(1, 1);
        }, 1000);

    }

    else{

        //bump other songs down and fill top song.

        leftSectionList.style.transition = 'all 0.8s';
        
        
        if(window.innerWidth > 1400) {
            leftSectionList.style.marginTop = '4vw';
        }
        else {
            leftSectionList.style.marginTop = '5vw';
        }

        if(previousSongs.length === 2){
            setTimeout(() => {
                createNewPrevElement(1, 1);
            }, 50);
        }
        else{
            setTimeout(() => {
                createNewPrevElement(1, 1);
            }, 680);
        }

        // console.log('???' + previousSongs.length);
    }
}

let updateLeftSectionReverse = (numBack) => {

    let iterations = numBack;
    let shift;

    var newChildrenArray = [];

    for (let i = 0; i < iterations; i++) {
        let child = leftSectionList.children[i];
        
        child.style.opacity = 0;
        child.style.transform = 'translateX(-100%)';

        if(previousSongs.length > 7 - i) { 
            console.log("test " + (7 - i));
            let newElementIndex = 8 - (iterations - i); //inverts but breaks...maybe not inverts...
            console.log(newElementIndex + " Ind");
            // createNewPrevElement(previousSongs[7 - i], -1); //reversing oreder ex: 5,4,3 needs to be 3,4,5
            newChildrenArray.push(7 - i);
        }

        setTimeout(() => {
            child.remove();
            // leftSectionList.removeChild(child);

            leftSectionList.style.transition = 'all 0s';
            leftSectionList.style.marginTop = '0';
        }, 800);
    }

    if(newChildrenArray.length !== 0) {

        newChildrenArray.reverse();

        for (let i = 0; i < newChildrenArray.length; i++) {
            console.log(previousSongs[newChildrenArray[i]]);
            createNewPrevElement(newChildrenArray[i], -1);
        }
    }

    if(leftSectionList.children.length === iterations) {
        shift = 0;
    }

    else if(window.innerWidth > 1400) {
        shift = 4 * iterations;
    }
    else {
        shift = 5 * iterations;
    }

    leftSectionList.style.transition = 'all 0.8s';

    shiftString = shift.toString();
    shiftVW = -shiftString + 'vw';

    leftSectionList.style.marginTop = shiftVW;
}

let createNewPrevElement = (currentPrevSongIndex, direction) => {

    let minutes;
    let seconds;

    let currentPrevSong = previousSongs[currentPrevSongIndex];

    let prevSong = document.createElement('li');

    let prevSongImage = document.createElement('img');
    // prevSongImage.src = previousSongs[1].image;
    prevSongImage.src = currentPrevSong.image;
    prevSong.append(prevSongImage);

    let prevSongNames = document.createElement('div');
    prevSong.append(prevSongNames);

    let prevSongTitle = document.createElement('h2');
    // prevSongTitle.innerHTML = previousSongs[1].name;
    prevSongTitle.innerHTML = currentPrevSong.name;
    prevSongNames.append(prevSongTitle);

    let prevSongAuthor = document.createElement('h3');
    // prevSongTitle.innerHTML = previousSongs[1].name;
    prevSongAuthor.innerHTML = currentPrevSong.author;
    prevSongNames.append(prevSongAuthor);

    if(direction === 1){

        minutes = Math.floor(audio.duration / 60);
        seconds = Math.floor(audio.duration - (minutes * 60));
        previousSongsTime.unshift(audio.duration);

        leftSectionList.style.transition = 'all 0s';
        leftSectionList.style.marginTop = '0vw';

        prevSong.style.transform = 'translateY(50%)';
        leftSectionList.prepend(prevSong);
    }

    else if (direction === -1) {

        minutes = Math.floor(previousSongsTime[7] / 60);
        seconds = Math.floor(previousSongsTime[7] - (minutes * 60));
    
        prevSong.style.transform = 'translateY(50%)';
        leftSectionList.append(prevSong);
    }

    minutes.toString();

    if(seconds < 10) {
        seconds = "0" + seconds.toString();
    }

    else{
        seconds.toString();
    }

    let time = `${minutes}:${seconds}`

    let duration = document.createElement('span');
    duration.innerHTML = time;
    prevSong.append(duration);

    let playButton = document.createElement('i');
    playButton.className = "far fa-play-circle";
    prevSong.append(playButton);

    prevSong.style.opacity = 0;

    console.log(audio.duration);

    prevSong.addEventListener('click', () => {

        let i;
        for (i = 0; prevSong !== leftSectionList.children[i]; i++);

        previousSong(i + 1);
    });

    setTimeout(() => {
        prevSong.style.opacity = 1;
        prevSong.style.transform = 'translateY(0%)';
    }, 50);
}

window.onload = startWebsite;