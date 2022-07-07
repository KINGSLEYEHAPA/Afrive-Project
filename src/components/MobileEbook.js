import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import bookSmall from "../assets/booksmall.png";

const MobileEbook = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-full mt-[68px] py-[17px] mx-auto mtab:hidden  ">
      <div
        onClick={() => navigate(-1)}
        className="w-full  h-[20px] flex justify-start items-center gap-0 px-[22px]  "
      >
        <span className="text-[18px]">
          <MdChevronLeft />
        </span>
        <p className="text-bodyS font-reg text-[#000000] cursor-pointer active:text-primary-50">
          Back
        </p>
      </div>
      <div className="mt-[20px]  w-screen mx-[23px] ">
        <div className="  h-6/7 w-full  overflow-hidden overflow-y-auto scrollbar-hide ">
          <div className="cursor-pointer  ">
            <div className="w-full mobx:w-[540px] h-[77.58px] flex items-center gap-[20.35px] justify-start mobx:justify-between">
              <img
                className=" w-[56.48px] h-[77.50px] "
                src={bookSmall}
                alt="E-Book"
              />
              <div className=" h-[77.50px]  mt-[28px] ">
                {" "}
                <h3 className="whitespace-nowrap font-medium text-[black] text-bodyN">
                  How to break a Sun
                </h3>{" "}
                <p className="whitespace-nowrap mt-[4px]  font-reg text-[black] text-sub ">
                  Chimamanda Adichie
                </p>
                <span className=" text-[rgba(0, 0, 0, 0.2)] text-sub d font-reg">
                  PDF
                </span>
              </div>
              <p className="w-[65px] h-[16px] font-medium text-primary-30 text-sub ml-[22px] ">
                26/05/2022
              </p>
            </div>
            <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px] mb-[23px]" />
          </div>
          <div className="cursor-pointer  ">
            <div className="w-full mobx:w-[540px] h-[77.58px] flex items-center gap-[20.35px] justify-start mobx:justify-between">
              <img
                className=" w-[56.48px] h-[77.50px] "
                src={bookSmall}
                alt="E-Book"
              />
              <div className=" h-[77.50px]  mt-[28px] ">
                {" "}
                <h3 className="whitespace-nowrap font-medium text-[black] text-bodyN">
                  How to break a Sun
                </h3>{" "}
                <p className="whitespace-nowrap mt-[4px]  font-reg text-[black] text-sub ">
                  Chimamanda Adichie
                </p>
                <span className=" text-[rgba(0, 0, 0, 0.2)] text-sub d font-reg">
                  PDF
                </span>
              </div>
              <p className="w-[65px] h-[16px] font-medium text-primary-30 text-sub ml-[22px] ">
                26/05/2022
              </p>
            </div>
            <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px] mb-[23px]" />
          </div>
          <div className="cursor-pointer  ">
            <div className="w-full mobx:w-[540px] h-[77.58px] flex items-center gap-[20.35px] justify-start mobx:justify-between">
              <img
                className=" w-[56.48px] h-[77.50px] "
                src={bookSmall}
                alt="E-Book"
              />
              <div className=" h-[77.50px]  mt-[28px] ">
                {" "}
                <h3 className="whitespace-nowrap font-medium text-[black] text-bodyN">
                  How to break a Sun
                </h3>{" "}
                <p className="whitespace-nowrap mt-[4px]  font-reg text-[black] text-sub ">
                  Chimamanda Adichie
                </p>
                <span className=" text-[rgba(0, 0, 0, 0.2)] text-sub d font-reg">
                  PDF
                </span>
              </div>
              <p className="w-[65px] h-[16px] font-medium text-primary-30 text-sub ml-[22px] ">
                26/05/2022
              </p>
            </div>
            <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px] mb-[23px]" />
          </div>
          <div className="cursor-pointer  ">
            <div className="w-full mobx:w-[540px] h-[77.58px] flex items-center gap-[20.35px] justify-start mobx:justify-between">
              <img
                className=" w-[56.48px] h-[77.50px] "
                src={bookSmall}
                alt="E-Book"
              />
              <div className=" h-[77.50px]  mt-[28px] ">
                {" "}
                <h3 className="whitespace-nowrap font-medium text-[black] text-bodyN">
                  How to break a Sun
                </h3>{" "}
                <p className="whitespace-nowrap mt-[4px]  font-reg text-[black] text-sub ">
                  Chimamanda Adichie
                </p>
                <span className=" text-[rgba(0, 0, 0, 0.2)] text-sub d font-reg">
                  PDF
                </span>
              </div>
              <p className="w-[65px] h-[16px] font-medium text-primary-30 text-sub ml-[22px] ">
                26/05/2022
              </p>
            </div>
            <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px] mb-[23px]" />
          </div>
          <div className="cursor-pointer  ">
            <div className="w-full mobx:w-[540px] h-[77.58px] flex items-center gap-[20.35px] justify-start mobx:justify-between">
              <img
                className=" w-[56.48px] h-[77.50px] "
                src={bookSmall}
                alt="E-Book"
              />
              <div className=" h-[77.50px]  mt-[28px] ">
                {" "}
                <h3 className="whitespace-nowrap font-medium text-[black] text-bodyN">
                  How to break a Sun
                </h3>{" "}
                <p className="whitespace-nowrap mt-[4px]  font-reg text-[black] text-sub ">
                  Chimamanda Adichie
                </p>
                <span className=" text-[rgba(0, 0, 0, 0.2)] text-sub d font-reg">
                  PDF
                </span>
              </div>
              <p className="w-[65px] h-[16px] font-medium text-primary-30 text-sub ml-[22px] ">
                26/05/2022
              </p>
            </div>
            <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px] mb-[23px]" />
          </div>
          <div className="cursor-pointer  ">
            <div className="w-full mobx:w-[540px] h-[77.58px] flex items-center gap-[20.35px] justify-start mobx:justify-between">
              <img
                className=" w-[56.48px] h-[77.50px] "
                src={bookSmall}
                alt="E-Book"
              />
              <div className=" h-[77.50px]  mt-[28px] ">
                {" "}
                <h3 className="whitespace-nowrap font-medium text-[black] text-bodyN">
                  How to break a Sun
                </h3>{" "}
                <p className="whitespace-nowrap mt-[4px]  font-reg text-[black] text-sub ">
                  Chimamanda Adichie
                </p>
                <span className=" text-[rgba(0, 0, 0, 0.2)] text-sub d font-reg">
                  PDF
                </span>
              </div>
              <p className="w-[65px] h-[16px] font-medium text-primary-30 text-sub ml-[22px] ">
                26/05/2022
              </p>
            </div>
            <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px] mb-[23px]" />
          </div>
          <div className="cursor-pointer  ">
            <div className="w-full mobx:w-[540px] h-[77.58px] flex items-center gap-[20.35px] justify-start mobx:justify-between">
              <img
                className=" w-[56.48px] h-[77.50px] "
                src={bookSmall}
                alt="E-Book"
              />
              <div className=" h-[77.50px]  mt-[28px] ">
                {" "}
                <h3 className="whitespace-nowrap font-medium text-[black] text-bodyN">
                  How to break a Sun
                </h3>{" "}
                <p className="whitespace-nowrap mt-[4px]  font-reg text-[black] text-sub ">
                  Chimamanda Adichie
                </p>
                <span className=" text-[rgba(0, 0, 0, 0.2)] text-sub d font-reg">
                  PDF
                </span>
              </div>
              <p className="w-[65px] h-[16px] font-medium text-primary-30 text-sub ml-[22px] ">
                26/05/2022
              </p>
            </div>
            <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px] mb-[23px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileEbook;
