/* Patrick Mackey CIS 119 Prof. K. Miller
 */
let tie = [], cpWins=[], Uwins=[];radioButtons = [];

let rock = 0;
let paper = 1;
let scissors =2;
let Random = Number(Math.floor(Math.random()*3));
document.write('<br>'+Random);

//let userThrow = document.getElementsByTagName('input').checked;
 // document.write("   " + userThrow);











//document.getElementsByTagName('form').addEventListener('click',check());







//function compare(){
     
function Validate(){
    
    var radioButtons = document.getElementsByName("userThrow").checked;
    var i = 0;
    while (i < radioButtons.length){
        if(radioButtons[i].checked === true){
           Athrow = Number(radioButtons[i].value);
       }
    ++i;
   
    if ((Athrow === 0)&&(Random === 0))
    {alert ("you tied");
        tie++;} 
     if ((Athrow === 0)&&(Random === '2'))
    {alert("you win");Uwins++;} 
     if ((Athrow === 0)&&(Random === '1'))
    {cpWins++;}
     if ((Athrow === 1)&&(Random === '1'))
    {tie++;}
     if ((Athrow === 1)&&(Random === '0'))
    {Uwins++;}
    if ((Athrow === 1)&&(Random === '2'))
    {cpWins++;}
    if ((Athrow === 2)&&(Random === '2'))
    {tie++;}
     if ((Athrow === 2)&&(Random === '1'))
    {Uwins++;}
     if ((Athrow === 2)&&(Random ==='0'))
    {cpWins++;}
               }        
           }        


