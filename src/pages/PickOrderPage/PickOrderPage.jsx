import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import PickOrderDisplay from "../../components/PickOrderDisplay";
import LoadingBar from "../../components/LoadingBar";

const PickOrderPage = ({ match, history }) => {
  const [pickOrder, setPickOrder] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchPickOrder = () => {
      db.collection("pick-orders")
        .doc(match.params.id)
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            if (isMounted) {
              setPickOrder(doc.data());
            }
          }
        })
        .catch(err => {
          console.log("Error getting document", err);
        });
    };

    fetchPickOrder();
    return () => {
      isMounted = false;
    };
  }, [match.params.id]);

  return (
    <>
      {!pickOrder ? <LoadingBar /> : <PickOrderDisplay pickOrder={pickOrder} setPickOrder={setPickOrder} history={history} db={db} id={match.params.id}/>}
    </>
  );
};

export default PickOrderPage;
