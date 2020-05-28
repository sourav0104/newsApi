//jquery

$("#sportSection").hide();
$(".health").on('click',function(){
    $("#sportSection").fadeIn(1000);
});


//main function

$(document).ready(function(){
    $('.health').on('click',function(e){
        e.preventDefault();
        let healthApi ="http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=41df04ab827441629e87e893149c8a1f";

        window.fetch(healthApi)
        .then((healthData)=>{
            healthData.json()
            .then(hel=>{
                let helInfo = hel.articles;

                let output=[];
                for(let healths of helInfo){
                    output +=`
            <ul class = "list-group">
            <img src="${healths.urlToImage}" />
            <a href="${healths.url}" target="_blank">
            <li class="li">
            ${healths.title}</li></a>
            </ul>
            
            `;
                }
                document.getElementById("sportSection").innerHTML = output;
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))

    });
});