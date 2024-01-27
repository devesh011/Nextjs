import React from "react";

function Things() {
  return (

    // <div className="flex items-center justify-start mt-14">
    //   <h2 className="text-3xl sm:text-5xl font-bold m-4 sm:pl-8 text-center sm:text-left">Things To Know</h2>
    //   </div>
    <> 
    <div className="items-center mt-5 mb-5 px-4 sm:px-8 md:px-16 lg:px-16">
  <div className="head-list">
    <div className="flex items-center justify-start mt-8 sm:mt-14">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold pl-4 sm:pl-24">Things To Know</h2>
    </div>

    <div className="list-main flex flex-col sm:flex-row justify-around items-start sm:items-center mt-6 mb-6 sm:mt-12 lg:mt-12 ml-6 mr-6">
      <div className="host-list mb-6 sm:mb-0">
        <ul className="flex flex-col">
          <li className="li-host m-1">Fairy Chimneys</li>
          <li className="li-host m-1">Underground Cities</li>
          <li className="li-host m-1">Hot Air Balloons</li>
          <li className="li-host m-1">Rock Churches</li>
          <br />
          <p className="lol text-[#27F498] mt-2 sm:mt-4">Know More &#8594;</p>
        </ul>
      </div>

      <div className="host-list mb-6 sm:mb-0">
        <ul className="flex flex-col">
          <li className="li-host m-1">Cave Dwellings</li>
          <li className="li-host m-1">Goreme Open-Air Museum</li>
          <li className="li-host m-1">Unique Landscapes</li>
          <li className="li-host m-1">Pigeon Valley</li>
          <br />
          <p className="lol text-[#27F498] mt-2 sm:mt-4">Know More &#8594;</p>
        </ul>
      </div>

      <div className="host-list">
        <ul className="flex flex-col">
          <li className="li-host m-1">Ancient Frescoes</li>
          <li className="li-host m-1">Uchisar Castle</li>
          <li className="li-host m-1">Rose Valley</li>
          <li className="li-host m-1">Cappadocia Cuisine</li>
          <br />
          <p className="lol text-[#27F498] mt-2 sm:mt-4">Know More &#8594;</p>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
    );
}

export default Things;
