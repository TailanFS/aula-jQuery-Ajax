
function consultaCEP(){
$.ajax({
    url: "https://viacep.com.br/ws/04890470/json",
    type: "GET", 
    sucess: function (response){
        console.log(response);
    }
})
}