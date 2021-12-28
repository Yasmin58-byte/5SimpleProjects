const button = document.querySelector("button")
var idiot = 'https://api.unsplash.com/photos/random?&client_id=ULr9E-FQ2tV3DzUyHNKfNVNUQ4nMf0k1qp9bmSP3Dpk'
button.addEventListener('click',function()
{fetch(idiot).then(function (response){
    return response.json();
}).then(function (data){
    document.getElementById("imageTodisplay").src = data.urls.regular
})
})