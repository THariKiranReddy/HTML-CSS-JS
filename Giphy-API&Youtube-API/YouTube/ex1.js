let APIKEY="AIzaSyC0AkmZ5ZroSK43aIo2ylmabo3zUr_uG6k";
const searchVideo=async()=>{
    try{
        let query=document.getElementById("search").value;
        let response=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${APIKEY}&q=${query}&type=video&maxResults=20`);
        let data=await response.json();
        localStorage.setItem("videos", JSON.stringify(data));
        appendingToDom(data.items);
        console.log(data.items);

    }
    catch(e){
        console.log(e);
    }
}
function appendingToDom(array){

    let search_content=document.getElementById("content");
    search_content.innerHTML="";
    array.forEach((element)=>{
        const { snippet,id:{videoId}}=element;
        let url = snippet.thumbnails.medium.url;
        let title=snippet.title;
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=url;
        let name=document.createElement("h4");
        name.innerText=title;
        name.style="width:250px;height:50px";
        div.append(image,name);
        search_content.append(div);
        let data={
            videoId:videoId,
            snippet
        };
        div.onclick=()=>{
           showVideo(data);
        }
        function showVideo(data){
            localStorage.setItem("clicked_video",JSON.stringify(data));
            window.location.href="./video.html";
        }


    });

}