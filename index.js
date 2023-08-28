// const buttons = document.getElementsByTagName('button');
const buttons = document.getElementsByClassName('xo_button');
const start_button = document.getElementById("start_button");
const restart_button = document.getElementById("restart_button");

let counter = 1;
let draw_counter = 0;

// Each button 

const r11 = document.getElementById('r11');
const r12 = document.getElementById('r12');
const r13 = document.getElementById('r13');
const r21 = document.getElementById('r21');
const r22 = document.getElementById('r22');
const r23 = document.getElementById('r23');
const r31 = document.getElementById('r31');
const r32 = document.getElementById('r32');
const r33 = document.getElementById('r33');

var xWon = false;
var yWon = false;

start_button.onclick = function () {


    setTimeout(() => {
        start_button.remove();
        restart_button.style.display = 'block';
    }, 1000);

    [...buttons].forEach(element => {

        element.onclick = function () {
            const result_of_game = document.getElementById("result_of_game");

            counter++;
            draw_counter++;

            if (draw_counter == 9 && xWon == false && yWon == false) {
                // alert("game draw");
                result_of_game.innerText = "Its a Draw";
            }

            element.style.backgroundColor = '#E5E5E5';
            element.style.color = 'black';
            element.style.opacity = '1';
            element.disabled = true;


            if (counter % 2 == 0) {
                element.innerText = 'X';
                element.style.color = 'red';

            }
            else if (counter % 2 != 0) {
                element.innerText = 'O';
                element.style.color = 'blue';
            }


            if ((r11.innerText == 'X' && r12.innerText == 'X' && r13.innerText == 'X') ||
                (r11.innerText == 'X' && r21.innerText == 'X' && r31.innerText == 'X') ||
                (r21.innerText == 'X' && r22.innerText == 'X' && r23.innerText == 'X') ||
                (r11.innerText == 'X' && r22.innerText == 'X' && r33.innerText == 'X') ||
                (r13.innerText == 'X' && r22.innerText == 'X' && r31.innerText == 'X') ||
                (r31.innerText == "X" && r32.innerText == "X" && r33.innerText == "X") ||
                (r13.innerText == "X" && r23.innerText == "X" && r33.innerText == "X") ||
                (r12.innerText == "X" && r22.innerText == "X" && r32.innerText == "X")
            ) {
                // alert('X won');
                xWon = true;
                confetti();
                confetti();
                confetti();
                confetti();
                confetti();
                confetti();
                result_of_game.innerText = "Player X won";

                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true;
                    buttons[i].style.backgroundColor = '#E5E5E5';
                }

            }

            else if ((r11.innerText == 'O' && r12.innerText == 'O' && r13.innerText == 'O') ||
                (r11.innerText == 'O' && r21.innerText == 'O' && r31.innerText == 'O') ||
                (r21.innerText == 'O' && r22.innerText == 'O' && r23.innerText == 'O') ||
                (r11.innerText == 'O' && r22.innerText == 'O' && r33.innerText == 'O') ||
                (r13.innerText == 'O' && r22.innerText == 'O' && r31.innerText == 'O') ||
                (r31.innerText == "O" && r32.innerText == "O" && r33.innerText == "O") ||
                (r13.innerText == "O" && r23.innerText == "O" && r33.innerText == "O") ||
                (r12.innerText == "O" && r22.innerText == "O" && r32.innerText == "O")
            ) {
                // alert('O won');
                yWon = true;
                result_of_game.innerText = "Player O won";
                confetti();
                confetti();
                confetti();

                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true;
                    buttons[i].style.backgroundColor = '#E5E5E5';
                }
            }
        }
    });

    restart_button.onclick = function () {
        window.location.reload();
    }

};
