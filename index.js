
//5. SEt API URL
const token = '6492982.38a1db2.ecc895d23d264b6e93d615e88cf4b2b7';
const API_URL = "https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=6492982.38a1db2.ecc895d23d264b6e93d615e88cf4b2b7";

//set access_token

//4. build the get-results-object
function getResFromAPI(searchVal, callback) {
  const infoSettings = {
    url: API_URL,
    cache:false,
    dataType: 'json',
    type: 'GET',
    success: callback
  }

  $.ajax(infoSettings);
}



//6. Get API results from API
function showAPIResults(result){
  console.log(result);
  return `
    <a href="https://www.youtube.com/embed/${result.id.videoId}">
      <img src="${result.snippet.thumbnails.medium.url}">
      <figcaption>${result.snippet.title}</figcaption>
    </a>
  `;
}

//5. show the API resultData
function showAPISearchData(data){
  // console.log(data);
  const APIResults = data.items.map((item, index) => showAPIResults(item));
  $('.jq-results')
    .html(APIResults);

}

//2. Build the input-text-getter function
function getInputText() {
  $('.jq-form').submit(event => {
        event.preventDefault();
        const inputItem = $(this).find('.jq-inputItem');
        const inputVal = inputItem.val();

        //clears the form input
        inputItem.val("");

//3.take the input & send through API
        getResFromAPI(inputVal, showAPISearchData);

  });
}

//1. Grab the input text
$(getInputText);