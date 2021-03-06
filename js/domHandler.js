function ioHandler() {
  var content = document.getElementById('content');
  var selectedRuneSet = document.getElementById('runeSets').options[runeSets.selectedIndex].value;
  var input = document.getElementById('input').value;
  switch (selectedRuneSet) {
    case "elderFuthark":
      runeSet = elderFuthark;
      break;
    case "futhorc":
      runeSet = futhorc;
      break;
    case "longBranch":
      runeSet = longBranch;
      break;
    case "shortTwig":
      runeSet = shortTwig;
      break;
    case "medieval":
      runeSet = medieval;
      break;
    case "ogham":
      runeSet = ogham;
      break;
  }
  if (runeSet === ogham && !input.includes("᚛") && input.match(/[a-z]/) && input.length >= 1) { content.textContent = "᚛" + convert(input, runeSet) + "᚜" }
  else {
    content.textContent = convert(input, runeSet);
  }
}

function enterHandler(e) {
  if (e.which === 13) {
    ioHandler();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', ioHandler);
  document.querySelector('input').addEventListener('keypress', enterHandler);
  document.querySelector('select').addEventListener('keypress', enterHandler);
});