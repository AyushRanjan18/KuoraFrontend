import React , { useState }from 'react';
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
import axios from 'axios';

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
  const [input,setInput]= useState({ 
    email :"",
    password : "",
    name :"",
    bio : "",
    //year:"",
    signupas:"",
    mobno:"",
    //pic:"../utilities/1.jpg",
    postcount:"0",
    check : ""
  })
    function handleInput(event){
      const {name, value} = event.target;

      setInput(prevInput => {
        return {
          ...prevInput,
          [name]:value
        }
      })
     
    }
    
  

    function handleSubmit(event){
        event.preventDefault();
        console.log(input);
        if(input.password != input.confirmpassword){
          alert("Not same");
          //document.getElementById("password").setAttribute("error","1")
        }
        else if((input.mobno).length<10 || (input.mobno).length>10){
          alert("Invalid mobile no")
        }
        else{
        const newRecord ={
          name: input.firstName,
          email : input.email,
          password : input.password,
          //gender : input.lastName,
          bio : input.bio,
          signupas : input.signupas,
          //year:input.year,
          mobno:input.mobno,
          //pic:input.pic,
          postcount:input.postcount,
          check : ""
        }
      
        axios.post('http://localhost:3001/register',newRecord)
        .then(response => {
          var x= response.data;
          var y= response.data.user;
          if(x.code===200){
            
            
            window.location.href="main";
          }
          else if(x.code===409){
            alert("User Already exist!");
            window.location.href="login";
          }
          //var y=response.data;
          /*if(x===200){
              window.location.href="main";
          }
          else{
              window.location.href="Error";
          }*/
          console.log(y);
      })
    }
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
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={input.name}
                onChange={handleInput}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={input.email}
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
            <Grid item xs={12} sm={6}>
              <TextField
                
                error={0}
                value={input.password}
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
            <Grid item xs={12} sm={6}>
              <TextField
                value={input.confirmpassword}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={input.mobno}
                onChange={handleInput}
                variant="outlined"
                required
                fullWidth
                id="mobno"
                label="Mobile No"
                name="mobno"
                autoComplete="mobno"
              />
            </Grid>
            <Grid item xs ={12}>
            
            <FormLabel component="legend"  style={{marginBottom : "15px"}}>Register as -</FormLabel>
                <RadioGroup row aria-label="position"  name="signupas" value = {input.signupas} onChange={handleInput}  defaultValue="top"  style={{marginBottom : "-15px"}}>
                    <FormControlLabel
                    value= "teaching"
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
    
            </Grid>
            <Grid item xs ={12}>
                <TextField
                value={input.bio}
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
                control={<Checkbox color="primary" value={input.check}
                onChange={handleInput} />}
                label="I agree to the Terms and Conditions"
                required
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
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