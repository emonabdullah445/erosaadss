import React from "react";

function Footer() {
  return (
    <div className="mt-[24px] lg:mt-[60px] bg-black">
      <div className="container pt-[44px] lg:pt-[18px] pb-[40px] lg:pb-[30px]">
        <div className="flex justify-evenly flex-wrap gap-x-[55px]">
          <h4 className="hidden lg:block text-[22px] mr-[90px] font-medium uppercase text-[#9B9B9B]">
            EROSADS
          </h4>

          <div className="flex justify-evenly flex-wrap gap-x-[55px] gap-y-5 lg:gap-y-[27px] text-xs lg:text-sm text-white/80">
            <div className="">
              <p className="cursor-pointer hover:text-custom-amber text-[#9B9B9B]">
                Contact
              </p>
              <p className="cursor-pointer hover:text-custom-amber text-[#9B9B9B]">
                Terms & Conditions
              </p>
            </div>
            <div className="">
              <p className="cursor-pointer hover:text-custom-amber text-[#9B9B9B]">
                F.A.Q.
              </p>
              <p className="cursor-pointer hover:text-custom-amber text-[#9B9B9B]">
                Privacy
              </p>
            </div>
            <div className="">
              <p className="cursor-pointer hover:text-custom-amber text-[#9B9B9B]">
                Advertiser Agreement
              </p>
              <p className="cursor-pointer hover:text-custom-amber text-[#9B9B9B]">
                About ErosAds
              </p>
            </div>
            <p className="cursor-pointer hover:text-custom-amber text-[#9B9B9B]">
              DMCA Complaints
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-[40px] lg:mt-[60px] text-white/80">
          <p className="flex-1 text-xs lg:text-base text-white/50 lg:text-white/80">
            Customization Services brought to you by Eros-guide.com™ All Things
            Erotic™. © 1997-2016 MPF Media Services GmbH Obergrundstrasse
            73CH-6003 Luzern{" "}
            <span className="lg:hidden">
              Read about out{" "}
              <span className="text-custom-amber/90 cursor-pointer text-sm">
                Trademarks/IP
              </span>
            </span>
          </p>
          <p className="hidden lg:block">
            Read about out{" "}
            <span className="text-custom-amber/90 cursor-pointer text-sm">
              Trademarks/IP
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
