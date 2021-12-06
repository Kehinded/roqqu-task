import React, {useContext} from "react";
import SidebarContext from "../store/SidebarContext";
import TextTitle from "../fragments/TextTitle";
import "../styles/TypeSection.css";
import { typeDetails } from "../store/DefaultValues";
import Card from "../fragments/Card";

const TypeSection = () => {
  const sidebarCtx = useContext(SidebarContext)
  return (
    <div
      className="type-section"
      onClick={() => sidebarCtx.showsidebarFunc("close")}
    >
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
