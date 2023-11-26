// Add event listener to the "Songs" link
const songsLink = document.querySelector('.nav-link.text-white'); // Change this selector to match your specific "Songs" link
songsLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    displaySongs(); // Call the function to display songs
});

function displaySongs() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    const itemTemplate = document.getElementById('media-item');
    const genreTemplate = document.getElementById('genre');
    const db = generateRandomSongsDatabase();

    // const genreList = document.createElement('div');
    // genreList.classList.add('row');

    for (const [genre, songs] of Object.entries(db)) {
        const genreClone = document.importNode(genreTemplate.content, true);
        genreClone.querySelector('#genre-name').innerText = genre;

        const songList = document.createElement('div');
        songList.classList.add('song-list');

        songs.forEach(song => {
            const clone = document.importNode(itemTemplate.content, true);

            const image = clone.querySelector('img');
            image.src = song.image;
            image.alt = song.title;

            const mediaBody = clone.querySelector('.media-body');
            mediaBody.innerHTML = `
              <span>${song.title}</span><br>
              <span>Artist: ${song.artist}</span><br>
            `;

            songList.appendChild(clone);
        });

        genreClone.appendChild(songList);
        mainContainer.appendChild(genreClone)
    }

    // mainContainer.appendChild(genreList);
}

function generateRandomSongsDatabase() {
    let songsDatabase = {};
    let genres = ["Rock", "Pop", "Hip-Hop", "Country", "Rap", "Electronic", "Folk", "Indie", "Metal", "Punk", "Soul", "Reggae", "Funk", "Blues", "Latin", "Jazz"];
    let songName = ['Moonlight', 'Echoes', 'Serenade', 'Whisper', 'Enchantment', 'Velvet', 'Surrender', 'Stardust', 'Crystal', 'Echo', 'Cascade', 'Horizon', 'Reflection', 'Solitude', 'Eternity', 'Oasis', 'Aurora', 'Reverie', 'Lullaby', 'Sanctuary', 'Mirage', 'Harmony', 'Radiance', 'Misty', 'Ember', 'Enigma', 'Dusk', 'Ethereal'];
    let peopleName = ['Linda', 'Barbara', 'Joseph', 'Paul', 'Ashley', 'Denise', 'Eugene', 'Ralph', 'Randy', 'Marilyn', 'Amber', 'Willie', 'Bruce', 'Judy', 'Ann', 'Gerald'];

    genres.forEach(genre => {
        songsDatabase[genre] = [];
        let songsNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number of songs between 1 and 10 for each genre

        for (let i = 0; i < songsNumber; i++) {
            let song = {
                title: randomName(songName, 1, 3),
                artist: randomName(peopleName, 1, 3),
                image: 'src/img/neko-playing.gif'
            };

            songsDatabase[genre].push(song);
        }
    });

    return songsDatabase;
}

function randomName(words, minLength, maxLength) {
    let titleWords = [];

    for (let i = 0; i < Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength; i++) {
        titleWords.push(words[Math.floor(Math.random() * words.length)]);
    }

    return titleWords.join(' ');
}
