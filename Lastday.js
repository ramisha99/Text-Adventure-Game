var arraylist,games;
var destination1,destination2,firstScene;
var currentScene,gameid;

//-----------------------for game list-----------------------
function gamelist(){
  $.getJSON('http://cmsc106.net/Adventure/games?group=doomsday',getGames);
}

function chooseGame() {
      var buttontext=$(this).text();
      var i=0;
      var length=games.length;
      for (i=0; i < length; i++){
       if(buttontext==games[i].title){
       gameid=games[i].id;
       currentScene=games[i].start;}
    }
    startscene();
    $('#div1').hide();
    }

function getGames(data){
  games = data;
  var length=games.length;
  for (n=0; n < length; n++){
    var newButton = $('<button>');
    newButton.text(games[n].title);
    newButton.click(chooseGame);
    $('#button').append(newButton);
  }
    }


//--------------------------for game list-------------------------



function startscene(){
   $.getJSON('http://cmsc106.net/Adventure/scenes?game='+gameid,gostart);
   $('#div2').show();
}

function findScene() {
  var n, length;
  length=arraylist.length;
  for(n=0;n<length;n++){
    if(arraylist[n].location==currentScene)
      return arraylist[n];}
}

function setupButtons() {
firstScene = findScene();
var narrativejs=firstScene.narrative;
$('#narrative').text(narrativejs);

var allText=firstScene.options.split(',');
$('#button1').text(allText[0]);
$('#button2').text(allText[1]);

var allDestinationText=firstScene.destinations.split(',');
destination1=allDestinationText[0].trim();
destination2=allDestinationText[1].trim();
}

function gostart(scenes){
arraylist = scenes;
setupButtons();
}

function jumpnextScene1(){
  if(destination1=="end")
    {backtomenu();}
  var n, length;
 length=arraylist.length;
  for(n=0;n<length;n++){
    if(arraylist[n].location==destination1)
      currentScene=destination1;  }
  setupButtons();
}

function jumpnextScene2(){
if(destination2=="end")
  {backtomenu();}
  var n, length;
 length=arraylist.length;
  for(n=0;n<length;n++){
    if(arraylist[n].location==destination2)
      currentScene=destination2;   }
   setupButtons();
}

function backtomenu(){
  alert(" How is your last day going? ");
  $('#narrative').hide();
  $('#button1').hide();
  $('#button2').hide();
  $('#backmenu').show();
}

function setUp() {
 $('#button1').click(jumpnextScene1);
 $('#button2').click(jumpnextScene2);
 $('#backmenu').hide();
  $('#div2').hide();
 gamelist();}

$(document).ready(setUp);
