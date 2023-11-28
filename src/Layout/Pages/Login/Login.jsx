import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from "@material-ui/core/TextField";
import { palette } from '@mui/system';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { createTheme } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

import useAuth from "../../../Hooks/useAuth";
import useAxiospublic from "../../../Hooks/useAxios/useAxiospublic";

  const useStyles = makeStyles((theme) => ({
   
    typo: {
      
      textAlign: 'center',
      fontSize:'24px'

    }
  }));
const Login = () => {
    const {signin}=  useAuth()
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const axiosPublic=useAxiospublic()
    const navigate = useNavigate()
    const onSubmit = async(data) => {console.log(data)
        const email=data.email
        signin(data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const currentuser = userCredential.user;
            console.log(currentuser)

            const olduser = {
                email,
                lastloggedat: currentuser?.metadata?.lastSignInTime
            }
            const url = `/users`;
            axiosPublic.patch(url, olduser)
                .then(response => {
                    console.log(response);
                    if (response.data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Sign In!',
                            text: 'Sign In Successfully',
                            icon: 'success',
                            confirmButtonText: 'Explore'
                        })
                    }
                })

            // navigate(location?.state ? location.state : '/')
            navigate( '/')
        })
        .catch((error) => {
            
            const errorMessage = error.message;

            if (errorMessage === "Firebase: Error (auth/invalid-login-credentials).")
                
                Swal.fire({
                    title: "Invalid Credential",
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
        });
    }

    return (
        <Container sx={{ width: '100vw',  mx: "auto", my:'45px' }}>
            <Box >
           
                <form onSubmit={handleSubmit(onSubmit)}>
                <Typography className={classes.typo}>Log in to your Lernen account</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                       
                        alignItems: 'center',
                      
                        bgcolor: 'background.paper',
                      
                        // bgcolor: 'green'
                    }}
                    >
                        
                        <button  style={{ marginBottom:"15px",marginTop:"25px", width:"50%", padding:'15px 0' }}> 
                            <FcGoogle /> Continue with Google </button>
                        {/* register your input into the hook by invoking the "register" function */}
                        {/* <input defaultValue="test" {...register("example")} /> */}
                        <TextField
                            style={{ padding: "0",marginBottom:"15px", width:"50%"   }}
                            label="Email"
                            variant="outlined"
                            {...register("email")}
                        />
                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField
                            style={{ padding: "0",marginBottom:"15px", width:"50%"  }}
                            label="Password"
                            variant="outlined"
                            {...register("password")}
                            type="password"
                        />

                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                       
                        <button
                            style={{ padding: "15px 0px", width:"50%", background:"#dd33fa" , outline:'0' ,color:"white" }}
                           
                            // variant="outlined"

                            type="submit"
                           
                        >Login</button>
                    </Box>

                </form>
                <Divider style={{ padding: "15px 0px",marginBottom:"15px"}}/>
               <Typography className={classes.typo}> Don't have an account?<Link to={'/signup'}>Sign up</Link></Typography> 
            </Box>
         
        </Container>
    );
};

export default Login;