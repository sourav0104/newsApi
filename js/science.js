//jquery

$("#sportSection").hide();
$(".scie").on('click',function(){
    $("#sportSection").fadeIn(1000);
});

//main function
$(document).ready(function(){
    $('.scie').on('click',function(e){
        e.preventDefault();
        let scienceApi = "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=41df04ab827441629e87e893149c8a1f";

        window.fetch(scienceApi)
        .then((sciData)=>{
            sciData.json()
            .then(sci=>{
                let sciInfo = sci.articles;

                let output=[];
                for(let science of sciInfo){
                    output +=`
            <ul class = "list-group">
            <img src="${science.urlToImage}" />
            <a href="${science.url}" target="_blank">
            <li class="li">
            ${science.title}</li></a>
            </ul>
            
            `;
                }
                document.getElementById("sportSection").innerHTML = output;
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))

    });
});