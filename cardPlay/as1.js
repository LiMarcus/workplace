var cpCard = document.getElementById('Computercards');
var pyCard = document.getElementById('Playercards');
var res = document.getElementById('result');
var sco = document.getElementById('score');


var dealBtn = document.getElementById('dealBtn');
var showBtn = document.getElementById('resultBtn');
var scoreBtn = document.getElementById('scoreBtn');

var remainCardNum = null;
var cpDisplay = null;
var pyDisplay = null;
var sum1 = 0;
var sum2 = 0;
var winTime1 = 0;
var winTime2 = 0;
var verify = null;

var resetDisplay = function(){
  cpCard.innerHTML = '';
  pyCard.innerHTML = '';
  res.innerHTML = '';
  sco.innerHTML = '';
}

var initCards = function(){
  var cardDeck = [];
  var categray = [ 'club ', 'diamond ', 'heart ', 'spade '];    // 4 card categray
  for(var i = 1; i < 14; i++){            // get 1~13 and every number has 4 categray, I store them nearly in array
    
    var cc = i;

    switch( i ){              // give 1, 11, 12, 13 different name
      case 1:
        cc = 'A';
        break;
      case 11:
        cc = 'J';
        break;
      case 12:
        cc = 'Q';
        break;
      case 13:
        cc = 'K';
        break;
    }
    var getName = categray.map(item => item + cc);     // use map return an array with 4 categray card name about one single number
    cardDeck = cardDeck.concat(getName);               //add new array in old array
  }
  remainCardNum = 52;    //initialize the card number in deck
  return cardDeck;
}

var shuffle = function(array) {
    var i = 0;
    var j = 0;
    var temp = null;
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };


var drawCards = function(array){
  verify  = 1;       // use to prevent get more than once win result by click result button
  var ar = [array[remainCardNum-1], array[remainCardNum-2], array[remainCardNum-3]]
  remainCardNum = remainCardNum -3;
  return ar;
}

var showCards = function(){
  sum1 = 0;
  sum2 = 0;
  for(var i = 0; i < 3; i++ ){
    var check = cpDisplay[i];
    var len = check.length;
    var newchar = check.charAt(len-1);
    switch(newchar){
      case '0':
      newchar = 10;
      break;
      case 'A':
      newchar = 1;
      break;
      case 'J':
      newchar = 11;
      break;
      case 'Q':
      newchar = 12;
      break;
      case 'K':
      newchar = 13;
      break;
    }
    newchar = parseInt(newchar);
    sum1 = sum1 + newchar;
  }

  for(var i = 0; i < 3; i++ ){
    var check = pyDisplay[i];
    var len = check.length;
    var newchar = check.charAt(len-1);
    switch(newchar){
      case '0':
      newchar = 10;
      break;
      case 'A':
      newchar = 1;
      break;
      case 'J':
      newchar = 11;
      break;
      case 'Q':
      newchar = 12;
      break;
      case 'K':
      newchar = 13;
      break;
    }
    newchar = parseInt(newchar);
    sum2 = sum2 + newchar;
  }

  cpCard.innerHTML = '<H2>Computer Card</H2>'+
                      '<TABLE border = "1" width = 500xp><TR><TH>Card One</TH><TH>Card Two</TH><TH>Card Three</TH><TH>Points</H></TR>' +
                      '<TR><TD>'+ cpDisplay[0] +'</TD><TD>'+ cpDisplay[1] +'</TD><TD>'+ cpDisplay[2] +'</TD><TD>'+ sum1 +'</TD></TR></TABLE>';
  pyCard.innerHTML = '<H2>Player Card</H2>'+
                      '<TABLE border = "1" width = 500xp><TR><TH>Card One</TH><TH>Card Two</TH><TH>Card Three</TH><TH>Points</TH></TR>' +
                      '<TR><TD>'+ pyDisplay[0] +'</TD><TD>'+ pyDisplay[1] +'</TD><TD>'+ pyDisplay[2] +'</TD><TD>'+ sum2 +'</TD></TR></TABLE>';
}

var showResult = function(){
  var winName  = null;
  if(sum1 > sum2){
    winName = 'Computer';
    if(verify == 1){
      winTime1++;
    }
  }else{
    winName = 'Player';
    if(verify == 1){
      winTime2++;
    }
  }
  if(sum1 == sum2){
    winName = 'None';
  }

  res.innerHTML ='<H2>Result</H2>'+
                  '<TABLE border = "1" width = 500xp><TR><TH>Computer Points</TH><TH>Player Points</TH><TH>Winner Name</TH></TR>'+
                  '<TR><TD>'+ sum1 +'</TD><TD>'+ sum2 +'</TD><TD>'+ winName +'</TD></TR></TABLE>';
  verify = 0;
}





dealBtn.addEventListener('click', (event)=>{
  resetDisplay();
  var c = initCards();
  var v = shuffle(c);
  cpDisplay = drawCards(v);
  pyDisplay = drawCards(v);
});

showBtn.addEventListener('click', (event)=>{
  resetDisplay();
  showCards();
  showResult();
});

scoreBtn.addEventListener('click', (event)=>{
  resetDisplay();
  sco.innerHTML = '<p>Computer Wins:   '+ winTime1 +'</p></br>'
                  +'<p>Player Wins:   '+winTime2+'</p>';
});