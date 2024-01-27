import React from "react";

function Host() {
  return (
    <>
   <div className="flex items-center justify-center">
  <div className="text">
    <h2 className="text-3xl sm:text-5xl font-bold pt-4 pb-1 text-center sm:text-left">Meet Your Host</h2>
  </div>
</div>


        {/* Square Section */}
        <div className="flex justify-center mr-4 ml-4 ">
        <div className="square-section bg-[#3B4E55] border border-grey-400 mt-2 mb-14 mx-4 sm:mx-16 lg:mx-32 xl:mx-48 mr-8 ml-8">

          {/* Content of the square section goes here */}
        <div className="host-ip flex flex-col sm:flex-row items-center justify-center sm:justify-start">
          <div className="panel-img sm:px-16 mt-8">
            <img src="/first.jpg" alt="Image" className="smallimg rounded-full sm:rounded-full h-24 w-24 sm:h-20 sm:w-20"/>
            <p className="discp flex justify-center font-bold m-2 sm:m-3 mt-2 sm:mt-2">Hotel</p>
          </div>
            <div className="panel-host flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-4 ml-2 mr-2">
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
              <div className="panel2 bg-[#032831] h-36 w-72 sm:w-52 mt-2 sm:mt-10 mb-2 sm:mb-10   sm:mx-0">
                <div className="phost flex flex-col items-center mt-8 mb-8">
                  <h3 className="fontlarge text-4xl ">51</h3>
                  <p className="disch text-[#27F498] mt-2 mb-2">Reviews</p>
                </div>
              </div>
              <div className="panel2 bg-[#032831] h-36 w-72 sm:w-52 mt-2  sm:mt-10 mb-2 sm:mb-10 sm:mx-0">
                <div className="phost flex flex-col items-center mt-8 mb-8">
                  <h3 className="fontlarge text-4xl ">4.94 &#9733;</h3>
                  <p className="disch text-[#27F498] mt-2 mb-2">Ratings</p>
                </div>
              </div>
              <div className="panel2 bg-[#032831] h-36 w-72 sm:w-52 mt-2 sm:mt-10 mb-2 sm:mb-10  sm:mx-0">
                <div className="phost flex flex-col items-center mt-8 mb-8">
                  <h3 className="fontlarge text-4xl ">8</h3>
                  <p className="disch text-[#27F498] mt-2 mb-2">Years Handling</p>
                </div>
              </div>
            </div>
            </div>
            </div>
                <div className="host-list">
                <ul className="flex flex-col justify-around mt-5 mb-5 mx-2 sm:mx-16 mr-6 ml-6">
                  <li className="li-host m-1">&#8594; Free Wi-Fi throughout the hotel</li>
                  <li className="li-host m-1">&#8594; Spacious and comfortable rooms</li>
                  <li className="li-host m-1">&#8594; Outdoor swimming pool</li>
                  <li className="li-host m-1">&#8594; Fine dining restaurant</li>
                  <li className="li-host m-1">&#8594; Room service available</li>
                </ul>
                </div>

                    <div className="host-discpn mt-5 mb-5 mx-2 sm:mx-16 mr-7 ml-7">
                        <p>
        Indulge in a haven of luxury at our hotel, where modern elegance meets comfort. Nestled amidst breathtaking landscapes, we offer a serene escape from urban life. Immerse yourself in spacious, well-appointed rooms, boasting scenic views and modern amenities. Our dedicated staff ensures unparalleled hospitality, treating every guest like family. Delight your palate at our fine dining restaurant or relax by the outdoor pool. With 24/7 front desk assistance, conference facilities, and personalized services, your stay is tailored to perfection. Discover a harmonious blend of tranquility and sophistication, making your experience with us truly unforgettable. Welcome to a world of refined hospitality.</p>
                    </div>
                  <div className='flex flex-row items-center justify-center sm:justify-start'>
                    <button className="bg-[#27F498] text-white w-[50%] sm:w-[20%] py-2 ml-2 sm:ml-16 mt-4 sm:mt-10 mb-4 sm:mb-10 hover:bg-green-600 focus:outline-none">
                      CONTACT NOW
                    </button>
                  </div>
        </div>
      </div>
    </>
  );
}

export default Host;
