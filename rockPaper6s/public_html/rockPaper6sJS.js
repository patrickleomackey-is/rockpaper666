/* Patrick Mackey CIS 119 Prof. K. Miller
 */
let tie = [], cpWins=[], Uwins=[];radioButtons = [];


function cpThrow(){ 
    
    
    Random = Number(Math.floor(Math.random()*3));
    
    if (Random === 0){
        document.write("It threw a rock!");
    } else if (Random === 1){
        document.write("It threw a paper ");}
    else if(Random === 2){
        document.write("It threw a scissors");}
    }
    
    

document.addEventListener("submit",cpThrow());

//let userThrow = document.getElementsByTagName('input').checked;
 // document.write("   " + userThrow);











//document.getElementsByTagName('form').addEventListener('click',check());







//function compare(){
     
function Validate(){
    
    var radioButtons = document.getElementsByName("userThrow").checked;
    var i = 0;
    for (i=0;i < radioButtons.length;i++){
        if (radioButtons[i].checked === true){
           Athrow = Number(radioButtons[i].value);
       }
  
   
    if ((Athrow === 0)&&(Random === '0'))
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
document.write(''+cpWins+" "+ Uwins + " "+ tie);

    