import React from "react";

function Things() {
  return (
    <> 
    <div className="items-center mt-5 mb-5 mr-16 ml-16">
      <div className="head-list">
        <div className="flex items-center justify-start mt-14">
          <h2 className="text-5xl font-bold pl-24">Things To Know</h2>
        </div>
     
        <div className="list-main flex justify-around items-center">
        <div className="host-list">
          <ul className="flex flex-col mt-12 mb-12">
            <li className="li-host m-1">Fairy Chimneys</li>
            <li className="li-host m-1">Underground Cities</li>
            <li className="li-host m-1">Hot Air Balloons</li>
            <li className="li-host m-1">Rock Churches</li>
            <br />
            <p className="lol text-[#27F498] mt-4 mb-4">Know More &#8594;</p>
          </ul>
        </div>


        <div className="host-list">
          <ul className="flex flex-col">
            <li className="li-host m-1">Cave Dwellings</li>
            <li className="li-host m-1">Goreme Open-Air Museum</li>
            <li className="li-host m-1">Unique Landscapes</li>
            <li className="li-host m-1">Pigeon Valley</li>
            <br />
            <p className="lol text-[#27F498] mt-4 mb-4">Know More &#8594;</p>
          </ul>
        </div>


        <div className="host-list">
          <ul className="flex flex-col">
            <li className="li-host m-1">Ancient Frescoes</li>
            <li className="li-host m-1">Uchisar Castle</li>
            <li className="li-host m-1">Rose Valley</li>
            <li className="li-host m-1">Cappadocia Cuisine</li>
            <br />
            <p className="lol text-[#27F498] mt-4 mb-4">Know More &#8594;</p>
          </ul>
        </div>
        </div>
      </div>
    </div>
    </>
    );
}

export default Things;
