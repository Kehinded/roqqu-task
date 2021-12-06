import React from "react";
import TextTitle from "../fragments/TextTitle";
import "../styles/TypeSection.css";
import { typeDetails } from "../store/DefaultValues";
import Card from "../fragments/Card";

const TypeSection = () => {
  return (
    <div className="type-section">
      <TextTitle
        text="WE WELCOME YOU TO"
        heading="A seamless way to trade cryptocurrency"
      />
      <div className="card-box">
        {typeDetails.map((child, index) => {
          const { text, title } = child;
          return <Card key={index} text={text} title={title} />;
        })}
      </div>
    </div>
  );
};

export default TypeSection;
