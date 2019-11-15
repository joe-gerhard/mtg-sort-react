import React, { useState, useEffect } from "react";
import { StyledProfilePage, Row, Cell, Table } from "./styles";
import { Button } from "./styles";
import { db } from "../../utils/firebase";
import DeleteButton from "../../components/DeleteButton";

const ProfilePage = ({ user, sets, activeSet, handleChangeSet }) => {
  const [pickOrders, setPickOrders] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPickOrders = () => {
      db.collection("pick-orders")
        .where("user", "==", user.uid)
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          if (isMounted) {
            data.sort((a, b) => {
              return new Date(b.dateCreated) - new Date(a.dateCreated)
            })
            setPickOrders(data);
          }
        });
    };

    fetchPickOrders();

    return () => {
      isMounted = false;
    };
  }, [user.uid, pickOrders]);

  const handleCreateNewPickOrder = () => {
    db.collection("pick-orders").add({
      name: "New Pick Order",
      user: user.uid,
      set: activeSet,
      dateCreated: Date()
    });
    setPickOrders([...pickOrders]);
  };

  const handleDeletePickOrder = id => {
    db.collection("pick-orders")
      .doc(id)
      .delete();
  };

  return (
    <StyledProfilePage>
      <header>
        <h1>{user.displayName}'s Profile</h1>
      </header>
      <div>
        <h2>Pick Orders</h2>
        <Table>
          <Row head>
            <Cell>Name</Cell>
            <Cell>Set</Cell>
            <Cell>Date Created</Cell>
            <Cell></Cell>
          </Row>
          {pickOrders &&
            pickOrders.map(pickOrder => (
              <Row key={pickOrder.id}>
                <Cell>{pickOrder.name}</Cell>
                <Cell>{pickOrder.set}</Cell>
                <Cell>{pickOrder.dateCreated.slice(0, 15)}</Cell>
                <Cell>
                  <DeleteButton
                    handleClick={handleDeletePickOrder}
                    id={pickOrder.id}
                  />
                </Cell>
              </Row>
            ))}
          <Row>
            <Cell>
              <Button onClick={handleCreateNewPickOrder}>
                Create New Pick Order
              </Button>
            </Cell>
            <Cell>
              <select value={activeSet} onChange={handleChangeSet}>
                {sets &&
                  sets.map(
                    set =>
                      (set.type === "core" || set.type === "expansion") && (
                        <option key={set.code} value={set.code}>
                          {set.code}
                        </option>
                      )
                  )}
              </select>
            </Cell>
            <Cell></Cell>
            <Cell></Cell>
          </Row>
        </Table>
      </div>
    </StyledProfilePage>
  );
};

export default ProfilePage;
