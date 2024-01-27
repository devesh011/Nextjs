import React from "react";

function Footer() {
  return (
    <>
     <div className="list-main flex  flex-col sm:flex-row justify-around item-start sm:items-center mt-6">
     <div className="flex flex-col sm:items-start items-start mr-9 ml-9 sm:ml-24 mb-5">
  {/* Text above social icons */}
  <div className="text-sm text-[grey] ">
    @User Name
  </div>

  {/* Facebook and Twitter Logos */}
  <div className="social-icons flex  items-center p-2 h-10 w-10 ">
    <img src="/icons8-facebook-64.png" alt="Facebook Logo" className="h-full w-full hover:opacity-70" />
    <img src="/icons8-twitterx-48.png" alt="Twitter Logo" className="h-full w-full hover:opacity-70" />
  </div>
</div>


<div className="Footer-list mb-4 sm:mb-0 sm:mr-8">
    <ul className="flex flex-col mr-10 ml-10">
      <p className="lol font-bold">Explore</p>
      <br />
      <li className="li-Footer text-[grey] m-1">Home</li>
      <li className="li-Footer text-[grey] m-1">Attractions</li>
      <li className="li-Footer text-[grey] m-1">Gallery</li>
      <li className="li-Footer text-[grey] m-1">Contact Us</li>
    </ul>
  </div>

  <div className="Footer-list mb-4 sm:mb-0 sm:mr-8">
    <ul className="flex flex-col mr-10 ml-10">
      <p className="lol font-bold">About</p>
      <br />
      <li className="li-Footer text-[grey] m-1">Home</li>
      <li className="li-Footer text-[grey] m-1">Attractions</li>
      <li className="li-Footer text-[grey] m-1">Gallery</li>
      <li className="li-Footer text-[grey] m-1">Contact Us</li>
    </ul>
  </div>

  <div className="Footer-list mb-4">
    <ul className="flex flex-col mr-10 ml-10">
      <p className="lol font-bold">Other</p>
      <br />
      <li className="li-Footer text-[grey] m-1">Home</li>
      <li className="li-Footer text-[grey] m-1">Attractions</li>
      <li className="li-Footer text-[grey] m-1">Gallery</li>
      <li className="li-Footer text-[grey] m-1">Contact Us</li>
    </ul>
  </div>

    </div>
    <hr className="w-full border-t border-gray-700 sm:w-[full] mx-auto" />


    <div className="Footer-list">
  <ul className="flex flex-row sm:flex-row gap-3 sm:mr-32 mt-1 mb-2 justify-center sm:justify-end">
    <li className="li-Footer text-[grey] m-1">News</li>
    <li className="li-Footer text-[grey] m-1">Policy</li>
    <li className="li-Footer text-[grey] m-1">Copyright @alphadev</li>
  </ul>
</div>


    </>
    );
}

export default Footer;

