console.log("Let's get this party started!");



function newGif(response){

    let numResults = response.data.length;
    let randomIdx = Math.floor(Math.random() * numResults);

    let newImg = $(document.createElement('img'))
    newImg.attr("src", response.data[randomIdx].images.original.url)
    newImg.attr("class", "gif")
    $('#output').append(newImg)

}

$('form').on("submit", async function(e){
    e.preventDefault();
    //create img, set source to searchGif() response, append to body
    let $searchTerm = $('input').val()
    let response = await axios.get('http://api.giphy.com/v1/gifs/search', { params : {
        api_key : 'wQU5a1KBrWTTy732dEaSpqUydu01baaQ',
        q: $searchTerm
    }})
    newGif(response.data);
    $('input').val('');
})

$('#delete').on("click", function(){
    $('div').empty();
})
//GIF URL - api.giphy.com/v1/gifs/search
// Params- api_key: string(required) || q: string(required)
//API Key - wQU5a1KBrWTTy732dEaSpqUydu01baaQ