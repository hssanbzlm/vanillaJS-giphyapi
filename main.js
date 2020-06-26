var input = document.querySelector("input").value;
var button = document.querySelector("button");



button.addEventListener("click", function () {

    var input = document.querySelector("input").value;
    callApi(input)

})

document.querySelector("input").addEventListener("keyup", function (e) {
    var input = document.querySelector("input").value;
    if (e.which === 13) { //enter key code is 13
        callApi(input)

    }


})

function callApi(input) {
    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=R73JSDFTivlxXOAkYeaHGfRzuowmSL9j";
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function (e) {
        var data = e.target.response;
        pushToDom(data);

    });
}

function pushToDom(input) {
    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");
    container.innerHTML = ""

    imageUrls.forEach(function (image) {

        container.innerHTML += "<img src=\"" + image.url + "\"class=\"container-image\">";

    })


}