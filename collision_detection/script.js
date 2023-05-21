/*eslint-env browser*/
/*eslint no-console:0*/
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red while the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)

*/

    

var speed = 50;

function checkCollision() {

    console.log('check');
    }

    document.getElementById('right').addEventListener('click', () => {
    checkCollision();
    });

function checkCollision() {
    if (puck_x >= 250 && puck_x >= 250) {
     console.log('collision!');
     document.getElementById('gap').style.backgroundColor = 'red';
     }
     else  document.getElementById('gap').style.backgroundColor = 'white';
    }


var puck = document.getElementById('puck');

var puck_x = 210;
var puck_y = 210;

puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

document.getElementById('puck').style.top = puck_y + 'px';
document.getElementById('puck').style.left = puck_x + 'px';


function logCoordinates() {
    console.log('x=' + puck_x + ' y=' + puck_y);
    }
    document.getElementById('left').addEventListener('click', () => {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    });

document.getElementById('left').addEventListener('click', () => {
    puck_x -= 50;
    document.getElementById('puck').style.left = puck_x + 'px';
    });

 document.getElementById('left').addEventListener('click', () => {
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    console.log('x=' + puck_x + ' y=' + puck_y);
    });

 document.getElementById('right').addEventListener('click', () => {
    puck_x += 50;
    document.getElementById('puck').style.left = puck_x + 'px';
    });

    document.getElementById('up').addEventListener('click', () => {
        puck_x -= speed;
        puck.style.top = puck_y + 'px';
        console.log('x=' + puck_x + ' y=' + puck_y);
        });

     document.getElementById('down').addEventListener('click', () => {
        puck_x += speed;
        puck.style.top = puck_y + 'px';
        console.log('x=' + puck_x + ' y=' + puck_y);
        });



