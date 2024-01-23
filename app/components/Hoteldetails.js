import React from "react";

function Hoteldetails() {
  return (
    <>
      <div className="flex">
        <div className="text">
          <h2 className="text-5xl font-bold m-4 pl-32 p-10">Room in a cave hosted by Aydin</h2>

          {/* Details */}
          <ul className="list-disc pl-40">
            <li>Natural Ambiance:<br className="mb-20"/> 
            Experience Tranquility Amidst Ancient Rock Wallls.</li>
            <br />
            <li>Aydin's Hospitallity:<br className="mb-6"/> 
            Discover Warmth and Comfort in the Heart of the Cave</li>
            <br />
            <li>Hidden Gems Tour:<br className="mb-6"/> 
            Explore Aydin's Curated Guide to Cave Wonders</li>
          </ul>
          <br />
          <ul className="lol pl-36">
          <li>For a memorable cave experience hosted by Aydin</li>
          </ul>
        </div>

        {/* Image */}
        <div className="image-container border border-green-400 mt-10 mb-10 mr-32">
          <img src="/3.jpg" alt="lol" style={{ width: "600px", height: "400px" }} />
        </div>
      </div>

      <div className="Panel-main flex justify-center space-x-12">
                <div className="Panel1 flex flex-col justify-evenly  bg-[#032831] h-52 mt-2 mb-16 border-2 border-s-1 border-green-400">
                    <div className="panel p-2 bg-[#3B4E55] sm:rounded-full h-28 w-28 mr-32 ml-32">
                        <img src="bedroom.png" alt="bedroom" className="pimg1 h-full object-scale-down" />
                    </div>
                    <p className="Discp text-center font-bold">1-Bed</p>
                </div>
           <div className="Panel1 flex flex-col justify-evenly  bg-[#032831] h-52 mt-2 mb-16 border-2 border-s-1 border-green-400">
                    <div className="panel p-2 bg-[#3B4E55] sm:rounded-full h-28 w-28 mr-32 ml-32">
                        <img src="bathtub.png" alt="Room 2" className="pimg1 h-full object-scale-down" /> 
                    </div>
                    <p className="Discp text-center font-bold">bathtub</p>
                </div>
           <div className="Panel1 flex flex-col justify-evenly bg-[#032831] h-52 mt-2 mb-16 border-2 border-s-1 border-green-400">
                    <div className="panel p-2 bg-[#3B4E55] sm:rounded-full h-28 w-28 mr-32 ml-32">
                        <img src="team.png" alt="Room 3" className="pimg1 h-full object-scale-down"/>
                    </div>
                    <p className="Discp text-center font-bold ">Friendly-Staff</p>
                </div>
            </div>
    </>
  );
}

export default Hoteldetails; 