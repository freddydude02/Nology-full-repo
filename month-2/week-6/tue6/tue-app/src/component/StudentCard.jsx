const StudentCard = ({ student }) => {
    console.log(student.firstName);
    return (
        <div>
            <h1>{student.firstName}</h1>
            <h1>{student.lastName}</h1>
            <h1>{student.id}</h1>
        </div>
    );
};
export default StudentCard;
