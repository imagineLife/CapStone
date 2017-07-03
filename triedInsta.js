$(document).ready(function(){
  var hash = window.location.hash;
  var token = hash.split('=')[1];
  // console.log(token);
  
  $.ajax({
    // url: `https://api.instagram.com/v1/media/search?lat=41.3712&lng=73.4140&access_token=${token}&distance=100&callback=?`,
    // url:`https://api.instagram.com/v1/media/shortcode/D?access_token=${token}&callback=?`,
    url:`https://api.instagram.com/v1/tags/#nashville/media/recent?access_token=${token}&callback=?`,
    success:function(data){
      console.log(data)
    },
    dataType: "jsonp"
  })
});