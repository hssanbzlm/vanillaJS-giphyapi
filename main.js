var input = document.querySelector("input").value;
var button = document.querySelector("button");



button.addEventListener("click",function(){

    var input = document.querySelector("input").value;
    pushToDom(input);


})

function pushToDom(input)
{
    document.getElementsByClassName("js-container")[0].innerHTML=input;

}