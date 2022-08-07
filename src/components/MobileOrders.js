import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const MobileOrders = () => {
  const navigate = useNavigate();
  let options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const customerOrders = useSelector((state) => state.books.customerOrders);
  return (
    <div className="w-screen h-full mt-[68px] py-[17px] mx-auto mtab:hidden">
      {" "}
      <div
        onClick={() => navigate(-1)}
        className="w-full  h-[20px] flex justify-start items-center gap-0 px-[22px]  "
      >
        <span className="text-[20px]">
          <MdChevronLeft />
        </span>
        <p className="text-bodyS font-reg text-[#000000] cursor-pointer active:text-primary-50">
          Back
        </p>
      </div>
      <div className="w-full h-[24px] flex justify-center items-center mt-[12px]">
        <h4 className="text-bodyN font-reg text-neutral-40 ">Your Orders</h4>
      </div>
      <div className="mt-[18px]  w-screen">
        <div className="  h-6/7 w-full  overflow-hidden overflow-y-auto scrollbar-hide mb-20px">
          {customerOrders?.data?.map((order, index) => {
            return (
              <div key={order?.txn_ref} className="flex flex-col gap-[12px]">
                <p className=" mx-[23px] text-h4 text-neutral-80">Order:</p>
                {order?.book?.map((item, index) => {
                  return (
                    <div key={index} className="mx-[23px]">
                      <h2 className=" text-bodyN text-neutral-80">
                        {item?.bookName}
                      </h2>
                      <p className="text-bodyS  text-neutral-50">
                        Quantity:&nbsp;
                        <span className="text-neutral-80">
                          {item?.quantity}
                        </span>
                      </p>
                    </div>
                  );
                })}

                <div className="mx-[23px] flex flex-col gap-[8px] ">
                  <p className="text-bodyS  text-neutral-50">
                    Status:&nbsp;
                    <span
                      className={
                        order?.completed ? "text-[#17b169]" : "text-[#ffc72c]"
                      }
                    >
                      {order?.completed ? "Processed for delivery" : "Pending"}
                    </span>
                  </p>
                  <p className="text-bodyS  text-neutral-50">
                    Total Amount:&nbsp;
                    <span className="text-neutral-80">
                      N{order?.total_order_amount.toLocaleString("en-US")}
                    </span>
                  </p>
                  <p className="text-bodyS  text-neutral-50">
                    Estimated Time of Delivery:&nbsp;
                    <span
                      className={
                        order?.completed ? "text-neutral-80" : "text-[#ff0000]"
                      }
                    >
                      {" "}
                      {order?.completed
                        ? new Date(
                            order?.estimated_delivery_date
                          ).toLocaleDateString("en-US", options)
                        : "Payment not verified"}
                    </span>
                  </p>
                  <hr className="w-[100%] mx-auto  h-0 border-1 border-primary-20 mt-[20px] mb-[22px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileOrders;
