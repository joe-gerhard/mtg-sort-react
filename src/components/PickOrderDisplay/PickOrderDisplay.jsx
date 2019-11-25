import React, { useState } from "react";
import { Table, Row, Cell, Header, ButtonRow, ConfirmSubmitIcon } from "./styles";
import { StyledPickOrderDisplay, NumberInput } from "./styles";

const PickOrderDisplay = ({ pickOrder, setPickOrder, history, db, id }) => {
  const [picks, setPicks] = useState(init());
  const [name, setName] = useState(pickOrder.name);
  const [isSaved, setIsSaved] = useState(false);

  function init() {
    let picksArr = [];
    pickOrder.picks.forEach(pick => {
      let temp = {
        name: pick.name,
        pickOrder: pick.pickOrder,
        tier: pick.tier
      };
      picksArr.push(temp);
    });
    picksArr.sort((a, b) => {
      return a.pickOrder - b.pickOrder;
    });
    return picksArr;
  }

  const handleChange = e => {
    setName(e.target.value);
    setIsSaved(false);
  };

  const handleChangePickOrder = e => {
    let value = e.target.value;
    if (value > 500) value = 500;
    if (value < 0) value = 0;
    let temp = [...picks];

    temp[e.target.name].pickOrder = value;
    temp.sort((a, b) => {
      return a.pickOrder - b.pickOrder;
    });
    setPicks([...temp]);
    setIsSaved(false);
  };

  const handleChangeTier = e => {
    let value = e.target.value;
    if (value > 8) value = 8;
    if (value < 0) value = 0;
    let temp = [...picks];
    temp[e.target.name].tier = value;
    setPicks([...temp]);
    setIsSaved(false);
  };

  const handleReset = () => {
    setPicks(init());
    setName(pickOrder.name);
    setIsSaved(false);
  };

  const handleSubmit = e => {
    db.collection("pick-orders")
      .doc(id)
      .update({
        name: name,
        picks: [...picks]
      });
    setIsSaved(true);
  };

  return (
    <StyledPickOrderDisplay>
      <Header>
        <div>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div>Set: {pickOrder.set}</div>
      </Header>
      <ButtonRow>
        <button onClick={() => history.goBack()}>Back</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubmit}>Save Changes</button>
        <ConfirmSubmitIcon isSaved={isSaved} src="/green-check.png" alt="saved confirmation" />
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
