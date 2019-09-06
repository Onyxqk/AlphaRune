function ioHandler() {
  var content = document.getElementById('content');
  var selectedRuneSet = document.getElementById('runeSets').options[runeSets.selectedIndex].value;
  var input = document.getElementById('input');
  switch(selectedRuneSet) {
    case "elderFuthark":
      runeSetValue = elderFuthark;
      break;
    case "futhorc":
        runeSetValue = futhorc;
      break;
  }
  content.textContent = convert(input.value, runeSetValue);
}

function enterHandler(e) {
  if (e.which == 13) {
    ioHandler();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', ioHandler);
  document.querySelector('input').addEventListener('keypress', enterHandler);
});