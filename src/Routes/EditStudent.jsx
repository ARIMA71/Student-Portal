import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

const url = "http://localhost:3001/student";

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState({
        fullname: "",
        profilePicture: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        gender: "Male",
        programStudy: "Ekonomi",
        faculty: "",
    });

    useEffect(() => {
        fetch(`${url}/${id}`)
            .then((res) => res.json())
            .then((data) => setStudentData(data))
            .catch((err) => console.error(err));
    }, [id]);

    const faculties = {
        Ekonomi: "Fakultas Ekonomi",
        Manajemen: "Fakultas Ekonomi",
        Akuntansi: "Fakultas Ekonomi",
        "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
        "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
        "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
        "Teknik Sipil": "Fakultas Teknik",
        Arsitektur: "Fakultas Teknik",
        Matematika: "Fakultas Teknologi Informasi dan Sains",
        Fisika: "Fakultas Teknologi Informasi dan Sains",
        Informatika: "Fakultas Teknologi Informasi dan Sains",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prev) => ({
            ...prev,
            [name]: value,
            faculty: faculties[studentData.programStudy],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(studentData),
        }).then(() => navigate("/student"));
    };

    return (
        <>
            <NavBar />
            <Box sx={{ p: 4, backgroundColor: "#f9fafb" }}>
                <Typography variant="h4" mb={2}>
                    Edit Student
                </Typography>
                <Box mb={2}>
                    <Typography variant="subtitle1">Profile Picture Preview:</Typography>
                    <img
                        src={studentData.profilePicture || "https://via.placeholder.com/150"}
                        alt="Profile Preview"
                        style={{ maxWidth: "150px", borderRadius: "8px" }}
                    />
                </Box>
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
                    <TextField
                        label="Fullname"
                        name="fullname"
                        value={studentData.fullname}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Profile Picture URL"
                        name="profilePicture"
                        value={studentData.profilePicture}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Address"
                        name="address"
                        value={studentData.address}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        value={studentData.phoneNumber}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Birth Date"
                        name="birthDate"
                        type="date"
                        value={studentData.birthDate}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <TextField
                        select
                        label="Gender"
                        name="gender"
                        value={studentData.gender}
                        onChange={handleChange}
                        fullWidth
                    >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </TextField>
                    <TextField
                        select
                        label="Program Study"
                        name="programStudy"
                        value={studentData.programStudy}
                        onChange={handleChange}
                        fullWidth
                    >
                        {Object.keys(faculties).map((key) => (
                            <MenuItem key={key} value={key}>
                                {key}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button type="submit" variant="contained" color="primary">
                        Save Changes
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default EditStudent;
