import StudentList from "./studentList";
import useFetch from "./useFetch";

const Students = () => {
  const { error, isPending, data: students } = useFetch('/users')

  return (
    <div className="students">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { students && <StudentList students={students} /> }
    </div>
  );
}
export default Students;