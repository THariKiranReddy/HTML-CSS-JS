let post_div = document.getElementById("post");
let getData=async()=>{
    try{
        let res=await fetch(`http://localhost:3000/posts`);
        let data=await res.json();
        appendData(data,post_div);
    }
    catch(e){
        console.log(e);
    }
}
function appendData(data,parent){
    data.forEach((e)=>{
        let div=document.createElement("div");
        let den=document.createElement("div");
        den.id="den";
        den.style="display:flex;"
        let image=document.createElement("img");
        image.src=e.images;
        image.style="display:block";
        let p=document.createElement("p");
        p.innerHTML=e.title;
        let comment=document.createElement("img");
        comment.id="comment";
        comment.src="https://tse2.mm.bing.net/th/id/OIP.Yluy23lF40SO9aZpzYmykgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
        comment.style="width:60px;height:40px";
         let share=document.createElement("img");
        share.id="share";
        share.src="https://tse3.mm.bing.net/th/id/OIP.iI1bkINfUWlbMs4SNRADJAAAAA?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3";
        share.style="width:60px;height:40px";
        let likeCount=0;
        let likeText=document.createElement("span");
        likeText.style="margin-top:10px";
        let like=document.createElement("img");
        like.onclick=()=>{
            console.log("clicked");
            likeCount++;
            likeText.textContent = `${likeCount}`;
        }
        like.id="likes_bt";
        like.style="width:60px;height:40px;cursor:pointer";
        like.src="https://icon-library.com/images/facebook-like-icon/facebook-like-icon-20.jpg";
        den.append(likeText,like,p,comment,share);
        div.append(image,den);
        parent.append(div);
   });
}
getData();