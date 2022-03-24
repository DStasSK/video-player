// создание основных переменных
const video = document.querySelector('.video'),
      playBtn = document.querySelector('.play'),
      stopBtn = document.querySelector('.stop'),
      progress = document.querySelector('.progress'),
      timer = document.querySelector('.timer');



// play & pause - активация конопки
function toggleVideoStatus() {
   if (video.paused){
      video.play();
      // добавление класса active
      playBtn.classList.add('active');
   } else {
      video.pause();
      playBtn.classList.remove('active');
   }
}
// addEventListener - обработчик событий
playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);



function stopVideo() {
   video.currentTime = 0;
   video.pause();
   playBtn.classList.remove('active');
}
stopBtn.addEventListener('click', stopVideo);
video.addEventListener('ended', stopVideo);



function updateProgress() {
   progress.value = (video.currentTime / video.duration) * 100;

   let minutes = Math.floor(video.currentTime / 60);
   let seconds = Math.floor(video.currentTime % 60);

   if (minutes < 10) {minutes = '0' + String(minutes);}
   if (seconds < 10) {seconds = '0' + String(seconds);}
   timer.innerHTML = minutes + ':' + seconds;
}
video.addEventListener('timeupdate', updateProgress);



function setProgress() {
   video.currentTime = (progress.value * video.duration) / 100;
}
progress.addEventListener('change', setProgress);
