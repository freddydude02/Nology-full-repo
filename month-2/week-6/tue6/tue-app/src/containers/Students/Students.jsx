import StudentCard from "../../component";
import data from "../../assets/data/StudentData";
import { Link } from "react-router-dom";
const Students = () => {
    console.log(data);
    return (
        <div>
            <h1>Andromeda Students</h1>
            <ul>
                {data.map((student) => (
                    <li key={student.id}>
                        <Link to={"/student/" + student.id}>
                            {student.firstName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Students;
