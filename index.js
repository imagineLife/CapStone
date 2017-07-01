function showAPIResults(result){
  let recipesVar = result.recipes;
  // console.log(result);
  return `
        <div class="box">
        
          <img src="${result.image_url}" alt="${result.title}">  
          <div class="boxDescription">
            <h3>${result.title}</h3>
            <p>From ${result.publisher}</p>
          </div>
        
        </div>
  `;
}

function displayAPISearchData(data){
  // console.log(data);
  const APIResults = data.recipes.map((item, index) => showAPIResults(item));
  
  $('.jq-results')
    .html(APIResults);

}

function getResFromAPI(searchVal, callback) {
  console.log(callback); 
  const infoSettings = {
    // url: API_URL,
    url: 'data.json',
    // data: {
    //   key:'AIzaSyA4gpg4ivnX-xgjSszRD4D-tF577ZxNCHM',
    //   q: `${searchVal}`
    // },
    dataType: 'json',
    type: 'GET',
    success: callback
  }

  $.ajax(infoSettings);
}

function getInputText(){
  $('button')
    .on('click', function(ev){
      ev.preventDefault();
      var searchedTerm = $('.userInput').val();
      // console.log(searchedTerm);
  
      //deselct input, clear input value
      $(this)
        .siblings('.userInput')
        .trigger('blur')
        .val('');
      // deslect button
      $(this)
        .siblings('button')
        .trigger('blur');
      //clear current result-list
      $('.jq-results')
        .html('');


        getResFromAPI(searchedTerm, displayAPISearchData);
    });
}

$(getInputText);