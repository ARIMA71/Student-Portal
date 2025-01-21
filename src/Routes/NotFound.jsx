import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f8f9fa', 
            color: '#333',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>404 | Not Found :</h1>
            <button 
                data-testid="back" 
                onClick={() => navigate(-1)}
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    color: '#ffffff',
                    backgroundColor: '#0077b6', 
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#005f8a'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#0077b6'}
            >
                Go Back
            </button>
        </div>
    );
};

export default NotFound;
