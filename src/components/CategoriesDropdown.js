import React from "react";

const CategoriesDropdown = () => {
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
    <div className=" absolute top-[100px] left-[105px] z-10 w-[432px] h-[312px] bg-neutral-white p-[32px] border-[1px solid #E7E7E7] shadow-[0px 4px 8px rgba(0, 0, 0, 0.15)] rounded-[4px]">
      <div className="p-0 grid grid-cols-3 gap-[32px]">
        {categories.map((category) => {
          return (
            <p
              className="text-neutral-80 text-bodyL font-reg cursor-pointer"
              key={category}
            >
              {category}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesDropdown;
