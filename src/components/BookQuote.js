import footer from "../assets/footer-banner.jpg";

const BookQuote = () => {
  return (
    <div
      className="max-w-[1440px] w-screen h-[106px]   mt-[119px] flex justify-center items-center"
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
    >
      <div className="w-[697px] h-[32px] flex justify-center items-center">
        <h4 className="text-neutral-white text-h4 font-medium py-[37px]">
          “With knowledge comes power, and with power comes great
          responsibility.”
        </h4>
      </div>
    </div>
  );
};

export default BookQuote;
