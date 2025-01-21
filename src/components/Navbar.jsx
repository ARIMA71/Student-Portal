import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "#ffffff",
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#0077b6" }}>
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    Student Portal
                </Typography>
                <div>
                    <Button color="inherit">
                        <Link to="/" style={linkStyle}>Home</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/student" style={linkStyle}>All Student</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/add" style={linkStyle}>Add Student</Link>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
