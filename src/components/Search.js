import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { availableBooksDummy } from "../dummyData";

const Search = ({ showSearch, setShowSearch }) => {
  const [showSearchOption, setShowSearchOption] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchOptionText, setSearchOptionText] = useState("Search by");
  const [searchInput, setSearchInput] = useState("");
  const [searchWidth, setSearchWidth] = useState({ width: window.innerWidth });

  useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      setSearchWidth({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const categoriesOptionRef = useRef();
  const authorsOptionRef = useRef();
  console.log(searchResults);
  const filteredBooks = (e) => {
    const searchedWord = e.target.value;
    setSearchInput(searchedWord);
    const newFilter = availableBooksDummy.filter((value) => {
      return (
        value.title.toLowerCase().includes(searchedWord.toLowerCase()) ||
        (searchOptionText === "Categories" &&
          value.category.some((item) => {
            return item.toLowerCase().includes(searchedWord.toLowerCase());
          })) ||
        (searchOptionText === "Authors" &&
          value.author.toLowerCase().includes(searchedWord.toLowerCase()))
      );
    });
    if (searchedWord === "") {
      setSearchResults([]);
    } else {
      setSearchResults(newFilter);
    }
  };

  const navigate = useNavigate();

  const searchedBook = (book) => {
    setSearchResults([]);
    setSearchInput("");
    setShowSearch(false);
    navigate(`/book/${book.title}`);
  };

  return (
    <motion.div
      initial={{
        opacity: 1,
        width:
          20 ||
          (searchWidth.width >= 860 && searchWidth.width < 1366 && 276.23),
        height: 36,
      }}
      animate={{
        opacity: 1,
        width:
          (searchWidth.width >= 1440 && [
            100, 150, 200, 250, 300, 350, 400, 467,
          ]) ||
          (searchWidth.width >= 1366 &&
            searchWidth.width < 1440 && [
              100, 150, 200, 250, 300, 350, 400, 443,
            ]) ||
          (searchWidth.width >= 860 && searchWidth.width < 1366 && 276.23),

        height: 36,
        transition: { duration: 1.2, delay: 0.5 },
      }}
      exit={{
        opacity: 0,
        width: 20,
        height: 20,
        transition: { duration: 1.2 },
      }}
      layoutId="outline"
      className="absolute z-10 top-[28px] right-[170px] tab:w-[276px]  lap:w-[443px] desk:w-[467px] h-[36px] border  border-neutral-30 rounded-[120px] box-border bg-neutral-white border-[0.5px solid #C3C3C3] rounded-[120px]"
    >
      <div className="relative h-full w-full">
        <AnimatePresence>
          {showSearchOption && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="absolute top-[45px] w-[174px] h-[118px] bg-neutral-white border border-neutral-20 shadow-[0px 4px 22px rgba(0, 0, 0, 0.15)] rounded-[8px]"
            >
              <div className="w-full h-[58px] flex justify-start items-center pl-[18px] text-bodyN text-neutral-80 font-reg">
                <p
                  ref={categoriesOptionRef}
                  onClick={() => {
                    setSearchOptionText(categoriesOptionRef.current.innerText);
                    setShowSearchOption(false);
                    setSearchInput("");
                  }}
                  className="cursor-pointer"
                >
                  Categories
                </p>
              </div>
              <hr className="h-0 border-1 border-neutral-20 w-[80%] ml-[20%]" />
              <div className="w-full h-[58px] flex justify-start items-center  pl-[18px] text-bodyN text-neutral-80 font-reg">
                <p
                  ref={authorsOptionRef}
                  onClick={() => {
                    setSearchOptionText(authorsOptionRef.current.innerText);
                    setShowSearchOption(false);
                    setSearchInput("");
                  }}
                  className="cursor-pointer"
                >
                  Authors
                </p>
              </div>
            </motion.div>
          )}
          {searchResults?.length !== 0 && (
            <motion.div
              key="box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="absolute top-[45px] left-[95px] w-[372px] h-[150px] bg-neutral-white border border-neutral-20 shadow-[ 0px 4px 22px rgba(0, 0, 0, 0.15)] rounded-[8px] py-[20px]"
            >
              <div className="overflow-hidden h-full w-full overflow-y-auto scrollbar-hide ">
                <p className="pl-[18px] text-primary-50 text-bodyN mb-[2px]">
                  Search Results for "{searchInput}"
                </p>
                {searchResults.map((book, index) => {
                  return (
                    <div key={index}>
                      <hr className="h-0 border-1 border-neutral-20 w-[100%]" />
                      <div className="w-full h-[58px] flex justify-start items-center px-[18px] text-bodyS text-neutral-80 font-reg ">
                        <p
                          onClick={() => searchedBook(book)}
                          className="cursor-pointer"
                        >
                          {book.title}
                        </p>
                      </div>
                      <hr className="h-0 border-1 border-neutral-20 w-[100%]" />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute top-0 left-0 w-[90px] h-full flex justify-center items-center gap-[12px] cursor-pointer">
          {" "}
          <p
            onClick={() => {
              setShowSearchOption(!showSearchOption);
            }}
            className="text-bodyS pl-[24px] whitespace-nowrap font-reg text-neutral-60"
          >
            {searchOptionText}
          </p>
          <p className="text-neutral-20">|</p>
        </div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => filteredBooks(e)}
          placeholder="What would you like to read today?"
          className=" pl-[102px] pr-[24px]  text-neutral-30 placeholder:text-sub placeholder:text-neutral-30 border-[0.5px solid #C3C3C3] rounded-[120px] w-full h-full bg-neutral-white outline-none text-bodyN"
        />
      </div>
    </motion.div>
  );
};

export default Search;
