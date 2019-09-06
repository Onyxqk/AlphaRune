function ioHandler() {
  var content = document.getElementById('content');
  var selectedRuneSet = document.getElementById('runeSets').options[runeSets.selectedIndex].value;
  var input = document.getElementById('input').value;
  switch(selectedRuneSet) {
    case "elderFuthark":
      runeSet = elderFuthark;
      break;
    case "futhorc":
        runeSet = futhorc;
      break;
    case "longBranch":
        runeSet = longBranch;
        break;
  }
  content.textContent = convert(input, runeSet);
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