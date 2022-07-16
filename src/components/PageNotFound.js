import lostRoute from "../assets/cuate.png";
import BookQuote from "./BookQuote";

const PageNotFound = () => {
  return (
    <div className="w-screen max-w-[1440px]  mx-auto mt-[196px] flex justify-center flex-col items-center gap-[81.09px] ">
      <div className="text-center">
        <p className=" w-[360px]   moby:w-[602px] h-[64px] text-h4 font-reg text-neutral-70">
          Hey! We got lost loading up your request...but don’t worry we’re
          working to find this page for you.
        </p>
      </div>
      <div className=" w-[360px] h-[400px]   moby:w-[539px]   tab:w-[539px]  moby:h-[600px]   tab:h-[388.49px]">
        <img className="w-full h-full" src={lostRoute} alt="Lost Route" />
      </div>
      <div className=" mt-[125px]  moby:mt-[400px] tab:mt-0 ">
        <BookQuote />
      </div>
    </div>
  );
};

export default PageNotFound;
