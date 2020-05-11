var name, namelist;
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

  function postPlayername(){  //go find and post subitted info
   $.getJSON('http://cmsc106.net/Adventure/players?group=doomsday',checkRepeatName);
    window.location = 'LastDay.html'
}

  function checkRepeatName(data) {
  namelist=data;
  var length=namelist.length;
//  for(n=0;n<length;n++)
//  { if(name==namelist[n].name)
//     {alert("Repeated player name! Please try other names.");
//     break; }}
}

  function submitPlayerName(){  //go and submit
  name = $('#name').val();
  var toPost = {name:name,location:"room", game:344};
  $.postJSON('http://cmsc106.net/Adventure/players?group=doomsday',toPost,postPlayername);
}//It doesnt work!!!!
  //  $('#signInButton').click(function(){ window.location = 'LastDay.html'});


 function setUp() {
  $('#signInButton').click(submitPlayerName);
  $.getJSON('http://cmsc106.net/Adventure/players?group=doomsday',checkRepeatName);}

$(document).ready(setUp);
