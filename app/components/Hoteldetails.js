import React from "react";

function Hoteldetails() {
  return (
    <>
      <div className="flex flex-col sm:flex-row mr-3 ml-3 sm:mr-0 sm:ml-0">
        <div className="text sm:pl-8 text-left sm:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold m-4 sm:pl-16 p-4 text-left sm:text-left">Room in a cave hosted by Aydin</h2>

          {/* Details */}
          <ul className="list-disc pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-24 mb-2 mt-2 sm:mb-0 mr-4 ml-4 text-left sm:text-left">
            <li>Natural Ambiance:<br className="sm:hidden md:block lg:hidden xl:block"/> 
            Experience Tranquility Amidst Ancient Rock Wallls.</li>
            <br />
            <li>Aydin's Hospitallity:<br className="sm:hidden md:block lg:hidden xl:block"/> 
            Discover Warmth and Comfort in the Heart of the Cave</li>
            <br />
            <li>Hidden Gems Tour:<br className="sm:hidden md:block lg:hidden xl:block"/> 
            Explore Aydin's Curated Guide to Cave Wonders</li>
          </ul>
          <br />
          <ul className="pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-24 text-left sm:text-left">
          <li>For a memorable cave experience hosted by Aydin</li>
          </ul>
        </div>

        {/* Image */}
        <div className="image-container border border-green-400 mt-5 mb-5 sm:mr-32 ">
  <img
    src="/3.jpg"
    alt="lol"
    className="w-full h-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full "
    style={{ maxWidth: "600px", maxHeight: "400px"}}
  />
</div>

      </div>

      <div className="Panel-main flex flex-col sm:flex-row justify-center sm:space-x-12 mr-3 ml-3 mt-10 mb-5">
  <div className="Panel1 flex flex-col justify-evenly bg-[#032831] h-52 mt-2 mb-4 border-2 border-s-1 border-green-400 sm:w-1/4">
    <div className="panel p-2 bg-[#3B4E55] rounded-full sm:rounded-full h-28 w-28 mx-auto mb-2">
      <img src="bedroom.png" alt="bedroom" className="pimg1 h-full object-scale-down" />
    </div>
    <p className="Discp text-center font-bold">1-Bed</p>
  </div>

  <div className="Panel1 flex flex-col justify-evenly bg-[#032831] h-52 mt-2 mb-4 border-2 border-s-1 border-green-400 sm:w-1/4">
    <div className="panel p-2 bg-[#3B4E55] rounded-full sm:rounded-full h-28 w-28 mx-auto mb-2">
      <img src="bathtub.png" alt="Room 2" className="pimg1 h-full object-scale-down" />
    </div>
    <p className="Discp text-center font-bold">Bathtub</p>
  </div>

  <div className="Panel1 flex flex-col justify-evenly bg-[#032831] h-52 mt-2 mb-6 border-2 border-s-1 border-green-400 sm:w-1/4">
    <div className="panel p-2 bg-[#3B4E55] rounded-full sm:rounded-full h-28 w-28 mx-auto mb-2">
      <img src="team.png" alt="Room 3" className="pimg1 h-full object-scale-down" />
    </div>
    <p className="Discp text-center font-bold">Friendly-Staff</p>
  </div>
</div>

    </>
  );
}

export default Hoteldetails; 