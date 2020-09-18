import { db } from "../firebase";

export const addResults = (data, authId) => {
  db.collection("data")
    .doc(`${authId}`)
    .set(data)
    .then(function (docRef) {
      console.log(docRef);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

export const getResults = (authId, setValues, setGpa) => {
  db.collection("data")
    .doc(`${authId}`)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        setGpa({
          totalGPA: doc.data().totalGPA,
          yearlyTotalGPAs: doc.data().yearlyTotalGPAs,
        });
        setValues(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
};
