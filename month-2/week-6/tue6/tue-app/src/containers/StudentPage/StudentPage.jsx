import StudentCard from "../../component";
import data from "../../assets/data/StudentData";
import { useParams } from "react-router-dom";
const StudentPage = () => {
    const params = useParams();

    const studentId = params.studentId;
    return <StudentCard student={data[studentId]}></StudentCard>;
};
export default StudentPage;
