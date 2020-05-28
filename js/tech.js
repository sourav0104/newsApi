//jquery

$("#sportSection").hide();
$(".tech").on('click',function(){
    $("#sportSection").fadeIn(1000);
});


//main function

$(document).ready(function(){
    $('.tech').on('click',function(e){
        e.preventDefault();
        let techApi = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=41df04ab827441629e87e893149c8a1f";

        window.fetch(techApi)
        .then((techData)=>{
            techData.json()
            .then(tec=>{
                let tecInfo = tec.articles;

                let output=[];
                for(let technology of tecInfo){
                    output +=`
            <ul class = "list-group">
            <img src="${technology.urlToImage}" />
            <a href="${technology.url}" target="_blank">
            <li class="li">
            ${technology.title}</li></a>
            </ul>
            
            `;
                }
                document.getElementById("sportSection").innerHTML = output;
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))

    })
})