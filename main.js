
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

function resound_wt_tag() { 

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


 };

resound_wt_tag();



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


// 1. Находим блок (предполагается, что у него есть id="myBlock")
const blockToHide = document.getElementById('corner-gif');

// 2. Задаем пороговую ширину
const thresholdWidth = 1200; // Например, 768px

// 3. Обработчик события изменения размера окна
window.addEventListener('resize', function() {
  // Получаем текущую ширину окна
  const windowWidth = window.innerWidth;

  // 4. Проверяем условие и скрываем/показываем блок
  if (windowWidth < thresholdWidth) {
    blockToHide.style.display = 'none'; // Скрываем блок
  } else {
    blockToHide.style.display = 'block'; // Показываем блок (замените на ваш исходный display)
  }
});

// Запускаем проверку при загрузке страницы, чтобы блок сразу был скрыт при необходимости
window.dispatchEvent(new Event('resize'));



let updateTooltipw = document.documentElement.style.getPropertyValue('--tooltip-width');
let updateTooltipt = document.documentElement.style.getPropertyValue('--tooltip-font-size');
function updateTooltipWidth() {

  if(window.innerWidth < 900){
	document.documentElement.style.setProperty('--tooltip-width', "235px");
	document.documentElement.style.setProperty('--tooltip-font-size', "0.67rem");
  }
  if(window.innerWidth >= 900){
	document.documentElement.style.setProperty('--tooltip-width', updateTooltipw );
	document.documentElement.style.setProperty('--tooltip-font-size', updateTooltipt);
  }
  
}

updateTooltipWidth();
window.addEventListener('resize', updateTooltipWidth);

