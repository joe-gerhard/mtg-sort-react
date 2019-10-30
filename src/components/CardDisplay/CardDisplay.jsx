import React from "react";
import { StyledCardDisplay, StyledImg } from "./styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CardDisplay = ({ cards, filter }) => {
  return (
    <StyledCardDisplay>
      <TransitionGroup>
        {cards &&
          cards.map(card => {
            let filtered = false;
            card.colors.forEach(color => {
              if (!filtered) filtered = filter[color];
            });
            if (card.colors.length === 0 && filter.Colorless) filtered = true;

            return (
              card.imageUrl &&
              !card.type.includes("Adventure") &&
              !filtered && (
                <CSSTransition key={card.id} timeout={500} classNames="card">
                  <StyledImg
                    key={card.id}
                    src={card.imageUrl}
                    alt={card.name}
                  />
                </CSSTransition>
              )
            );
          })}
      </TransitionGroup>
    </StyledCardDisplay>
  );
};

export default CardDisplay;
