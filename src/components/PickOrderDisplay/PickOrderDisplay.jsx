import React, { useState, useEffect } from "react";
import { Table, Row, Cell, Header, ButtonRow } from "./styles";
import { StyledPickOrderDisplay, NumberInput } from "./styles";

const PickOrderDisplay = ({ pickOrder, history }) => {
  const [inputs, setInputs] = useState({
    name: '',
    set: '',
    dateCreated: ''
  });
  const [picks, setPicks] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted && pickOrder) {
      setInputs({
        name: pickOrder.name,
        set: pickOrder.set,
        dateCreated: pickOrder.dateCreated
      });
      setPicks(pickOrder.picks);
    }
    return () => {
      isMounted = false;
    };
  }, [pickOrder]);

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleChangePickOrder = e => {
    let value = e.target.value;
    if (value > 300) value = 300;
    if (value < 0) value = 0;

    picks[e.target.name].pickOrder = value;
    setPicks([...picks]);
  };

  const handleChangeTier = e => {
    let value = e.target.value;
    if (value > 8) value = 8;
    if (value < 0) value = 0;

    picks[e.target.name].tier = value;
    setPicks([...picks]);
  };

  const handleReset = () => {
    setInputs({
      name: pickOrder.name,
      set: pickOrder.set,
      dateCreated: pickOrder.dateCreated
    });
    setPicks(pickOrder.picks);
  };

  return (
    <StyledPickOrderDisplay>
      <Header>
        <div>
          Name:
          {inputs && (
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          )}
        </div>
        <div>Set: {inputs.set}</div>
      </Header>
      <ButtonRow>
        <button onClick={() => history.goBack()}>Back</button>
        <button onClick={handleReset}>Reset</button>
        <button>Save Changes</button>
      </ButtonRow>
      <Table>
        {picks &&
          picks.map((pick, idx) => (
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
