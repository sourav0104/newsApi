
//jquery
$("#sportSection").hide();
$(".busi").on('click',function(){
    $("#sportSection").fadeIn(1000);
});



//main function

$(document).ready(function(){
    $('.busi').on('click',function(e){
        e.preventDefault();
        let businessApi = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=41df04ab827441629e87e893149c8a1f";

        window.fetch(businessApi)
        .then((busiData)=>{
            busiData.json()
            .then(busii=>{
                let busiInfo = busii.articles;

                let output=[];
                for(let business of busiInfo){
                    output +=`
            <ul class = "list-group">
            <img src="${business.urlToImage}" />
            <a href="${business.url}" target="_blank">
            <li class="li">
            ${business.title}</li></a>
            </ul>
            
            `;
                }
                document.getElementById("sportSection").innerHTML = output;
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))

    });
});