$(document).ready(function(){
  $('button')
    .on('click', function(ev){
      ev.preventDefault();
      var searchedTerm = $('.userInput').val();
      console.log(searchedTerm);

      $.ajax({
        url:`http://food2fork.com/api/search?key=fc12b89d965c74cc2142af6f95d1356a&q=${searchedTerm}`,
        success:function(data){
          console.log(data)
        },
        // Accept: 'application/json',
        dataType: "json"
      })
    })  

  
});