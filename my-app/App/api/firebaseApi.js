import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const db = getFirestore();

// Function to read data
async function readData() {
  const querySnapshot = await getDocs(collection(db, "hmdyb"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

// Function to write data
async function writeData() {
  try {
    const docRef = await addDoc(collection(db, "hmdyb"), {
      field1: "value1",
      field2: "value2"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Call these functions to test
readData();
writeData();

export default {readData, writeData};
