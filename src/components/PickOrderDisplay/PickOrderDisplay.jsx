import React, { useState } from "react";
import { Table, Row, Cell, Header, ButtonRow } from "./styles";
import { StyledPickOrderDisplay, NumberInput } from "./styles";

const PickOrderDisplay = ({ pickOrder, setPickOrder, history }) => {
 
  const [picks, setPicks] = useState(init())
  const [name, setName] = useState(pickOrder.name)

  function init() {
    let picksArr = []
    pickOrder.picks.forEach(pick => {
      let temp = {
        name: pick.name,
        pickOrder: pick.pickOrder,
        tier: pick.tier
      }
      picksArr.push(temp)
    })
    return picksArr;
  }

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleChangePickOrder = e => {
    let value = e.target.value;
    if (value > 300) value = 300;
    if (value < 0) value = 0;
    let temp = [...picks];

    temp[e.target.name].pickOrder = value;
    setPicks([...temp])
  };

  const handleChangeTier = e => {
    let value = e.target.value;
    if (value > 8) value = 8;
    if (value < 0) value = 0;
    let temp = [...picks];
    temp[e.target.name].tier = value;
    setPicks([...temp])
  };

  const handleReset = () => {
    setPicks(init())
    setName(pickOrder.name)
  };

  return (
    <StyledPickOrderDisplay>
      <Header>
        <div>
          Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
        </div>
        <div>Set: {pickOrder.set}</div>
      </Header>
      <ButtonRow>
        <button onClick={() => history.goBack()}>Back</button>
        <button onClick={handleReset}>Reset</button>
        <button>Save Changes</button>
      </ButtonRow>
      <Table>
        {picks.map((pick, idx) => (
            <Row key={pick.name} even={idx % 2 === 0}>
              <Cell wide>{pick.name}</Cell>
              <Cell>
                Pick Order:
                <NumberInput
                  name={idx}
                  type="number"
                  value={pick.pickOrder}
                  onChange={handleChangePickOrder}
                />
              </Cell>
              <Cell>
                Tier:
                <NumberInput
                  name={idx}
                  type="number"
                  value={pick.tier}
                  onChange={handleChangeTier}
                />
              </Cell>
            </Row>
          ))}
      </Table>
    </StyledPickOrderDisplay>
  );
};

export default PickOrderDisplay;
