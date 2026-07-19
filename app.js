$(document).ready(function(){
    $(document).on("keypress", function(e){
        if (e.which == 13) {
           let url = `https://demoapi-nu.vercel.app/api/news`;
           async function mynews() {
                let response = await fetch(url);
                let data = await response.json();
                console.log(data);
               
           } 
           mynews();
        }
    });
});