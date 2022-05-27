import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className=" w-screen max-w-[1440px] h-[88px] bg-neutral-white mx-auto shadow-[0px 4px 4px rgba(0, 0, 0, 0.05)] fixed top-0 flex justify-between">
      <div className=" w-[546px] pl-[99.69px] pr-[10]">
        <div className="w-full h-full px-0 py-0 flex items-center justify-start gap-[50.95px] relative">
          <img
            className="w-[30.36] h-[40.27] cursor-pointer"
            src={logo}
            alt="Afrive Logo"
          />
          <div className="flex h-full w-[358px]  gap-[56px]">
            <p className="text-bodyL text-neutral-80 w-[49px] h-[24px] reg cursor-pointer py-[32px]">
              Home
            </p>
            <p className="text-bodyL text-neutral-80 w-[89px] h-[24px] reg cursor-pointer py-[32px]">
              Categories
            </p>
            <p className="text-bodyL text-neutral-80 w-[107px] h-[24px] reg cursor-pointer py-[32px] whitespace-nowrap">
              Your e-books
            </p>
          </div>
          <div className=" absolute top-[41.50px] left-[446.31px] w-[7px] h-[7px] bg-primary-50  rounded-full"></div>
        </div>
      </div>
      <div className="bg-primary-20">Header components 2 </div>
    </header>
  );
};

export default Header;
