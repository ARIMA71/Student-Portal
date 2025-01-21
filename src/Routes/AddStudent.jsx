import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

const url = "http://localhost:3001/student";

const AddStudent = () => {
    const [fullname, setFullname] = useState("");
    const [profPict, setProfpict] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("Male");
    const [programstudy, setProgramstudy] = useState("Ekonomi");
    const navigate = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            fullname,
            profilePicture: profPict,
            address,
            phoneNumber: number,
            birthDate,
            gender,
            programStudy: programstudy,
            faculty: faculties[programstudy],
        };

        fetch(`${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStudent),
        }).then(() => navigate("/student"));
    };

    return (
        <>
            <NavBar />
            <Box sx={{ p: 4, backgroundColor: "#f9fafb" }}>
                <Typography variant="h4" mb={2}>
                    Add New Student
                </Typography>
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
                    <TextField
                        label="Fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Profile Picture URL"
                        value={profPict}
                        onChange={(e) => setProfpict(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Phone Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Birth Date"
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                    <TextField
                        select
                        label="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                    </TextField>
                    <TextField
                        select
                        label="Program Study"
                        value={programstudy}
                        onChange={(e) => setProgramstudy(e.target.value)}
                        fullWidth
                    >
                        {Object.keys(faculties).map((key) => (
                            <MenuItem key={key} value={key}>
                                {key}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button type="submit" variant="contained" color="primary">
                        Add Student
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default AddStudent;
