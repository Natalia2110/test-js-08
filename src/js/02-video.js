import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', function getCurrentTime(data) {
    localStorage.setItem('videoplayer-current-time',JSON.stringify(data));
      });

    const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    console.log(currentTime);

    player.setCurrentTime(currentTime.seconds).then(function(seconds) {
        // seconds = the actual time that the player seeked to
        
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                console.log(error.name);
                break;
            default:
                console.log('some other error occurred');
                break;
        }
    });
    console.log(currentTime);