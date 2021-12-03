let frederick = {
    firstName: "Federick",
    middleName: "Walker",
    lastName: "Ke",
    eyeColor: "brown",
    hairColor: "dark-brown",
    age: 19,
    yearOfBirth: 2002,
    height: 180,
    gender: "male",
    isMarried: "false",
    nationality: "Chinese",
    occupation: "student",
};
const samantha = {
    firstName: "Samantha",
    middleName: "Louise",
    lastName: "Lippiatt",
    age: 39,
    yearOfBirth: 1982,
    isMarried: true,
    gender: "female",
    hairColor: "blonde",
    eyeColor: "blue",
    nationality: "Australian",
    height: 160,
    occupation: "Trainee software developer",
};
const myDetails = {
    firstName: "Thirtha",
    middleName: "nan",
    lastName: "Mithrakanth",
    age: 25,
    gender: "female",
    isMarried: true,
    haircolor: "black",
    nationality: "Indian",
    eyeColor: "black",
    occupation: "trainee software developer",
    yearOfBirth: 1996,
    height: 165,
};

const print = (object) =>
    console.log(object.age, object.firstName, object.eyeColor);

print(frederick);
print(samantha);
print(myDetails);
