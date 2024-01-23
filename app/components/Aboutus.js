import React from "react";

function Aboutus() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text mt-12 mb-12">
          <h2 className="text-5xl font-bold pt-8 pb-1 text-center">About this Place</h2>
          <h1 className="text-lg font-semibold mt-2 mb-2 text-center">Laborum quis esse ex elit laboris est commodo velit anim</h1>
        </div>
      </div>
    
      <div className="flex">
        <div className="host-list">
          <ul className="flex flex-col justify-around mt-12 mb-12 mr-28 ml-28">
            <li className="li-host m-1">&#8594; Personalized Service</li>
            <li className="li-host m-1">&#8594; Local Insight</li>
            <li className="li-host m-1">&#8594; Warm Welcome</li>
            <li className="li-host m-1">&#8594; Culinary Delights</li>
            <li className="li-host m-1">&#8594; Activity Experts</li>
          </ul>

          <div className='flex flex-row items-center justify-start'>
          <button className="bg-[#27F498] text-white  w-[30%] py-2 mr-32 ml-32 mt-2 mb-2 hover:bg-green-600 focus:outline-none">
            Explore
          </button>
          </div>
        </div>
        
        {/* Add another ul tag on the right side */}
        <div className="host-list">
          <ul className="flex flex-col justify-around mt-12 mb-12 ">
            <li className="li-host m-1">&#8594; Personalized Concierge Service</li>
            <li className="li-host m-1">&#8594; Local Insight</li>
            <li className="li-host m-1">&#8594; Warm Welcome</li>
            <li className="li-host m-1">&#8594; Culinary Delights</li>
            <li className="li-host m-1">&#8594; Activity Experts</li>
          </ul>
        </div>
    
            {/* Image */}
            <div className="image-container border border-green-400 mt-2 mb-2 ml-28">
          <img src="/3.jpg" alt="lol" style={{ width: "600px", height: "350px" }} />
        </div>
      </div>

    <div className="flex items-center justify-center">
        <div className="text mt-20 mb-20">
          <h2 className="text-5xl font-bold pb-1 text-center">Our Reviews</h2>
        </div>
    </div>

    <div className="Review w-4/5 pb-8 mx-auto">
                <div className="Revcod flex justify-between">
                    <div className="review-content static">
                      <img src="/3.jpg" alt="lol1" className="rounded-full border border-s-2 relative top-[23px] left-6" style={{width:"50px" , height:"50px"}} />
                    <figure className="box border border-green-300 rounded-xl">
                        <div className="lol px-5 py-10 ">
                                <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
                        </div>
                    </figure>
                    </div>
                    <div className="colanimg1 rotate-180 pt-5 pd-5 pr-12 pl-12 mr-44">
                    <img src="/quote.png" alt="bedroom" className="pimg1" />
                    </div>
                </div>
                <div className="Revcod flex justify-between">
                    <div className="colanimg pt-4 pb-4 pr-12 pl-12 ml-32">
                        <img src="/quote.png" alt="bedroom" className="pimg1" />
                    </div>
                    <div className="review-content">
                    <img src="/3.jpg" alt="lol1" className="rounded-full border border-s-2 relative top-[23px] left-6" style={{width:"50px" , height:"50px"}}/>
                        <figure className="box  border border-green-300 rounded-xl">
                            <div className="lol px-5 py-10 ">
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
