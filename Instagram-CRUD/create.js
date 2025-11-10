let APIKEY="1682e8c65ee61a5a599cf34b8f3bded1";
let button_id=document.getElementById("submit");
button_id.disabled=true;
let images;
let update_img_url = "";
let addPost=async()=>{
    let title=document.getElementById("title").value;
    let send_this_data={
        title,
        images
    };
    try{
        let res=await fetch(`http://localhost:3000/posts`,
            {
                method:"POST",
                body:JSON.stringify(send_this_data),
                headers:
                {
                    "Content-Type":"application/json",
                }

            }
        );
        let data=await res.json();
        // console.log(data);
    }
    catch(e){
        console.log(e);
    }
}
let handleChange=async(event)=>{
    let file=document.getElementById("image");
    let form=new FormData();
    form.append("image",file.files[0]);
   // console.log(file.files[0]);
   try{
    let res=await fetch(`https://api.imgbb.com/1/upload?key=${APIKEY}`,
        {
            method:"POST",
            body:form,
        }
    );
    let data=await res.json();
    images=data.data.display_url;
   }
   catch(e){
    console.log(e,"file not retrieved properly");
   }
   button_id.disabled=false;

}
// delete post
let deletePost=async()=>{
     let id = document.getElementById("delete_id").value;
    try{
        let res=await fetch(`http://localhost:3000/posts/${id}`,
            {
                method:"DELETE",
                headers:
                {
                    "Content-Type":"application/json",
                }

            }
        );
        let data=await res.json();
        // console.log(data);
    }
    catch(e){
        console.log(e);
    }
}
// update post
let update=async()=>{
    console.log(update_img_url);
    let id=document.getElementById("update_id").value;
    let title=document.getElementById("update_title").value;
    let send_this_data={
        title,
        images:update_img_url,
    };
    try{
        let res=await fetch(`http://localhost:3000/posts/${id}`,
            {
                method:"PATCH",
                body:JSON.stringify(send_this_data),
                headers:
                {
                    "Content-Type":"application/json",
                }

            }
        );
        let data=await res.json();
        // console.log(data);
    }
    catch(e){
        console.log(e);
    }
}
let bt=document.getElementById("update");
bt.disabled=true;
let handleUpdatedChange=async(event)=>{
    let file=document.getElementById("update_image").files[0];
    let form=new FormData();
    form.append("image",file);
    try{
        let res=await fetch(`https://api.imgbb.com/1/upload?key=${APIKEY}`,{
            method:"POST",
            body:form,
        });
        let data=await res.json();
        console.log(data);
        update_img_url=data.data.display_url;
        bt.disabled=false;

    }
    catch(e){
        console.log(e);
    }
}
let replacePost=async()=>{
    let id=document.getElementById("replace_id").value;
    let title=document.getElementById("replace_title").value;

    let send_this_data={
        title,
    };
    try{
        let res=await fetch(`http://localhost:3000/posts/${id}`,
            {
                method:"PUT",
                body:JSON.stringify(send_this_data),
                headers:
                {
                    "Content-Type":"application/json",
                }

            }
        );
        let data=await res.json();
        // console.log(data);
    }
    catch(e){
        console.log(e);
    }
}

