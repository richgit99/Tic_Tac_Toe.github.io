var row_1 = 0;
var row_2 = 0;
var row_3 = 0;
var start_diagonal = 0;
var end_diagonal = 0;
var col_1 = 0;
var col_2 = 0;
var col_3 = 0;

var Row_1 = 0;
var Row_2 = 0;
var Row_3 = 0;
var Start_diagonal = 0;
var End_diagonal = 0;
var Col_1 = 0;
var Col_2 = 0;
var Col_3 = 0;


const b1_div = document.getElementById("b1_div");
const b2_div = document.getElementById("b2_div");
const b3_div = document.getElementById("b3_div");
const b4_div = document.getElementById("b4_div");
const b5_div = document.getElementById("b5_div");
const b6_div = document.getElementById("b6_div");
const b7_div = document.getElementById("b7_div");
const b8_div = document.getElementById("b8_div");
const b9_div = document.getElementById("b9_div");


const second_row = document.getElementById("second _row_div");
const third_row_div = document.getElementById("3rd_row_div");


const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");


const turn_of_player = document.getElementById("turn_id");

turn_of_player.innerHTML = "Player Turn : Any player can start";

document.getElementById("start_button").onclick = function () {


    const result = document.getElementById("result");

    document.getElementById("start_button").remove();

    const x_mover = document.getElementById("x").onclick = function () {



        b1.onclick = function () {
            b1.remove();
            b1_div.innerHTML = "X";
            row_1 += 1;
            col_1 += 1;
            start_diagonal += 1;
            b1_div.style.backgroundColor = "white";
            b1_div.style.fontSize = 'large';
            b1_div.style.paddingTop = '2em';
            b1_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';

            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if (row_1 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won");
                b1_div.style.backgroundColor = "red";
                b2_div.style.backgroundColor = "red";
                b3_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";


            }

            if (col_1 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b1_div.style.backgroundColor = 'red';
                b4_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (start_diagonal == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Start Diagonal");
                b1_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
          
              result.innerHTML = "Result : Game Tied ";
              turn_of_player.innerHTML = "Game Over";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }



        }

        b2.onclick = function () {
            b2.remove();
            b2_div.innerHTML = "X";
            row_1 += 1;
            col_2 += 1;
            b2_div.style.backgroundColor = "white";
            b2_div.style.fontSize = 'large';
            b2_div.style.paddingTop = '2em';
            b2_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';

            if (row_1 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won")
                b1_div.style.backgroundColor = "red";
                b2_div.style.backgroundColor = "red";
                b3_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

                buttons = [b1, b2, b3, b4, b5, b6, b7, b8, b9];



            }

            if (col_2 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b2_div.style.backgroundColor = 'red';
                b5_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }


        }

        b3.onclick = function () {
            b3.remove();
            b3_div.innerHTML = "X";
            row_1 += 1;
            col_3 += 1;
            end_diagonal += 1;
            b3_div.style.backgroundColor = "white";
            b3_div.style.fontSize = 'large';
            b3_div.style.paddingTop = '2em';
            b3_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';



            if (row_1 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Row 1");
                b1_div.style.backgroundColor = "red";
                b2_div.style.backgroundColor = "red";
                b3_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

            }

            if (end_diagonal == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Start Diagonal");
                b3_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (col_3 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b3_div.style.backgroundColor = 'red';
                b6_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }

        }

        b4.onclick = function () {
            b4.remove();
            b4_div.innerHTML = "X";
            row_2 += 1;
            col_1 += 1;
            b4_div.style.backgroundColor = "white";
            b4_div.style.fontSize = 'large';
            b4_div.style.paddingTop = '2em';
            b4_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';

            if (row_2 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Row 2");
                b4_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b6_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";


            }


            if (col_1 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b1_div.style.backgroundColor = 'red';
                b4_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }
            // turn_of_player.style.width = '30%';
            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }


        }

        b5.onclick = function () {
            b5.remove();
            b5_div.innerHTML = "X";
            row_2 += 1;
            col_2 += 1;
            start_diagonal += 1;
            end_diagonal += 1;
            b5_div.style.backgroundColor = "white";
            b5_div.style.fontSize = 'large';
            b5_div.style.paddingTop = '2em';
            b5_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';

            if (col_2 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b2_div.style.backgroundColor = 'red';
                b5_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (row_2 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Row 2");
                b4_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b6_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

            }
            if (start_diagonal == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Start Diagonal");
                b1_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (end_diagonal == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Start Diagonal");
                b3_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }

            // turn_of_player.style.width = '30%';
        }

        b6.onclick = function () {
            b6.remove();
            b6_div.innerHTML = "X";
            row_2 += 1;
            col_3 += 1;
            b6_div.style.backgroundColor = "white";
            b6_div.style.fontSize = 'large';
            b6_div.style.paddingTop = '2em';
            b6_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';



            if (row_2 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Row 2");
                b4_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b6_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

            }

            if (col_3 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b3_div.style.backgroundColor = 'red';
                b6_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";


            }
            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }
            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }


        }

        b7.onclick = function () {
            b7.remove();
            b7_div.innerHTML = "X";
            row_3 += 1;
            col_1 += 1;
            end_diagonal += 1;
            b7_div.style.backgroundColor = "white";
            b7_div.style.fontSize = 'large';
            b7_div.style.paddingTop = '2em';
            b7_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';

            if (col_1 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b1_div.style.backgroundColor = 'red';
                b4_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (row_3 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by row 3")
                b7_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (end_diagonal == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Start Diagonal");
                b3_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }
            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }



        }

        b8.onclick = function () {
            b8.remove();
            b8_div.innerHTML = "X";
            row_3 += 1;
            col_2 += 1;
            b8_div.style.backgroundColor = "white";
            b8_div.style.fontSize = 'large';
            b8_div.style.paddingTop = '2em';
            b8_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';

            if (row_3 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by row 3")
                b7_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (col_2 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b2_div.style.backgroundColor = 'red';
                b5_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }



        }
        // turn_of_player.style.width = '30%';}}

        b9.onclick = function () {
            b9.remove();
            b9_div.innerHTML = "X";
            row_3 += 1;
            col_3 += 1;
            start_diagonal += 1;
            b9_div.style.backgroundColor = "white";
            b9_div.style.fontSize = 'large';
            b9_div.style.paddingTop = '2em';
            b9_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player O";
            turn_of_player.style.backgroundColor = 'yellow';


            if (row_3 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by row 3")
                b7_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (col_3 == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Col one");
                b3_div.style.backgroundColor = 'red';
                b6_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }



            if (start_diagonal == 3) {
                document.getElementById('x').remove();
                document.getElementById('o').remove();
                // alert("Player X won by Start Diagonal");
                b1_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }
            if (row_1 == 3 || row_2 == 3 || row_3 == 3 || col_1 == 3 || col_2 == 3 || col_3 == 3 || start_diagonal == 3 || end_diagonal == 3) {
                result.innerHTML = "Result : Player X won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }
          

  if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
  && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
   (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
    == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
    && (Col_1 == 2 || Col_1 == 1)
  && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
    (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
  {

    result.innerHTML = "Result : Game Tied ";
    turn_of_player.innerHTML = "Game Over";
    result.style.padding = '0.5em 0.05em';
    result.style.border = '2px solid chartreuse';

  }



        }


    }




    buttons = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

    const y_mover = document.getElementById("o").onclick = function () {



        b1.onclick = function () {
            b1.remove();
            b1_div.innerHTML = "O";
            Col_1 += 1;
            Row_1 += 1;
            Start_diagonal += 1;
            b1_div.style.backgroundColor = "white";
            b1_div.style.fontSize = 'large';
            b1_div.style.paddingTop = '2em';
            b1_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';
            // turn_of_player.style.width = '30%';

            if (Row_1 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won");
                b1_div.style.backgroundColor = "red";
                b2_div.style.backgroundColor = "red";
                b3_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";


            }

            if (Col_1 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b1_div.style.backgroundColor = 'red';
                b4_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Start_diagonal == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Start Diagonal");
                b1_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

            }
            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }

        }

        b2.onclick = function () {
            b2.remove();
            b2_div.innerHTML = "O";
            Row_1 += 1;
            Col_2 += 1;
            b2_div.style.backgroundColor = "white";
            b2_div.style.fontSize = 'large';
            b2_div.style.paddingTop = '2em';
            b2_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';
            // turn_of_player.style.width = '30%';

            if (Row_1 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player O won")


                b1_div.style.backgroundColor = "red";
                b2_div.style.backgroundColor = "red";
                b3_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player O won";
                turn_of_player.innerHTML = "Game Over";

                buttons = [b1, b2, b3, b4, b5, b6, b7, b8, b9];



            }

            if (Col_2 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b2_div.style.backgroundColor = 'red';
                b5_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }
            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }


        }

        b3.onclick = function () {
            b3.remove();
            b3_div.innerHTML = "O";
            Row_1 += 1;
            Col_3 += 1;
            End_diagonal += 1;
            b3_div.style.backgroundColor = "white";
            b3_div.style.fontSize = 'large';
            b3_div.style.paddingTop = '2em';
            b3_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';
            // turn_of_player.style.width = '30%';


            if (Row_1 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Row 1");
                b1_div.style.backgroundColor = "red";
                b2_div.style.backgroundColor = "red";
                b3_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

            }

            if (End_diagonal == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Start Diagonal");
                b3_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Col_3 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b3_div.style.backgroundColor = 'red';
                b6_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }

        }

        b4.onclick = function () {
            b4.remove();
            b4_div.innerHTML = "O";
            Row_2 += 1;
            Col_1 += 1;
            b4_div.style.backgroundColor = "white";
            b4_div.style.fontSize = 'large';
            b4_div.style.paddingTop = '2em';
            b4_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';
            // turn_of_player.style.width = '30%';

            if (Row_2 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Row 2");
                b4_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b6_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";


            }


            if (Col_1 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b1_div.style.backgroundColor = 'red';
                b4_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }
            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }

        }

        b5.onclick = function () {
            b5.remove();
            b5_div.innerHTML = "O";
            Row_2 += 1;
            Col_2 += 1;
            Start_diagonal += 1;
            End_diagonal += 1;
            b5_div.style.backgroundColor = "white";
            b5_div.style.fontSize = 'large';
            b5_div.style.paddingTop = '2em';
            b5_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';
            // turn_of_player.style.width = '30%';

            if (Col_2 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b2_div.style.backgroundColor = 'red';
                b5_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Row_2 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Row 2");
                b4_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b6_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

            }
            if (Start_diagonal == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Start Diagonal");
                b1_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (End_diagonal == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Start Diagonal");
                b3_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }


        }

        b6.onclick = function () {
            b6.remove();
            b6_div.innerHTML = "O";
            Row_2 += 1;
            Col_3 += 1;
            b6_div.style.backgroundColor = "white";
            b6_div.style.fontSize = 'large';
            b6_div.style.paddingTop = '2em';
            b6_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';

            if (Row_2 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Row 2");
                b4_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b6_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";

            }

            if (Col_3 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b3_div.style.backgroundColor = 'red';
                b6_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }

        }

        b7.onclick = function () {
            b7.remove();
            b7_div.innerHTML = "O";
            Row_3 += 1;
            Col_1 += 1;
            End_diagonal += 1;
            b7_div.style.backgroundColor = "white";
            b7_div.style.fontSize = 'large';
            b7_div.style.paddingTop = '2em';
            b7_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';
            // turn_of_player.style.width = '30%';

            if (Col_1 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b1_div.style.backgroundColor = 'red';
                b4_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";



            }

            if (Row_3 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by row 3")
                b7_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (End_diagonal == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Start Diagonal");
                b3_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b7_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }

        }

        b8.onclick = function () {
            b8.remove();
            b8_div.innerHTML = "O";
            Row_3 += 1;
            Col_2 += 1;
            b8_div.style.backgroundColor = "white";
            b8_div.style.fontSize = 'large';
            b8_div.style.paddingTop = '2em';
            b8_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';

            if (Row_3 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by row 3")
                b7_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Col_2 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b2_div.style.backgroundColor = 'red';
                b5_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }

        }
        // turn_of_player.style.width = '30%';}

        b9.onclick = function () {
            b9.remove();
            b9_div.innerHTML = "O";
            Row_3 += 1;
            Col_3 += 1;
            Start_diagonal += 1;
            b9_div.style.backgroundColor = "white";
            b9_div.style.fontSize = 'large';
            b9_div.style.paddingTop = '2em';
            b9_div.style.width = '33%';
            turn_of_player.innerHTML = "Next Turn : Player X";
            turn_of_player.style.backgroundColor = 'purple';
            // turn_of_player.style.width = '75%';

            if (Row_3 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by row 3")
                b7_div.style.backgroundColor = "red";
                b8_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }

            if (Col_3 == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Col one");
                b3_div.style.backgroundColor = 'red';
                b6_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";


            }



            if (Start_diagonal == 3) {
                document.getElementById('o').remove();
                document.getElementById('x').remove();
                // alert("Player X won by Start Diagonal");
                b1_div.style.backgroundColor = "red";
                b5_div.style.backgroundColor = "red";
                b9_div.style.backgroundColor = "red";
                // result.innerHTML = "Result of the Game: Player X won";
                turn_of_player.innerHTML = "Game Over";
            }
            if (Row_1 == 3 || Row_2 == 3 || Row_3 == 3 || Col_1 == 3 || Col_2 == 3 || Col_3 == 3 || Start_diagonal == 3 || End_diagonal == 3) {
                result.innerHTML = "Result : Player O won ";
                result.style.padding = '0.5em 0.05em';
                result.style.border = '2px solid chartreuse';
            }

            if((row_1 == 2 || row_1 == 1) && (row_2 == 2 || row_2 == 1) && (row_3 == 2 || row_3 == 1) && (col_1 == 2 || col_1 == 1)
            && (col_2 == 2 || col_2 == 1) && (col_3 == 2 || col_3 == 1) &&
             (start_diagonal == 2 || start_diagonal ==1) && (end_diagonal == 2 || end_diagonal
              == 1) && (Row_1 == 2 || Row_1 == 1) && (Row_2 == 2 || Row_2 == 1) && (Row_3 == 2 || Row_3 == 1) 
              && (Col_1 == 2 || Col_1 == 1)
            && (Col_2 == 2 || Col_2 == 1) && (Col_3 == 2 || Col_3 == 1) &&  
              (Start_diagonal == 2 || Start_diagonal ==1) && (End_diagonal == 2 || End_diagonal == 1))
            {
                turn_of_player.innerHTML = "Game Over";
              result.innerHTML = "Result : Game Tied ";
              result.style.padding = '0.5em 0.05em';
              result.style.border = '2px solid chartreuse';
          
            }


        }   



    }




}
