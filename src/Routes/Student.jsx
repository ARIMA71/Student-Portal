import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import CircularProgress from "@mui/material/CircularProgress"; // Material-UI
import Button from "@mui/material/Button"; // Material-UI
import Select from "@mui/material/Select"; // Material-UI
import MenuItem from "@mui/material/MenuItem"; // Material-UI
import Table from "@mui/material/Table"; // Material-UI
import TableBody from "@mui/material/TableBody"; // Material-UI
import TableCell from "@mui/material/TableCell"; // Material-UI
import TableHead from "@mui/material/TableHead"; // Material-UI
import TableRow from "@mui/material/TableRow";

const url = "http://localhost:3001/student";

const Student = () => {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const [filter, setFilter] = useState("All");

    const fetchData = () => {
        setLoading(true);
        fetch(`${url}`)
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteStudent = (id) => {
        fetch(`${url}/${id}`, {
            method: "DELETE",
        }).then(() => fetchData());
    };

    const filterStudents = students.filter((student) => {
        return filter === "All" ? students : student.faculty === filter;
    });

    return (
        <>
            <NavBar />
            <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
                <Select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{ marginBottom: "20px", width: "200px", display: "block", margin: "0 auto", marginLeft: "auto", marginRight: "0" }}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Fakultas Ekonomi">Fakultas Ekonomi</MenuItem>
                    <MenuItem value="Fakultas Teknik">Fakultas Teknik</MenuItem>
                    <MenuItem value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</MenuItem>
                    <MenuItem value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</MenuItem>
                </Select>
                {loading ? (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <CircularProgress />
                        <p>Loading...</p>
                    </div>
                ) : (
                    <Table style={{ marginTop: "20px", width: "100%", backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#0077b6" }}>
                                <TableCell style={{ color: "#fff", fontWeight: "bold" }}>No</TableCell>
                                <TableCell style={{ color: "#fff", fontWeight: "bold" }}>Full Name</TableCell>
                                <TableCell style={{ color: "#fff", fontWeight: "bold" }}>Birth Date</TableCell>
                                <TableCell style={{ color: "#fff", fontWeight: "bold" }}>Gender</TableCell>
                                <TableCell style={{ color: "#fff", fontWeight: "bold" }}>Faculty</TableCell>
                                <TableCell style={{ color: "#fff", fontWeight: "bold" }}>Program Study</TableCell>
                                <TableCell style={{ color: "#fff", fontWeight: "bold" }}>Option</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterStudents.map((student, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>
                                        <Link
                                            to={`/student/${student.id}`}
                                            style={{ color: "#0077b6", textDecoration: "none" }}
                                        >
                                            {student.fullname}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{student.birthDate}</TableCell>
                                    <TableCell>{student.gender}</TableCell>
                                    <TableCell>{student.faculty}</TableCell>
                                    <TableCell>{student.programStudy}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => deleteStudent(student.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </div>
        </>
    );
};

export default Student;
