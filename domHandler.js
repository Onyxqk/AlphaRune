function manageInput() {
    document.getElementById('content').innerHTML=convert(document.getElementById('input').value);
  }

function clickHandler(e) {
    setTimeout(manageInput, 50);
  }


function enterHandler(e) {
    if (e.which == 13 || event.keyCode == 13) {
        manageInput();
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', clickHandler);
    document.querySelector('input').addEventListener('keypress', enterHandler);
  });