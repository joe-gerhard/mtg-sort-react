import React from "react";
import { StyledCardDisplay } from "./styles";

const CardDisplay = ({ cards }) => {
  return (
    <StyledCardDisplay>
      {cards
        ? cards.map(card => {
            return (
              card.imageUrl && (
                <img key={card.id} src={card.imageUrl} alt={card.name} />
              )
            );
          })
        : "loading..."}
    </StyledCardDisplay>
  );
};

export default CardDisplay;
