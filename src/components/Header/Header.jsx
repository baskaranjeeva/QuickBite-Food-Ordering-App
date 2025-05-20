import React from "react";

function Header() {
  return (
    <div
      className="h-[34vw] my-[30px] mx-[auto] bg-no-repeat bg-contain relative rounded-3xl"
      style={{ backgroundImage: "url(/header_img2.jpg)" }}
    >
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[55%] bottom-[10%] left-[3vw] animate-fade-in-scale duration-1000">
        <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[Outfit]">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1vw] font-[Outfit]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="text-[#747474] font-medium px-[2.3vw] py-[0.6vw] bg-white rounded-4xl">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
