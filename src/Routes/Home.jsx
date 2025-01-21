import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/ROO.png";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* Overlay warna biru laut */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 119, 182, 0.5)", // Biru laut transparan
                    zIndex: 1,
                }}
            ></Box>

            {/* Konten */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                    Welcome To Student Portal
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: "#0077b6",
                        ":hover": { backgroundColor: "#005f8e" },
                    }}
                    onClick={() => navigate("/student")}
                >
                    All Student
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
