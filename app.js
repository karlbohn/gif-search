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