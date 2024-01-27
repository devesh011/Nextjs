import React from "react";

function Aboutus() {
  return (
    <>
    <div className="flex items-center justify-center">
  <div className="text mt-6 mb-6 sm:mt-12 sm:mb-12">
    <h2 className="text-3xl sm:text-5xl font-bold pt-4 pb-1 mr-3 ml-3 text-center sm:text-center">About this Place</h2>
    <h1 className="text-lg sm:text-lg font-semibold mt-2 mb-2 mr-3 ml-3 text-center sm:text-left">Laborum quis esse ex elit laboris est commodo velit anim</h1>
  </div>
</div>

    
<div className="flex flex-col sm:flex-row">
  <div className="host-list  sm:mb-0">
    <ul className="flex flex-col justify-around mt-4 mb-4 sm:mt-12 sm:mb-12 sm:mr-28 sm:ml-28 mr-6 ml-6">
      <li className="li-host m-1">&#8594; Personalized Service</li>
      <li className="li-host m-1">&#8594; Local Insight</li>
      <li className="li-host m-1">&#8594; Warm Welcome</li>
      <li className="li-host m-1">&#8594; Culinary Delights</li>
      <li className="li-host m-1">&#8594; Activity Experts</li>
    </ul>

    <div className='flex flex-row items-center justify-center sm:justify-start sm:ml-32 mt-2 mb-2'>
      <button className="bg-[#27F498] text-white w-[50%] sm:w-[30%] py-2  hover:bg-green-600 focus:outline-none">
        Explore
      </button>
    </div>
  </div>

  {/* Add another ul tag on the right side */}
  <div className="host-list1 sm:mt-0">
    <ul className="flex flex-col justify-around mt-4 mb-4 sm:mt-12 sm:mb-12 mr-6 ml-6">
      <li className="li-host m-1">&#8594; Personalized Concierge Service</li>
      <li className="li-host m-1">&#8594; Local Insight</li>
      <li className="li-host m-1">&#8594; Warm Welcome</li>
      <li className="li-host m-1">&#8594; Culinary Delights</li>
      <li className="li-host m-1">&#8594; Activity Experts</li>
    </ul>
  </div>
  
         
  <div className="image-container border border-green-400 mt-2 mb-2 mx-auto sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16 ml-3 mr-3">
  <img
    src="/7.jpg"
    alt="lol"
    className="w-full h-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full "
    style={{ maxWidth: "100%", width: "600px", maxHeight: "450px" }}
  />
</div>

</div>

      

<div className="flex items-center justify-center mt-8 sm:mt-20 mb-3 mr-3 ml-3">
  <div className="text">
    <h2 className="text-3xl sm:text-5xl font-bold  text-center">Our Reviews</h2>
  </div>
</div>


<div className="Review w-full md:w-4/5 pb-8 mx-auto">
  <div className="Revcod flex flex-col md:flex-row justify-between">
    <div className="review-content static md:w-1/2 ml-3 mr-3">
      <img src="/image-3.jpg" alt="lol1" className="rounded-full border-2 border-green-300 relative top-10  left-6 md:relative md:top-[28px] md:left-16" style={{ width: "50px", height: "50px" }} />
      <figure className="box border-2 border-green-300 rounded-xl mt-4 md:mt-0 md:ml-6">
        <div className="lol px-5 py-8 md:py-16">
          <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
        </div>
      </figure>
    </div>
    <div className="colanimg1 rotate-180 sm:pt-5 sm:pd-5 pr-12 pl-12 md:mr-44">
  <img src="/quote.png" alt="bedroom" className="pimg1 max-w-[0%] h-0% sm:max-w-full sm:h-auto" />
</div>
  </div>
  <div className="Revcod flex flex-col md:flex-row justify-between mt-4">
  <div className="colanimg sm:pt-4 sm:pb-4 pr-12 pl-12 md:ml-32">
    <img src="/quote.png" alt="bedroom" className="pimg1 max-w-[0%] h-0% sm:max-w-full sm:h-auto" />
  </div>
    <div className="review-content md:w-1/2 ml-3 mr-3">
      <img src="/7.jpg" alt="lol1" className="rounded-full border-2 border-green-300 relative top-10  left-6  md:relative md:top-[28px] md:left-16" style={{ width: "50px", height: "50px" }} />
      <figure className="box border-2 border-green-300 rounded-xl mt-4 md:mt-0 md:ml-6">
        <div className="lol px-5 py-8 md:py-16">
          <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
        </div>
      </figure>
    </div>
  </div>
</div>

    </>
  );
}

export default Aboutus;
