import React, { useState } from "react";
import arrow from "../../../assets/arw.png";

const Faq = () => {
  const data = [
    {
      question: "Question 1 :",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam earum illum amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam.",
    },
    {
      question: "Question 2 :",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam earum illum amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam.",
    },
    {
      question: "Question 3 :",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam earum illum amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam.",
    },
    {
      question: "Question 4 :",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam earum illum amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam.",
    },
    {
      question: "Question 5 :",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam earum illum amet consectetur adipisicing elit. Ea voluptatum assumenda totam laboriosam.",
    },
  ];
  const [selected, setSelected] = useState(null);
  const handleSelect = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
     
        <h1 className="heading">FAQs</h1>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <div className="wrapper" key={i} onClick={() => handleSelect(i)}>
                <div className="question">
                  <h3>{item.question}</h3>
                  <img src={arrow} alt="" className={selected === i ? "reverse" : ""}/>
                </div>
                <div className={selected === i ? "answers.show" : "answers"}>
                  <p>{item.answers}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
