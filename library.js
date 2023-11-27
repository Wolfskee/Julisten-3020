// Add event listener to the "Songs" link
const songsLink = document.querySelector('#songs-link');
const podcastsLink = document.querySelector('#podcasts-link');
const radioLink = document.querySelector('#radio-link');

[songsLink, podcastsLink, radioLink].forEach((link, i) => link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    displayMediaItem([songsDB, podcastsDB, radioDB][i]); // Call the function to display songs
}));

const songName = ["Moonlight", "Echoes", "Serenade", "Whisper", "Enchantment", "Velvet", "Surrender", "Stardust", "Crystal", "Echo", "Cascade", "Horizon", "Reflection", "Solitude", "Eternity", "Oasis", "Aurora", "Reverie", "Lullaby", "Sanctuary", "Mirage", "Harmony", "Radiance", "Misty", "Ember", "Enigma", "Dusk", "Ethereal"];
const radioName = ["Rhythmic Reflections", "Sonic Odyssey", "Frequencies Unveiled", "Melodic Journeys", "Radiant Resonance", "Harmonic Horizons", "Audio Escapade", "Vibrant Voyages", "Celestial Cadence", "Echoed Emotions", "Serene Soundscapes", "Whispered Waves", "Enchanted Echoes", "Radiant Rhythms", "Lyrical Luminescence", "Sonorous Stories", "Ethereal Episodes", "Resonant Reverie", "Mellow Moments", "Tranquil Tunes", "Dreamy Dispatch", "Ambient Adventures", "Echoic Excursions", "Sonic Serenity", "Vibrato Vignettes"];
const radioGenres = ["Classic Rock Anthems", "Smooth Jazz Sessions", "Country Favorites", "Urban Beats", "Indie Discovery", "Soul and R&B Mix", "Blues Breaks", "Hip Hop Highlights", "Folk and Americana Journeys", "Classical Masterpieces", "Pop Chart-Toppers", "Alternative Explorations", "Acoustic Serenity", "Global Grooves", "Latin Rhythms", "Talk Show Insights", "Podcast Picks", "Science and Tech Trends", "Health and Wellness Hub", "Laugh Lounge", "Tech Talk Today", "Culinary Conversations"];
const musicGenres = ["Rock", "Jazz", "Pop", "Hip Hop/Rap", "Classical", "Blues", "Country", "Electronic Dance Music (EDM)", "Folk", "Reggae", "Alternative", "Rhythm and Blues (R&B)", "Metal", "Soul", "Punk", "Funk", "Indie", "Latin", "World Music", "Acoustic", "Ska", "Gospel", "Ambient", "Techno", "House", "Dubstep", "Raggae", "Salsa", "Bluegrass", "Disco"]
const podcastTopics = ["True Crime Mysteries", "Personal Growth Journeys", "Science and Technology Insights", "Comedy and Laughter Therapy", "History Unveiled", "Business and Entrepreneurship Chronicles", "Culinary Adventures and Food Stories", "Health and Wellness Wisdom", "Literary Escapades and Book Reviews", "Travel Tales and Destination Discoveries", "Pop Culture Commentary", "Environmental Explorations", "Music Moods and Melodies", "Parenting Perspectives", "Sports Stories and Insights", "Mindfulness and Meditation Moments", "Political Ponderings", "Educational Excursions", "Art and Creativity Spotlights", "Interviews with Inspiring Individuals", "Film and TV Show Reviews", "Spirituality and Metaphysical Musings", "Gaming Galore", "Fashion and Style Trends", "Social Media Stories and Trends", "Relationship Realities", "Educational Entertainment", "Motivational Moments", "Science Fiction and Fantasy Fables", "Documentary Deep Dives"]

const songsDB = generateRandomItemsDatabase(musicGenres, songName, 1, 3);
const podcastsDB = generateRandomItemsDatabase(podcastTopics, radioName, 1, 1);
const radioDB = generateRandomItemsDatabase(radioGenres, radioName, 1, 1);

function displayMediaItem(db) {
    const mainContainer = document.getElementById("main-container");
    mainContainer.innerHTML = '';

    const itemTemplate = document.getElementById('media-item');
    const genreTemplate = document.getElementById('genre');

    for (const [genre, songs] of Object.entries(db)) {
        const genreClone = document.importNode(genreTemplate.content, true);
        genreClone.querySelector('#genre-name').innerText = genre;

        const songList = document.createElement('div');
        songList.classList.add('media-grid');

        songs.forEach(song => {
            const clone = document.importNode(itemTemplate.content, true);

            const image = clone.querySelector('img');
            image.src = song.image;
            image.alt = song.title;

            const mediaBody = clone.querySelector('.media-body');
            mediaBody.innerHTML = `
              <span style="font-size:1.05rem">${song.title}</span><br>
              <span style="font-size:0.9rem">Artist: ${song.artist}</span><br>
            `;

            songList.appendChild(clone);
        });

        genreClone.appendChild(songList);
        mainContainer.appendChild(genreClone);
    }
}

function generateRandomItemsDatabase(genres, itemName, minLength, maxLength) {
    let itemsDatabase = {};
    const peopleName = ['Linda', 'Barbara', 'Joseph', 'Paul', 'Ashley', 'Denise', 'Eugene', 'Ralph', 'Randy', 'Marilyn', 'Amber', 'Willie', 'Bruce', 'Judy', 'Ann', 'Gerald'];
    const icons = ['A.png', 'B.png', 'C.png', 'D.png', 'E.png', 'F.png', 'G.png', 'H.png', 'I.png', 'J.png', 'K.png', 'L.png', 'M.png', 'N.png', 'O.png', 'P.png', 'Q.png', 'R.png', 'S.png', 'T.png', 'U.png', 'V.png', 'W.png', 'X.png', 'Y.png', 'AA.png', 'BB.png', 'CC.png', 'DD.png', 'EE.png', 'FF.png', 'GG.png', 'HH.png', 'II.png', 'JJ.png', 'KK.png', 'LL.png', 'MM.png', 'NN.png', 'OO.png', 'PP.png', 'QQ.png', 'RR.png', 'SS.png', 'TT.png', 'UU.png', 'VV.png', 'WW.png']

    genres.forEach(genre => {
        itemsDatabase[genre] = [];
        let itemsNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number of items between 1 and 10 for each genre

        for (let i = 0; i < itemsNumber; i++) {
            let item = {
                title: randomName(itemName, minLength, maxLength),
                artist: randomName(peopleName, 1, 3),
                image: 'src/img/media-icons/' + icons[Math.floor(Math.random() * icons.length)]
            };

            itemsDatabase[genre].push(item);
        }
    });

    return itemsDatabase;
}

function randomName(words, minLength, maxLength) {
    let titleWords = [];

    for (let i = 0; i < Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength; i++) {
        titleWords.push(words[Math.floor(Math.random() * words.length)]);
    }

    return titleWords.join(' ');
}
