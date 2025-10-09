
// отложенный запуск фоновой музыки
window.addEventListener('load', () => {
  const bgMusic = document.getElementById('bg-music');
  const interval = setInterval(() => {
    if (bgMusic.paused) {
      bgMusic.volume = 0.2;
      bgMusic.play().then(() => {
        clearInterval(interval);
        console.log("Фоновая музыка запущена");
      }).catch(err => {
        console.log("Ожидание разрешения на воспроизведение...");
      });
    } else {
      clearInterval(interval);
    }
  }, 1000);

  // ползунок громкости
  const volumeControl = document.getElementById('volume-control');
  volumeControl.addEventListener('input', () => {
    bgMusic.volume = volumeControl.value;
  });
});

// обработка звука при наведении на пункты меню
let currentHoverAudio = null;
document.querySelectorAll('a').forEach(item => {
item.addEventListener('mouseenter', () => {
const soundPath = item.getAttribute('data-sound');
if (soundPath) {
// Остановить предыдущий звук, если был
if (currentHoverAudio) {
currentHoverAudio.pause();
currentHoverAudio.currentTime = 0;
}
// Приглушить фоновую музыку
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = Math.min(bgMusic.volume, 0.05);


// Запустить новый звук
currentHoverAudio = new Audio(soundPath);
currentHoverAudio.volume = 1 * document.getElementById('volume-control').value * 2;
currentHoverAudio.play();


// Когда звук закончился — восстановить громкость
currentHoverAudio.addEventListener('ended', () => {
bgMusic.volume = document.getElementById('volume-control').value;
currentHoverAudio = null;
});
}
});
});




document.querySelectorAll('wt-tag').forEach(item => {
	
	
item.addEventListener('mouseenter', () => {

const soundPath = 'sounds/glitch2.mp3';

// Остановить предыдущий звук, если был
if (currentHoverAudio) {
currentHoverAudio.pause();
currentHoverAudio.currentTime = 0;
}
// Приглушить фоновую музыку
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = Math.min(bgMusic.volume, 0.05);


// Запустить новый звук
currentHoverAudio = new Audio(soundPath);
currentHoverAudio.volume = 1 * document.getElementById('volume-control').value * 2;
currentHoverAudio.play();


// Когда звук закончился — восстановить громкость
currentHoverAudio.addEventListener('ended', () => {
bgMusic.volume = document.getElementById('volume-control').value;
currentHoverAudio = null;
});


});


});


let f_rule_text = '';
document.querySelectorAll('div').forEach(item => {
	
	const ATT= (item.getAttribute('f_rule') || '').trim().toLowerCase();
	
	
	if (ATT == 'text') {
		
		f_rule_text = item.innerHTML;
		
	} 

	if (ATT == 'show') {
		
		item.innerHTML = `<span  style="font-size: revert; background: revert; border-radius: revert; border-bottom: 1px dashed #559; " class="wt-tag">
			${item.innerText}
			<span style="transform:translateX(-28%);" class="wt-tooltip">
			${f_rule_text || '<i>No description available</i>'}
			</span>
		</span>`;
		
	} 
	
	//console.log('THE END');

});

// display:inline-block;
// background:#455a64;
//  color:#fff;
//  font-size:0.7rem;
//  padding:1px 4px;
//  border-radius:4px;
//  margin:0 1px;
//  cursor:help;
//  position:relative;
