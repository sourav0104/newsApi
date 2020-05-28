//jquery

$("#sportSection").hide();
$(".sports").on('click',function(){
    $("#sportSection").fadeIn(1000);
});


//main function

$(document).ready(function(){
    $('.sports').on('click',function(e){
        e.preventDefault();
        let sportsApi = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=41df04ab827441629e87e893149c8a1f";

        window.fetch(sportsApi)
        .then((sportData)=>{
            sportData.json()
            .then(sports=>{
                let sportInfo = sports.articles;

                let output=[];
                for(let sport of sportInfo){
                    output +=`
            <ul class = "list-group">
            <img src="${sport.urlToImage}" />
            <a href="${sport.url}" target="_blank">
            <li class="li">
            ${sport.title}</li></a>
            </ul>
            
            `;
                }
                document.getElementById("sportSection").innerHTML = output;
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))

    });
});