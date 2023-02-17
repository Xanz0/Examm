function findElement(element,parent=document){
    return parent.querySelector(element);
}


const loginForm=findElement(".auth-form");
const emailIn=findElement(".email");
const passwordIn=findElement(".password");
const errorText=findElement("#error-text");
const btnSub=findElement(".submit")

const errorTextt = (element,text)=>{

    element.textContent= text;
     element.style.display='block';
    const timer=setTimeout(()=>{
        element.style.display="none";

        clearTimeout();
    },4000);

}


loginForm.addEventListener("submit",(evt)=>{
    evt.preventDefault();

     if(passwordIn.value.length<6){
         
    errorTextt(errorText,"Password must not be less than 6 characters");

    return;
 }

     if(emailIn.value.length==0){
         
         errorTextt(errorText,"Please input Username");

    return;
     }

     const userrr={
    
        // "email": "eve.holt@reqres.in",
        // "password": "cityslicka",
        
         email:emailIn.value,
         password:passwordIn.value,
      };
    
    
     fetch('https://reqres.in/api/login',{
                 method:'POST',
                 headers:{"Content-Type":"application/json"},
                 body:JSON.stringify(userrr),
             })
                .then((res)=>{
                    if(res.status===400){
                        throw new Error("User not found");
                    }
                   return res.json()
                })
                 .then((data)=>{
                    console.log(data);

                    if(data.token){
                        const token =data.token;
                        localStorage.setItem("token",token);
                        window.location.href="http://127.0.0.1:5501/index.html";
                    }
                 })
                 .catch((err)=>{
                    errorTextt(errorText,err);
                 });



})
