let button = document.getElementById('button');
let items = document.querySelectorAll('.color-box h2');

button.addEventListener('click', function() {

    for (let item of items) {
        let random = Math.random().toString(16).substring(2, 8);
        item.innerHTML = "#" + random;
        item.style.backgroundColor = '#' + random;
    }
})