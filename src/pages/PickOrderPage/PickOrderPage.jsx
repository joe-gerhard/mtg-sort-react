import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import PickOrderDisplay from "../../components/PickOrderDisplay";
import LoadingBar from "../../components/LoadingBar";

const PickOrderPage = ({ match, history }) => {
  const [pickOrder, setPickOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchPickOrder = () => {
      setIsLoading(true);
      db.collection("pick-orders")
        .doc(match.params.id)
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log("No such document!");
          } else {
            if (isMounted) {
              setPickOrder(doc.data());
              setIsLoading(false);
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
      {isLoading ? <LoadingBar /> : <PickOrderDisplay pickOrder={pickOrder} history={history}/>}
    </>
  );
};

export default PickOrderPage;
