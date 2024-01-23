import React from "react";

function Footer() {
  return (
    <>
     <div className="list-main flex justify-around items-center">
       <div className="flex items-center flex-col">
          {/* Text above social icons */}
          <div className="text-sm text-[grey]">
            <p className="mb-3">@User Name</p>
          

         {/*Facebook and Twitter Logos */}
         <div className="social-icons flex items-center h-10 w-10">
          <img src="/icons8-facebook-64.png" alt="Facebook Logo"  className="h-10 w-10 hover:opacity-70"/>
          <img src="/icons8-twitterx-48.png" alt="Twitter Logo"  className="h-10 w-10 hover:opacity-70"/>
          </div>
         </div>
       </div>

        <div className="Footer-list">
          <ul className="flex flex-col mt-8 mb-8">
            <p className="lol font-bold mt-4 mb-4">Explore</p>
            <br />
            <li className="li-Footer text-[grey] m-1">Home</li>
            <li className="li-Footer text-[grey] m-1">Attractions</li>
            <li className="li-Footer text-[grey] m-1">Gallery</li>
            <li className="li-Footer text-[grey] m-1">Contact Us</li>
          </ul>
        </div>


        <div className="Footer-list">
          <ul className="flex flex-col">
          <p className="lol font-bold mt-4 mb-4">About</p>
            <br />
            <li className="li-Footer text-[grey] m-1">Home</li>
            <li className="li-Footer text-[grey] m-1">Attractions</li>
            <li className="li-Footer text-[grey] m-1">Gallery</li>
            <li className="li-Footer text-[grey] m-1">Contact Us</li>
          </ul>
        </div>


        <div className="Footer-list">
          <ul className="flex flex-col">
          <p className="lol font-bold mt-4 mb-4">Other</p>
            <br />
            <li className="li-Footer text-[grey] m-1">Home</li>
            <li className="li-Footer text-[grey] m-1">Attractions</li>
            <li className="li-Footer text-[grey] m-1">Gallery</li>
            <li className="li-Footer text-[grey] m-1">Contact Us</li>
          </ul>
       </div>
    </div>
    <hr className="w-full border-t border-gray-700" />

    <div className="Footer-list">
          <ul className="flex flex-row gap-3 mr-32 mt-1 mb-2 justify-end">
            <li className="li-Footer text-[grey] m-1">News</li>
            <li className="li-Footer text-[grey] m-1">Policy</li>
            <li className="li-Footer text-[grey] m-1">Copyright @alphadev</li>
          </ul>
       </div>

    </>
    );
}

export default Footer;

