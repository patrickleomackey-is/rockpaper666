/* Patrick Mackey CIS 119 Prof. K. Miller
 */
/* global aThrow */
let tie = [], cpWins=[], Uwins=[];


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



document.write(document.getElementsByType('radio').value);



//function compare(){
     
function Validate(){
    
    var radioButtons = document.getElementsByTagName("input");
    var Athrow;
    for(i=0;i < radioButtons.length;++i){
       if (radioButtons[i].checked === 'true'){
        Athrow = radioButtons[i];
       }

    if ((Athrow === 0 && Random === 0))
    {document.write("you tied");
        tie++;} 
      if ((Athrow === 0 && Random === 2))
    {document.write("you win");Uwins++;} 
    if ((Athrow === 0 && Random === 1))
    {document.write("you lost"+ "1");cpWins++;}
    if ((Athrow === 1 && Random === 1))
    {document.write('you tied');tie++;}
   if ((Athrow === 1 && Random === 0))
    {document.write("you won");Uwins++;}
    if ((Athrow === 1 && Random === 2))
    {document.write('you lost'+"2");cpWins++;}
    if ((Athrow === 2 && Random === 2))
    {document.write("you tied");tie++;}
     if ((Athrow === 2 && Random === 1))
    {document.write("you won");Uwins++;}
  if((Athrow === 2 && Random === 0));
    {document.write(Athrow+"you lost"+'3');cpWins++;}
               }        
           }        


    function capture(){
        throws = document.getElementsByName('userThrow').checked.value;
        document.write(''+ throws);
    }
