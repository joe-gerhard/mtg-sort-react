import React from "react";
import { StyledCardDisplay, StyledImg } from "./styles";

const CardDisplay = ({ cards, filter }) => {
  return (
    <StyledCardDisplay>
      {cards
        ? cards.map(card => {
          let filtered = false;
            card.colors.forEach(color => {
              if (!filtered) filtered = filter[color]
            })
            if (card.colors.length === 0 && filter.Colorless) filtered = true;

            return (
              (card.imageUrl && !card.type.includes("Adventure") && !filtered) && (
                <StyledImg key={card.id} src={card.imageUrl} alt={card.name} />
              )
            );
          })
        : "loading..."}
    </StyledCardDisplay>
  );
};

export default CardDisplay;
