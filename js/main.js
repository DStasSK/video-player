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
   progress.value = 0;
}
stopBtn.addEventListener('click', stopVideo);
video.addEventListener('ended',()=>{
   stopVideo();
   // toggleVideoStatus();
});



function updateProgress() {
   let hourTrue = 0;
   progress.value = (video.currentTime / video.duration) * 60; // 100

   // hours & minutes & seconds
   let hours = Math.floor(video.currentTime / 3600);
   let minutes = Math.floor((video.currentTime - hours * 3600) / 60);
   let seconds = Math.floor(video.currentTime % 60);

   if (hours > 0) {hourTrue = 1;}

   if (hours < 10) {hours = '0' + String(hours);}
   if (minutes < 10) {minutes = '0' + String(minutes);}
   if (seconds < 10) {seconds = '0' + String(seconds);}

   if (hourTrue === 0){timer.innerHTML = minutes + ':' + seconds;}
   else {timer.innerHTML = hours + ':' + minutes + ':' + seconds;}
}
video.addEventListener('timeupdate', updateProgress);



function setProgress() {
   video.currentTime = (progress.value * video.duration) / 60; // 100
}
progress.addEventListener('change', setProgress);



// тайм коды для перехода
// создаем массив объектов с именем time
const videoTime = document.getElementsByName("time");
// добавляем для каждого элемента массива обработчик событий click
for (let i=0; i<videoTime.length; i++){
   videoTime[i].addEventListener('click', ()=>{
      // при клике на <span name="time">...</span>
      // устанавливаем время для воспроизведения видеофайла
      // из параметра data-set-time тега <span>
      video.currentTime = videoTime[i].dataset.setTime;
   });
}
