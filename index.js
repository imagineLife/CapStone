const API_URL = `http://food2fork.com/api/search?key=fc12b89d965c74cc2142af6f95d1356a&q=`
function displayAPISearchData(data){
    let recipesVar = data.recipes;
    let APIResults = "";
    
    for(i=0; i<recipesVar.length; i++){
        const rowBeginning = `<div class="row">`;
        const rowEnding = `</div>`;
        let boxItem = `<div class="box col-4">
                <a href="${recipesVar[i].source_url}" target="_blank">
                  <img src="${recipesVar[i].image_url}" alt="${recipesVar[i].title}">  
                  <div class="boxDescription">
                    <h3>${recipesVar[i].title}</h3>
                    <p>From ${recipesVar[i].publisher}</p>
                  </div>
                </a>
              </div>`;

        if(i == 0){
          APIResults = rowBeginning + boxItem;
        }else if(i % 3 == 2){
            APIResults += boxItem + rowEnding + rowBeginning;
        }else{
          APIResults += boxItem;
        }
    }
        console.log(APIResults);
        $('.jq-results')
          .html(APIResults);
}

function getResFromAPI(searchVal, callback) {
  const infoSettings = {
    url: API_URL+`${searchVal}`,
    // url: 'data.json',
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
      $(this)
        .siblings('button')
        .trigger('blur');
      $('.jq-results')
        .html('');


        getResFromAPI(searchedTerm, displayAPISearchData);
    });
}

$(getInputText);