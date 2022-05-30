import React from "react";
import { motion } from "framer-motion";

const CategoriesDropdown = ({ setShowCategories }) => {
  const categories = [
    "Fiction",
    "Action",
    "Philosophy",
    "Non-fiction",
    "Fantasy",
    "Thriller",
    "Drama",
    "Horror",
    "Self-help",
    "Poetry",
    "Children",
    "Satire",
    "Romance",
    "Autobiography",
    "Adventure",
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className=" absolute top-[100px] left-[105px] z-10 w-[432px] h-[312px] bg-neutral-white p-[32px] border-[1px solid #E7E7E7] shadow-[0px 4px 8px rgba(0, 0, 0, 0.15)] rounded-[4px]"
    >
      <div className="p-0 grid grid-cols-3 gap-[32px]">
        {categories.map((category) => {
          return (
            <p
              className="text-neutral-80 text-bodyL font-reg cursor-pointer hover:text-primary-50"
              onClick={() => setShowCategories(false)}
              key={category}
            >
              {category}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CategoriesDropdown;
