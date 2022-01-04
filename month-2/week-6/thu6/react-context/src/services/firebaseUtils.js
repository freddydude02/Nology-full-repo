import firestore from "./firebase";
import firebase from "firebase/compat/app";

export const create = (collectionName, entryName) => {
    firestore.collection(collectionName).add(entryName);
};

// Read
export const readAll = async (collectionName, callback) => {
    const querySnapshot = await firestore.collection(collectionName).get();

    const newArr = [];

    querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        const searchTermData = doc.data();
        searchTermData.id = doc.id;
        newArr.push(searchTermData);
    });

    console.log("newarr", newArr);

    callback(newArr);
};

export const read = async (collectionName, id, callback) => {
    const querySnapshot = await firestore
        .collection(collectionName)
        .doc(id)
        .get();

    callback(querySnapshot.data());
};

// Update
export const update = (collectionName, id, searchTerm) => {
    firestore
        .collection(collectionName)
        .doc(id)
        .set(searchTerm, { merge: true });
};

export const updateSearchTerm = (collectionName, id) => {
    const searchTermObject = {};
    searchTermObject.timestamp = Date.now();
    searchTermObject.searchCount = firebase.firestore.FieldValue.increment(1);
    update(collectionName, id, searchTermObject);
};

// Delete
export const deleteDoc = (collectionName, id) => {
    firestore.collection(collectionName).doc(id).delete();
};
