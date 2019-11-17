import React from "react";
import { Table, Row, Cell, Header } from "./styles";
import { StyledPickOrderDisplay, NumberInput } from "./styles";

const PickOrderDisplay = ({ pickOrder }) => {
  return (
    <StyledPickOrderDisplay>
      <Header>
        <div>Name: {pickOrder && pickOrder.name}</div>
        <div>Set: {pickOrder && pickOrder.set}</div>
      </Header>
      <Table>
        {pickOrder &&
          pickOrder.picks.map((pick, idx) => (
            <Row key={pick.pickOrder} even={idx % 2 === 0}>
              <Cell wide>{pick.name}</Cell>
              <Cell>
                Pick Order:
                <NumberInput type="number" defaultValue={pick.pickOrder} />
              </Cell>
              <Cell>
                Tier:
                <NumberInput type="number" defaultValue={pick.tier} />
              </Cell>
            </Row>
          ))}
      </Table>
    </StyledPickOrderDisplay>
  );
};

export default PickOrderDisplay;
