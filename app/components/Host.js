import React from "react";

function Host() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text">
          <h2 className="text-5xl font-bold pt-8 pb-1 text-center">Meet Your Host</h2>
        </div>
      </div>

        {/* Square Section */}
        <div className="flex justify-center">
        <div className="square-section bg-[#3B4E55] border border-grey-400 mt-8 mb-14 mr-60 ml-60">

          {/* Content of the square section goes here */}
          <div className="host-ip flex">
                <div className="panel-img pt-10 pb-10 pr-16 pl-16">
                    <img src="/first.jpg" alt="Image" className="smallimg sm:rounded-full h-20 w-20"/>
                    <p className="discp flex justify-center font-bold m-3">Hotel</p>
                </div>


                <div className="panel-host flex justify-between">
                <div className="panel2 bg-[#032831] h-36 w-52 mt-10 mb-10 mr-3 ml-3">
                    <div className="phost flex flex-col items-center">
                        <h3 className="fontlarge text-4xl mt-4 mb-4">51</h3>
                        <p className="disch text-[#27F498] mt-4 mb-4 ">Reviews</p>
                    </div>
                </div>
                <div className="panel2 bg-[#032831] h-36 w-52 mt-10 mb-10 mr-3 ml-3">
                    <div className="phost flex flex-col items-center">
                        <h3 className="fontlarge text-4xl mt-4 mb-4">4.94 &#9733;</h3>
                        <p className="disch text-[#27F498] mt-4 mb-4">Ratings</p>
                    </div>
                </div>
                <div className="panel2 bg-[#032831] h-36 w-52 mt-10 mb-10 mr-3 ml-3">
                    <div className="phost flex flex-col items-center">
                        <h3 className="fontlarge text-4xl mt-4 mb-4">8</h3>
                        <p className="disch text-[#27F498] mt-4 mb-4">Years Handling</p>
                    </div>
                             
            </div>
                </div>
            </div>
            <div className="host-list">
                <ul className="flex flex-col justify-around mt-5 mb-5 mr-16 ml-16">
                    <li className="li-host m-1">&#8594; Free Wi-Fi throughout the hotel</li>
                    <li className="li-host m-1">&#8594; Spacious and comfortable rooms</li>
                    <li className="li-host m-1">&#8594; Outdoor swimming pool</li>
                    <li className="li-host m-1">&#8594; Fine dining restaurant</li>
                    <li className="li-host m-1">&#8594; Room service available</li>
                </ul>
            </div>
            <div className="host-discpn mt-5 mb-5 mr-16 ml-16">
                <p>
Indulge in a haven of luxury at our hotel, where modern elegance meets comfort. Nestled amidst breathtaking landscapes, we offer a serene escape from urban life. Immerse yourself in spacious, well-appointed rooms, boasting scenic views and modern amenities. Our dedicated staff ensures unparalleled hospitality, treating every guest like family. Delight your palate at our fine dining restaurant or relax by the outdoor pool. With 24/7 front desk assistance, conference facilities, and personalized services, your stay is tailored to perfection. Discover a harmonious blend of tranquility and sophistication, making your experience with us truly unforgettable. Welcome to a world of refined hospitality.</p>
            </div>
            <div className='flex flex-row items-center justify-start'>
          <button className="bg-[#27F498] text-white  w-[20%] py-2 ml-16 mt-10 mb-10 hover:bg-green-600 focus:outline-none">
            CONTACT NOW
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Host;
