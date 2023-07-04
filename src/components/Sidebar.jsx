import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[237px] h-[1234px] mt-[-9.07px] ml-[-8.5px] bg-[#FAFBFD]">
      <div className="w-[114px] h-[20px] mt-[38px] ml-[48px]">
        <h1 className="text-sm text-[#090F31] font-poppins font-semibold">
          <span className="text-[#F7542E]">Dev</span>challenges.io
        </h1>
      </div>
      <div className="w-[62px] h-[20px] mt-[110px] ml-[48px]">
        <ul className="font-noto font-semibold text-[#9E9E9E] text-sm">
          <li className="mb-[40px] cursor-pointer">Colors</li>
          <li className="mb-[40px] cursor-pointer">Typography</li>
          <li className="mb-[40px] cursor-pointer">Spaces</li>
          <li className="mb-[40px] cursor-pointer">Buttons</li>
          <li className="mb-[40px] cursor-pointer text-[#090F31]">Inputs</li>
          <li className="cursor-pointer">Grid</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
