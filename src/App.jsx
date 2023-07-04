import React from "react";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import LayoutMenu from "./layouts/LayoutMenu";

function App() {
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex-1">
            <LayoutMenu>
              <div className="w-[93px] h-[36px] mt-[53px] ml-[82px]">
                <h1 className="font-poppins font-semibold text-2xl text-[#4F4F4F]">
                  Buttons
                </h1>
                <div className="w-[332px] h-[60px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button />"}
                    </p>
                    <button className="w-[81px] h-[36px] bg-[#E0E0E0] rounded-md font-noto text-sm font-medium leading-normal shadow-personality">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal text-[#828282] mb-3">
                      &:hover, &:focus
                    </p>
                    <button className="w-[81px] h-[36px] bg-[#AEAEAE] rounded-md font-noto text-sm font-medium leading-normal shadow-personality">
                      Default
                    </button>
                  </div>
                </div>
                <div className="w-[332px] h-[60px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {'<Button variant="outline" />'}
                    </p>
                    <button className="w-[88px] h-[36px] border border-[#3D5AFE] rounded-md font-noto text-sm font-medium leading-normal text-[#3D5AFE]">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal text-[#828282] mb-3">
                      &:hover, &:focus
                    </p>
                    <button className="w-[88px] h-[36px] border border-[#3D5AFE] bg-[#2962FF1A] rounded-md font-noto text-sm font-medium leading-normal text-[#3D5AFE]">
                      Default
                    </button>
                  </div>
                </div>
                <div className="w-[332px] h-[60px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {'<Button variant="text" />'}
                    </p>
                    <button className="w-[88px] h-[36px] rounded-md font-noto text-sm font-medium leading-normal text-[#3D5AFE]">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal text-[#828282] mb-3">
                      &:hover, &:focus
                    </p>
                    <button className="w-[88px] h-[36px] bg-[#2962FF1A] rounded-md font-noto text-sm font-medium leading-normal text-[#3D5AFE]">
                      Default
                    </button>
                  </div>
                </div>
                <div className="w-[160px] h-[57px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button disableShadow />"}
                    </p>
                    <button className="w-[88px] h-[36px] bg-[#3D5AFE] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Default
                    </button>
                  </div>
                </div>

                <div className="w-[443px] h-[60px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button disabled />"}
                    </p>
                    <button className="w-[88px] h-[36px] bg-[#E0E0E0] rounded-md font-noto text-sm font-medium leading-normal text-[#9E9E9E] cursor-default">
                      Disabled
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {'<Button variant="text" disabled />'}
                    </p>{" "}
                    <button className="w-[88px] h-[36px]  rounded-md font-noto text-sm font-medium leading-normal text-[#9E9E9E] cursor-default">
                      Disabled
                    </button>
                  </div>
                </div>
                <div className="w-[572px] h-[60px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button startIcon=”local_grocery_store” />"}
                    </p>
                    <button className="font-noto text-sm font-medium leading-normal inline-flex items-center gap-2 rounded-md bg-[#2962FF] px-3 py-3 text-white ">
                      <span className="material-icons h-4 w-4 text-white mr-2">
                        add_shopping_cart
                      </span>{" "}
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button endIcon=”local_grocery_store” />"}
                    </p>{" "}
                    <button className="font-noto text-sm font-medium leading-normal inline-flex items-center gap-2 rounded-md bg-[#2962FF] px-3 py-3 text-white ">
                      Default
                      <span className="material-icons h-4 w-4 text-white mr-2">
                        add_shopping_cart
                      </span>{" "}
                    </button>
                  </div>
                </div>
                <div className="w-[532px] h-[66px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button size=”sm” />"}
                    </p>
                    <button className="w-[73px] h-[32px] bg-[#2962FF] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button size=”md” />"}
                    </p>{" "}
                    <button className="w-[81px] h-[36px] bg-[#2962FF] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button size=”lg” />"}
                    </p>{" "}
                    <button className="w-[93px] h-[42px] bg-[#2962FF] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Default
                    </button>
                  </div>
                </div>
                <div className="w-[802px] h-[60px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button color=”default” />"}
                    </p>
                    <button className="w-[81px] h-[36px] bg-[#E0E0E0] rounded-md font-noto text-sm font-medium leading-normal text-[#3F3F3F]">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button color=”primary” />"}
                    </p>{" "}
                    <button className="w-[81px] h-[36px] bg-[#2962FF] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button color=”secondary” />"}
                    </p>{" "}
                    <button className="w-[104px] h-[36px] bg-[#455A64] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Secondary
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3">
                      {"<Button color=”danger” />"}
                    </p>{" "}
                    <button className="w-[81px] h-[36px] bg-[#D32F2F] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Danger
                    </button>
                  </div>
                </div>
                <div className="w-[733px] h-[60px] flex justify-between mt-[28px] m-bottom">
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal text-[#828282] mb-3">
                      &:hover, &:focus
                    </p>
                    <button className="w-[81px] h-[36px] bg-[#AEAEAE] rounded-md font-noto text-sm font-medium leading-normal text-[#3F3F3F]">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3 text-white">
                      {"<Button color=”primary” />"}
                    </p>{" "}
                    <button className="w-[81px] h-[36px] bg-[#0039CB] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Default
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3 text-white">
                      {"<Button color=”secondary” />"}
                    </p>{" "}
                    <button className="w-[81px] h-[36px] bg-[#1C313A] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Secondary
                    </button>
                  </div>
                  <div className="mb-[45px]">
                    <p className="font-ubuntu text-xs leading-normal mb-3 text-white">
                      {"<Button color=”danger” />"}
                    </p>{" "}
                    <button className="w-[81px] h-[36px] bg-[#9A0007] rounded-md font-noto text-sm font-medium leading-normal text-white">
                      Danger
                    </button>
                  </div>
                </div>
                <Footer />
              </div>
            </LayoutMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
