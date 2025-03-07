let lastBoxColor = null;

function moveBox(color) {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');

    let targetPosition = 200;

    box1.style.transition = 'top 1.5s ease-in-out, background-color 2.5s ease-out';
    box2.style.transition = 'top 1.5s ease-in-out, background-color 2.5s ease-out';

    if (parseInt(box1.style.top) === targetPosition) {
        box1.style.top = '-900px';
        box1.style.backgroundColor = 'white';
        box1.style.setProperty('--border-color', lastBoxColor);

        setTimeout(() => {
            box2.style.top = `${targetPosition}px`;
            box2.style.backgroundColor = color;
            box2.style.setProperty('--border-color', color);
        }, 100);
    } else {
        box2.style.top = '-900px';
        box2.style.backgroundColor = 'white';
        box2.style.setProperty('--border-color', lastBoxColor);

        setTimeout(() => {
            box1.style.top = `${targetPosition}px`;
            box1.style.backgroundColor = color;
            box1.style.setProperty('--border-color', color);
        }, 100);
    }

    lastBoxColor = color;
}
