<<<<<<< HEAD
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
  // console.log(callback); 
  const infoSettings = {
    url: API_URL+`${searchVal}`,
    // url: 'data.json',
=======
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
>>>>>>> 973cf4c8767be8b01598625e7021dfa26f6c4039
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
<<<<<<< HEAD
      $(this)
        .siblings('button')
        .trigger('blur');
=======
      // deslect button
      $(this)
        .siblings('button')
        .trigger('blur');
      //clear current result-list
>>>>>>> 973cf4c8767be8b01598625e7021dfa26f6c4039
      $('.jq-results')
        .html('');


        getResFromAPI(searchedTerm, displayAPISearchData);
    });
}

$(getInputText);