import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 mt-5 bg-gray-200 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer hover:underline">How Airbnb works </p>
        <p className="cursor-pointer hover:underline">Newsroom</p>
        <p className="cursor-pointer hover:underline"> Airbnb 2021 </p>
        <p className="cursor-pointer hover:underline">Investors </p>
        <p className="cursor-pointer hover:underline">Airbnb Plus</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="cursor-pointer hover:underline">Diversity & Belonging</p>
        <p className="cursor-pointer hover:underline">Accessibility </p>
        <p className="cursor-pointer hover:underline">Airbnb Associates </p>
        <p className="cursor-pointer hover:underline">Frontline Stays </p>
        <p className="cursor-pointer hover:underline">Guest Referrals</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="cursor-pointer hover:underline">Host your home </p>
        <p className="cursor-pointer hover:underline">
          Host an Online Experience{" "}
        </p>
        <p className="cursor-pointer hover:underline">Host an Experience </p>
        <p className="cursor-pointer hover:underline">Responsible hosting </p>
        <p className="cursor-pointer hover:underline">Resource Centre</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer hover:underline">Our COVID-19 Response</p>
        <p className="cursor-pointer hover:underline">Help Centre</p>
        <p className="cursor-pointer hover:underline"> Cancellation options </p>
        <p className="cursor-pointer hover:underline">Neighbourhood Support </p>
        <p className="cursor-pointer hover:underline">Trust & Safety</p>
      </div>
    </div>
  );
}

export default Footer;
