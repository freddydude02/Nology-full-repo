const data = [
    { firstName: "Amy", lastName: "Zhou", browniePoints: 100 },
    { firstName: "Avvi", lastName: "Singh", browniePoints: 100 },
    { firstName: "Celia", lastName: "Sostres-Roberts", browniePoints: 100 },
    { firstName: "Frederick", lastName: "Walker Ke", browniePoints: 100 },
    { firstName: "Habib", lastName: "Usman", browniePoints: 100 },
    { firstName: "Jed", lastName: "Habush", browniePoints: 100 },
    { firstName: "Pooja", lastName: "Rao", browniePoints: 100 },
    { firstName: "Roberto", lastName: "Ferreira", browniePoints: 100 },
    { firstName: "Samantha", lastName: "Lippiatt", browniePoints: 100 },
    { firstName: "Thirtha", lastName: "Mirthrakanth", browniePoints: 100 },
];
export default data.map((student, index) => {
    student.id = index;
    return student;
});
