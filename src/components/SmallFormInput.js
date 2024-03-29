import { HiOutlineInformationCircle } from "react-icons/hi";

const SmallFormInput = (props) => {
  const { label, onChange, errorMessage, ...inputProps } = props;
  return (
    <div className="w-full h-[86px] mt-[48px]">
      <label className="text-bodyS text-neutral-70">{label}</label>
      <input
        onChange={onChange}
        {...inputProps}
        className=" outline-none   w-[170px]  moby:w-[256px] h-[48px]   lap:h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-80 focus:ring-1 ring-[#FFA599]"
      />
      <div className="error">
        <div className=" mt-[10px] hidden moby:flex justify-start items-center gap-[8.51px] text-sub  moby:text-bodyS text-[#ff0000] ">
          <span className="text-[18px] ">
            <HiOutlineInformationCircle />
          </span>
          <span className="">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallFormInput;
