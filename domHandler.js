function ioHandler() {
    document.getElementById('content').textContent=convert(document.getElementById('input').value);
  }

function enterHandler(e) {
    if (e.which == 13 || event.keyCode == 13) {
        ioHandler();
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', ioHandler);
    document.querySelector('input').addEventListener('keypress', enterHandler);
  });