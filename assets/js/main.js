// Change this to be your own clientId from https://www.twitch.tv/kraken/oauth2/clients/new
var clientId = "1ibztilb78dmruu6ide6kwkg6csc598";

$.getJSON( "https://api.twitch.tv/kraken/streams/straymav?client_id="+ clientId + "callback=?", function(response) {
  if (response.stream){
    $('.viewers span').text(response.stream.viewers);
    $('.intro iframe').removeClass("hidden");
    $('.intro-text').addClass('hidden');
  }else{
    $('.viewers span').text("0");
  }
});

$.getJSON( "https://api.twitch.tv/kraken/channels/straymav/follows?client_id="+ clientId + "callback=?", function(response) {
  $('.followers span').text(response["_total"]);
});
