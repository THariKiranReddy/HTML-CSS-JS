let APIKEY="yEFnxpF9PdwkP9Q58OxCjyUIVsgUyzWL";
const main = async () =>{
    try{
        let response=await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`);
        let data=await response.json();
        appendingToDom(data.data);

    }
    catch(e){
        console.log(e);
    }
}
main();
function appendingToDom(data){
    let giphy=document.getElementById("gif");
    giphy.innerHTML="";
    let sticker=document.getElementById("stickers");
    sticker.innerHTML="";
    let main=document.getElementById("main");
    main.innerHTML="";
    data.forEach((e)=>{
        let image=document.createElement("img");
        image.src=  e.images.downsized.url;
        image.addEventListener("click",()=>{
            details_gif(e.id);
        })
        main.append(image);
});
}
const details_gif=(id)=>{
    localStorage.setItem("details",JSON.stringify(id));
    window.location.href="./giphy.html";
}
const search=async ()=>{
    let query=document.getElementById("search").value;
    if(query===""){
        alert("please enter the query to search");
    }
    else{
        try{
            let response=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}`);
            let data=await response.json();
            appendingToDom(data.data);

        }
        catch(e){
            console.log(e);
        }
    }
}
search();
const sticker=async()=>{
    let response=await fetch(`https://api.giphy.com/v1/stickers/trending?api_key=${APIKEY}`);
    let data=await response.json();
    appendingToStickers(data.data);

}
function appendingToStickers(data){
    let sticker=document.getElementById("stickers");
    sticker.innerHTML="";
    data.forEach((e)=>{
       let image=document.createElement("img");
       image.src=e.images.original.url;
       sticker.append(image);
    });

}
sticker();