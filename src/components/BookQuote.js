import footer from "../assets/footer-banner.jpg";

const BookQuote = () => {
  return (
    <div
      className="max-w-[1440px] w-screen h-[58px]  mtab:h-[85px]  tab:h-[106px]  mt-[19px] mtab:mt-[66px]  tab:mt-[64px] flex justify-center items-center"
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div className=" text-center w-[320px] h-[36px] tab:w-[628px] tab:h-[24px] mtab:w-[558px]  mtab:h-[24px]  lap:w-[697px] lap:h-[32px] flex justify-center items-center">
        <h4 className="text-neutral-white text-sub mtab:text-bodyN tab:text-bodyL lap:text-h4 font-medium py-[11px] mtab:py-[30.5px] tab:pt[37px] tab-pb-[45px] lap:py-[37px]">
          “With knowledge comes power, and with power comes great
          responsibility.”
        </h4>
      </div>
    </div>
  );
};

export default BookQuote;
