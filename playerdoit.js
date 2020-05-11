jQuery["postJSON"] = function(url,data,callback) {
    $.ajax({
      url:url,
      type:'POST',
      data:JSON.stringify(data),
      contentType:'application/json',
      dataType:'json',
      success: callback
    });
  };

function setUp() {
    $('#next').click(submitGame);
    $('#div2').hide();}

var title,gameid;


//...............................post game on 1 server/..............
    function postSubmitted(){
     $.getJSON('http://cmsc106.net/Adventure/games?group=doomsday',showResponses);
    }

    function showResponses(data) {
    var length=data.length;
    for (var i = 0; i < length; i++) {
      if (data[i].title==title)
      gameid=data[i].id;
        }
          clickbutton();    }

    function submitGame(){
      title = $('#gametitle').val();
      var start= $('#startlocation').val();
      var toPost = {title:title, start:start};
    $.postJSON('http://cmsc106.net/Adventure/games?group=doomsday',toPost,postSubmitted);
    }




//.......................playerdoit..........................

function postSubmitted1(){
 $.getJSON('http://cmsc106.net/Adventure/scenes?game='+gameid,showResponses1);
}

function showResponses1() {

}

function submit(){
  var narrative = $('#playernarrative').val();
  var option= $('#playeroptions').val();
  var destination = $('#playerdestinations').val();
  var location= $('#playerlocation').val();
  var toPost = {game:gameid, location:location, narrative:narrative, options:option, destinations:destination};
  $.postJSON('http://cmsc106.net/Adventure/scenes?game='+gameid,toPost,postSubmitted1);
}

function clickbutton(){
  $('#div2').show();
  $('#div1').hide();
  $('#done').click(submit);
}


$(document).ready(setUp);
