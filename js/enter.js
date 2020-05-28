//jquery

$("#sportSection").hide();
$(".enter").on('click',function(){
    $("#sportSection").fadeIn(1000);
});

//main function
$(document).ready(function(){
    $('.enter').on('click',function(e){
        e.preventDefault();
        let entertainmentApi = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=41df04ab827441629e87e893149c8a1f";

        window.fetch(entertainmentApi)
        .then((enterData)=>{
            enterData.json()
            .then(ent=>{
                let entInfo = ent.articles;

                let output=[];
                for(let entertainment of entInfo){
                    output +=`
            <ul class = "list-group">
            <img src="${entertainment.urlToImage}" />
            <a href="${entertainment.url}" target="_blank">
            <li class="li">
            ${entertainment.title}</li></a>
            </ul>
            
            `;
                }
                document.getElementById("sportSection").innerHTML = output;
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))

    });
});