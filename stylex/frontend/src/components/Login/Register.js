// import * as React from 'react';
// import { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './Style.css';
// import { Link, useNavigate } from 'react-router-dom';

// import Navbar from '../Navbar/Navbar';

// const defaultTheme = createTheme();

// export default function SignUp() {
//     const navigate = useNavigate();
//     const [details, setDetails] = useState(
//         {
//             "firstName": "",
//             "lastName": "",
//             "email": "",
//             "password": ""
//         }
//     )
//     const insert = (event) => {

//         setDetails({ ...details, [event.target.name]: event.target.value })


//     }
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { firstName, lastName, email, password } = details;

//         const customer = { firstName, lastName, email, password };
//         console.log(customer);

//         fetch("http://localhost:8080/postCustomer", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(customer)
//         }).then(() => {
//             console.log("New customer Added")
//             setDetails({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 password: ""
//             });
//             navigate('/login')
//         })


//     };

//     return (
//         <div className='total'>
//             <div className='login-image-container'>
//                 <img src='https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_640.jpg' />
//             </div>
//             <div className='login-container'>
//             <ThemeProvider theme={defaultTheme}>
//                 <Container component="main" maxWidth="xs" className='userContainer'>
//                     <CssBaseline />
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'black' }}>
//                             <Link to="/" style={{textDecoration:'none'}}> <LockOutlinedIcon /> </Link>
//                         </Avatar>
//                         <Typography component="h1" variant="h5">
//                             Sign up
//                         </Typography>
//                         <Box component="form" noValidate
//                             onSubmit={handleSubmit}
//                             sx={{ mt: 3 }}>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         autoComplete="given-name"
//                                         name="firstName"
//                                         required
//                                         fullWidth
//                                         id="firstName"
//                                         value={details.firstName}
//                                         label="First Name"
//                                         autoFocus
//                                         onChange={insert}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         id="lastName"
//                                         label="Last Name"
//                                         name="lastName"
//                                         value={details.lastName}
//                                         autoComplete="family-name"
//                                         onChange={insert}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         id="email"
//                                         label="Email Address"
//                                         name="email"
//                                         value={details.email}
//                                         autoComplete="email"
//                                         onChange={insert}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         name="password"
//                                         label="Password"
//                                         type="password"
//                                         id="password"
//                                         value={details.password}
//                                         autoComplete="new-password"
//                                         onChange={insert}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <FormControlLabel
//                                         control={<Checkbox value="allowExtraEmails" color="primary" />}
//                                         label="Hereby I allow to send updates via email"
//                                     />
//                                 </Grid>
//                             </Grid>
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 Sign Up
//                             </Button>
//                             <Grid container justifyContent="flex-end">
//                                 <Grid item>
//                                     <Link to="/login" variant="body2">
//                                         Already have an account? Sign in
//                                     </Link>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </Box>
//                 </Container>
//             </ThemeProvider>
//             </div>
//         </div>
//     );
// }








import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const insert = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { firstName, lastName, email, password } = details;

        let valid = true;

        if (!validateEmail(email)) {
            setEmailError("Invalid email format");
            valid = false;
        } else {
            setEmailError("");
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 8 characters, include uppercase, lowercase, number, and special character");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (!valid) {
            return;
        }

        const customer = { firstName, lastName, email, password };
        console.log(customer);

        fetch("http://localhost:8080/postCustomer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer)
        }).then(() => {
            console.log("New customer Added");
            setDetails({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            });
            navigate('/login');
        });
    };

    return (
        <div className='total'>
            <div className='login-image-container'>
                <img src='https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_640.jpg' alt="login" />
            </div>
            <div className='login-container'>
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs" className='userContainer'>
                        <CssBaseline />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                                <Link to="/" style={{ textDecoration: 'none' }}> <LockOutlinedIcon /> </Link>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            value={details.firstName}
                                            label="First Name"
                                            autoFocus
                                            onChange={insert}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            value={details.lastName}
                                            autoComplete="family-name"
                                            onChange={insert}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            value={details.email}
                                            autoComplete="email"
                                            onChange={insert}
                                            error={!!emailError}
                                            helperText={emailError}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            value={details.password}
                                            autoComplete="new-password"
                                            onChange={insert}
                                            error={!!passwordError}
                                            helperText={passwordError}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="Hereby I allow to send updates via email"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to="/login" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
        </div>
    );
}
