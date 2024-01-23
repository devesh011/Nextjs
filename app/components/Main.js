import React from "react";

function Main () {
    return (
        <>
        <div>
        <h2 className="text-5xl font-bold mt-3 mb-3 pl-24">Cappadocia St Nino's Garden</h2>
      <h1 className="text-lg font-semibold mb-0 pl-28">A blissful escape into nature's embrace</h1>
      <div className="container mx-auto mt-8 flex items-center">
        {/* Image */}
        <div className='first'>
          <img width={1300} height={200} src="/first.jpg" alt="lol1" />
        </div>
        {/* Heading */}
         <div className="ml-4 flex flex-col w-300 h-100 border border-green-300 "> 
          <h2 className="text-lg font-semibold text-center py-5
           bg-[#27F498]">Details</h2>
       
          {/* Input Fields */}
          <div className="w-full p-5 bg-[#3B4E55]">
          <form>
          <div className="ml-4 space-y-2 flex flex-wrap">
            <div className="flex flex-col w-1/2 pr-2 pt-2">
              <label htmlFor="firstName" className="text-white">First Name:</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col w-1/2 pl-2 pt-0">
              <label htmlFor="lastName" className="text-white">Last Name:</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col w-full mt-2">
              <label htmlFor="mobileNumber" className="text-white">Mobile Number:</label>
              <input
                type="tel"
                id="mobileNumber"
                placeholder="Mobile Number"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col w-full mt-2">
              <label htmlFor="email" className="text-white">Email ID:</label>
              <input
                type="email"
                id="email"
                placeholder="Email ID"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col w-full mt-2">
              <label htmlFor="range" className="text-white">Price Range:</label>
              <input
                type="range"
                id="range"
                min="0"
                max="100"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          </form>

          {/* Submit Button */}
          <div className='flex flex-row items-center justify-center'>
          <button className="bg-[#27F498] text-white  w-[30%] py-2   hover:bg-green-600 focus:outline-none">
            Submit
          </button>
          </div>
        </div>
      </div>
    </div>
    
 {/* Four Small Pictures Section */}
 <div className="container mx-auto mt-8 flex justify-between">
           <div className="small-image border border-green-300">
          <img src="/1.jpg" alt="lol" style={{width:"300px" , height:"180px"}} />
        </div>
           <div className="small-image border border-green-300">
          <img src="/2.jpg" alt="lol"  style={{width:"300px" , height:"180px"}} />
        </div>
           <div className="small-image border border-green-300">
          <img  src="/3.jpg" alt="lol" style={{width:"300px" , height:"180px"}} />
        </div>
           <div className="small-image border border-green-300">
          <img  src="/4.jpg" alt="lol" style={{width:"300px" , height:"180px"}}  />
        </div>
      </div>
      
      <div className='flex flex-row items-center justify-center'>
          <button className="bg-[#27F498] text-white  w-[10%] py-2 mt-6 mb-6 hover:bg-green-600 focus:outline-none">
            BOOK NOW
          </button>
          </div>
        </div>
        </>
    );
}

export default Main;