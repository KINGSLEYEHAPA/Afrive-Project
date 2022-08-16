import { HiOutlineInformationCircle } from "react-icons/hi";

const FormInput = (props) => {
  const { label, onChange, errorMessage, fTyp, ...inputProps } = props;

  return (
    <div
      className={
        fTyp === "mobile"
          ? "w-full h-[86px] mt-[24px]"
          : "w-full h-[86px] mt-[48px]"
      }
    >
      <label
        className={
          fTyp === "billing"
            ? "text-bodyN text-neutral-70"
            : fTyp === "mobile"
            ? "text-sub text-neutral-40 font-[450]"
            : "text-bodyS text-neutral-70"
        }
      >
        {label}
      </label>
      <input
        onChange={onChange}
        {...inputProps}
        className=" outline-none w-full  h-[48px]      lap:h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-80 focus:ring-1 ring-[#FFA599]"
      />

      <div className="error">
        <div className=" mt-[10px] flex justify-start items-center gap-[3.51px] text-sub  moby:text-bodyS text-[#ff0000] ">
          <span className="  text-[18px] ">
            {fTyp !== "billing" && <HiOutlineInformationCircle />}
          </span>
          <span className="">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
