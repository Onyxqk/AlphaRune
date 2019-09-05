function manageInput() {
    document.getElementById('content').innerHTML=convert(document.getElementById('input').value);
  }

function clickHandler(e) {
    setTimeout(manageInput, 50);
  }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', clickHandler);
  });