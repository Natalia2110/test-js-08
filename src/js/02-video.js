import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Player(iframe);

player.on('play', function() {
            console.log('played the video!');
        });

player.on('timeupdate', function(data) {
            // data is an object containing properties specific to that event
        });
    
        // player.getVideoTitle().then(function(title) {
        //     console.log('title:', title);
        // });

// const player = new Player('handstick', {
//     id: "vimeo-player",
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });

// const iframe = document.querySelector('iframe');
// console.log(iframe);

//     const player = new Vimeo.Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });