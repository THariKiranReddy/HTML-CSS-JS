let APIKEY="yEFnxpF9PdwkP9Q58OxCjyUIVsgUyzWL";
const details=async()=>{
    let id=JSON.parse(localStorage.getItem("details"));
    try{
        let response=await fetch(`https://api.giphy.com/v1/gifs/${id}?&api_key=${APIKEY}`);
        let data=await response.json();
        appendingToDom(data.data);
    }
    catch(e){
        console.log(e);
    }

}
details();
function appendingToDom(data){
     let details=document.querySelector("#details");
   let  image=document.createElement("img");
   image.src=data.images.downsized.url;
   details.append(image);

}
