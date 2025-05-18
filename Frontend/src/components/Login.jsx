import React from "react";
import Authentication from "./Authentication";

const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-[url(https://static.vecteezy.com/system/resources/previews/025/871/495/non_2x/travel-destination-background-and-template-design-with-travel-destinations-and-famous-landmarks-and-attractions-for-tourism-let-s-go-travel-illustration-vector.jpg)] bg-cover bg-no-repeat py-5 flex items-center">
        <div className="w-[70%] h-[70vh] mx-auto flex gap-2  bg-white rounded-xl overflow-hidden">
          <div className="w-[50%]">
            <img
              src="https://freedesignfile.com/upload/2014/06/Blurred-summer-travel-creative-background-02.jpg"
              className="w-[100%] h-full object-cover"
            />
          </div>
          <div className="w-[55%] flex flex-col justify-start items-center p-3 ">
            
            <div className="w-[85%] m-auto my-4">
            <Authentication />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
