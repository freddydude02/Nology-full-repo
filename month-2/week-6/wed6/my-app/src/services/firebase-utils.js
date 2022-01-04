import firestore from "./firebase";

export const create = (person) => {
    firestore.collection("first-projects").add({ person });
};
export const readAll = async (callBack) => {
    const querySnapshot = await firestore.collection("first-projects").get();

    const people = [];

    querySnapshot.forEach((doc) => {
        // console.log(doc.id, doc.data());
        people.push(doc.data());
    });

    callBack(people);
};

export const update = (id, person) => {
    firestore.collection("first-projects").doc(id).set(person, { merge: true });
};
export const deleteDoc = (id, person) => {
    firestore.collection("first-projects").doc(id).delete();
};
