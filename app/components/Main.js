import React from "react";

function Main () {
    return (
        <>
        <div className="mr-6 ml-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-3 pl-4 sm:pl-8 md:pl-24 text-center sm:text-left">
  Cappadocia St Nino's Garden
</h2>
<h1 className="text-lg sm:text-xl md:text-lg font-semibold mb-0 pl-4 sm:pl-8 md:pl-24 text-center sm:text-left">
  A blissful escape into nature's embrace
</h1>

      <div className="container mx-auto mt-8 mb-8 flex flex-col sm:flex-row justify-around">
        {/* Image */}
        <div className="sm:w-[50%] mb-4 sm:mr-2 sm:mb-0 ">
  <img className="w-full h-full mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" src="/Cappadocia1.jpg" alt="lol1" />
</div>


        {/* Heading */}
         <div className="flex flex-col w-full sm:w-1/2 border border-green-300 "> 
          <h2 className="text-lg font-semibold text-center py-5 bg-[#27F498]">Details</h2>
       
          {/* Input Fields */}
          <div className="w-full p-5 bg-[#3B4E55]">
          <form>
          <div className=" flex flex-wrap ">
            <div className="flex flex-col  w-[93%] sm:w-1/2 pr-2 sm:pr-2 sm:pt-2">
              <label htmlFor="firstName" className="text-white">First Name:</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col w-[93%] sm:w-1/2 pr-2 sm:pr-2 sm:pt-2">
              <label htmlFor="lastName" className="text-white">Last Name:</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col w-[90%] mt-2">
              <label htmlFor="mobileNumber" className="text-white">Mobile Number:</label>
              <input
                type="tel"
                id="mobileNumber"
                placeholder="Mobile Number"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col w-[90%] mt-2">
              <label htmlFor="email" className="text-white">Email ID:</label>
              <input
                type="email"
                id="email"
                placeholder="Email ID"
                className="border p-2 rounded-md bg-[#3B4E55] focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col w-[90%] mt-2">
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
          <button className="bg-[#27F498] text-white w-[50%] sm:w-[30%]  py-2   hover:bg-green-600 focus:outline-none">
            Submit
          </button>
          </div>
        </div>
      </div>
    </div>
    
 {/* Four Small Pictures Section */}
 <div className="container mx-auto mt-8 flex flex-col sm:flex-row justify-center gap-4">
 <div className="small-image-container w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
           <div className="small-image  border border-green-300">
          <img src="/1.jpg" alt="lol" className="w-full h-full object-cover" />
        </div>
        </div>
        <div className="small-image-container sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
           <div className="small-image border border-green-300">
          <img src="/image-4.jpg" alt="lol" className="w-full h-full object-cover" />
        </div>
        </div>
        <div className="small-image-container sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
           <div className="small-image border border-green-300">
          <img  src="/2.jpg" alt="lol" className="w-full h-full object-cover" />
        </div>
        </div>
        <div className="small-image-container sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
           <div className="small-image border border-green-300">
          <img  src="/image-2.jpg" alt="lol" className="w-full h-full object-cover" />
        </div>
        </div>
      </div>
      
      <div className='flex flex-row items-center justify-center'>
          <button className="bg-[#27F498] text-white  w-[50%] sm:w-[10%] py-2 mt-4 mb-4 sm:mb-5  hover:bg-green-600 focus:outline-none">
            BOOK NOW
          </button>
          </div>
        </div>
        </>
    );
}

export default Main;