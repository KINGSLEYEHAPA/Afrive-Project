import lostRoute from "../assets/cuate.png";
import BookQuote from "./BookQuote";

const PageNotFound = () => {
  return (
    <div className="w-screen max-w-[1440px]  mx-auto mt-[196px] flex justify-center flex-col items-center gap-[81.09px] ">
      <div className="text-center">
        <p className="w-[602px] h-[64px] text-h4 font-reg text-neutral-70">
          Hey! We got lost loading up your request...but don’t worry we’re
          working to find this page for you.
        </p>
      </div>
      <div className=" w-[539px] h-[388.49px">
        <img className="w-full h-full" src={lostRoute} alt="Lost Route" />
      </div>
      <BookQuote />
    </div>
  );
};

export default PageNotFound;
