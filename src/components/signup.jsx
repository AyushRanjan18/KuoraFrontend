import React , { useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignUp() {
  const classes = useStyles();

    const [userRegistration, setuserRegistration] = useState({
        firstName :"",
        lastName :"",
        email : "",
        password : "",
        selected : "",
        bio : "",
        check : "",
    });

   const handleInput =(e)=> {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setuserRegistration({... userRegistration, [name] : value})
   }
   const [records, setrecords] = useState([]);
    const handleSubmit =(e)=> {
        e.preventDefault();

        const newRecord = {... userRegistration,id : new Date().getTime().toString()}
        console.log(records);
        setrecords([... records, newRecord]);
        setuserRegistration({firstName :"",
        lastName :"",
        email : "",
        password : "",
        selected : "",
        bio : "",
        check : "",});
    }
     return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={userRegistration.firstName}
                onChange={handleInput}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={userRegistration.lastName}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={userRegistration.email}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={userRegistration.password}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs ={12}>
            <FormControl component="fieldset" required fullWidth value={userRegistration.selected}
                onChange={handleInput}> 
            <FormLabel component="legend"  style={{marginBottom : "15px"}}>Register as -</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top"  style={{marginBottom : "-15px"}}>
                    <FormControlLabel
                    value="teaching"
                    control={<Radio color="primary" />}
                    label="Teacher"
                    labelPlacement="start"
                    required
                    />
                    <FormControlLabel
                    value="non-teaching"
                    control={<Radio color="primary" />}
                    label="Non-Teaching Staff"
                    labelPlacement="start"
                    required
                    />
                    <FormControlLabel
                    value="student"
                    control={<Radio color="primary" />}
                    label="Student"
                    labelPlacement="start"
                    required
                    />
                </RadioGroup>
    </FormControl>
            </Grid>
            <Grid item xs ={12}>
                <TextField
                value={userRegistration.bio}
                onChange={handleInput}
                name="bio"
                id="standard-multiline-static"
                label="Write something about yourself !"
                multiline
                rows={4}
                fullWidth
                autoComplete="Bio"
            />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" value={userRegistration.check}
                onChange={handleInput} />}
                label="I agree to the Terms and Conditions"
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUp; 