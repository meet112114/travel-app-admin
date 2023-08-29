import  { useState } from "react";
import { useForm } from "react-hook-form";


function App() {  
  const { register, handleSubmit } = useForm();
  const onSubmit = async (place) => {
    
    const { title , category , description , rating , location , image , images} = place;
    
    const res = await fetch("http://localhost:5000/upload" , {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({

           title , category , description , rating , location , image , images

        })
    });

    const data = await res.json();

    if(res.status === 422 || !data ){
        window.alert("INVALID REGISTRATION");
        console.log("invalid registratoion");
    }else {
        window.alert("successful REGISTRATION");
        console.log("successful registratoion");
        
    }
   

  }

  




  return (
    <>
              <form onSubmit={handleSubmit(onSubmit)} method="POST" className="register-form" id="register-form">                            
                            <div className="form-group">
                                <input  {...register("title")} type="text"   placeholder="title"     />
                            </div>
                            <div className="form-group">                               
                                <input  {...register("category")} type="text"   placeholder="category"   />
                            </div>
                            <div className="form-group">                               
                                <input  {...register("description")} type="text" placeholder="description "   />
                            </div>
                            <div className="form-group">                               
                                <input  {...register("rating")} type="number"   placeholder="Raing(1-10)"   />
                            </div>                           
                            <div className="form-group">                               
                                <input  {...register("location")} type="text"   placeholder="location"    />
                            </div> 
                            <div className="form-group">                               
                                <input  {...register("image")} type="text"  placeholder="main img url"   />
                            </div>   
                            <div className="form-group">                               
                                <input  {...register("images")} type="text"   placeholder="Imgs url"   />
                            </div>                                                        
                            <div className="form-group form-button">
                                <input type="submit" id="signup" className="form-submit" />
                            </div>
                        </form>                    
                      </>
  );
}
export default App;

