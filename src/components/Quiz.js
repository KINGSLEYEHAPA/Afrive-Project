import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Quiz = ({ setShowQuiz }) => {
  const [genreValues, setGenreValues] = useState([]);
  const [customerQuizResult, setCustomerQuizResult] = useState();
  const [quizCard, setQuizCard] = useState(0);

  console.log(genreValues);
  console.log(customerQuizResult);
  const genres = [
    "Fiction",
    "Action",
    "Philosophy",
    "Non-fiction",
    "Fantasy",
    "Thriller",
    "Drama",
    "Horror",
    "Self-Help",
    "Poetry",
    "Children",
    "Satire",
    "Romance",
    "Autobiography",
    "Adventure",
  ];

  const handleQuiz = (genre) => {
    if (genreValues.includes(genre)) {
      const values = genreValues.filter((item) => {
        return item !== genre;
      });

      if (values === []) setGenreValues();
      else if (values !== []) {
        setGenreValues(values);
      }
    } else if (!genreValues.includes(genre)) {
      setGenreValues([...genreValues, genre]);
    }
  };

  const saveQuizResult = () => {
    if (quizCard === 0) {
      setCustomerQuizResult(genreValues);

      setGenreValues([]);

      setQuizCard(1);
    }

    if (quizCard === 1) {
      setShowQuiz(false);
    }
  };

  return (
    <div className="w-[505px] py-[34px] px-[40px] h-[510px] bg-neutral-white shadow-[0px 4px 14px rgba(0, 0, 0, 0.15)] rounded-[4px]">
      <div className="w-full h-[20px] flex justify-end items center">
        {" "}
        <span
          onClick={() => setShowQuiz(false)}
          className="text-[22px] text-neutral-30 cursor-pointer"
        >
          <AiOutlineClose />
        </span>
      </div>
      <div
        className={
          quizCard === 0
            ? "min-h-[320px] w-full flex flex-col justify-center items-start"
            : "min-h-[320px] w-full flex  justify-center items-center"
        }
      >
        {quizCard === 0 && (
          <div key="1" className="h-[50px] space-y-[8px]">
            <p className="text-bodyL text-neutral-70 font-medium">
              What genre of books do you prefer?
            </p>
            <p className="text-bodyS text-neutral-40 font-reg">
              Please select as many as you like.
            </p>
          </div>
        )}
        {quizCard === 0 && (
          <div key="2" className="p-0 grid grid-cols-3 gap-[32px] mt-[32.51px]">
            {genres.map((genre) => {
              return (
                <div key={genre} className="flex items-center ">
                  <label
                    htmlFor={genre}
                    className="text-neutral-70 text-bodyS font-reg cursor-pointer hover:text-primary-50 flex items-center gap-[10px]"
                  >
                    <input
                      className="border-2 border-primary-40 text-primary-40  input-circle hidden"
                      type="checkbox"
                      id={genre}
                      onClick={() => handleQuiz(genre)}
                    />
                    <div className="w-[11px] h-[11px] flex justify-center items-center rounded-full border border-primary-40 border-box p-[1px] circle"></div>
                    {genre}
                  </label>
                </div>
              );
            })}
          </div>
        )}
        {quizCard === 1 && (
          <div className="text-bodyN font-medium text-neutral-70 text-center mt-[25px] ">
            Thank you for taking our Quiz!
          </div>
        )}
      </div>

      <button
        onClick={() => saveQuizResult()}
        className="w-full h-[65px] mt-[47.49px] rounded-[4px] bg-primary-50 text-neutral-white text-h4 font-medium"
      >
        {quizCard === 0 ? "Done" : "Return to Home"}
      </button>
    </div>
  );
};

export default Quiz;
