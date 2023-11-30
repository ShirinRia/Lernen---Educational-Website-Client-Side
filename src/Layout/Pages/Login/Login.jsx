import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from "@material-ui/core/TextField";
import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import useAuth from "../../../Hooks/useAuth";
import useAxiospublic from "../../../Hooks/useAxios/useAxiospublic";
import Sociallogin from "../../Components/SocialLogin/Sociallogin";
import { Button } from "@mui/material";

  const useStyles = makeStyles((theme) => ({
   
    typo: {
      
      textAlign: 'center',
      fontSize:'24px'

    },
    typo2: {
        marginBottom: '16px',
        textAlign: 'center',
        fontSize: '16px'


    },
  }));
const Login = () => {
    const {signin,signgoogle}=  useAuth()
    const location = useLocation()
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const axiosPublic=useAxiospublic()
    const navigate = useNavigate()
    const url = `/users`;
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
// google
const handlegoogle = () => {
    signgoogle()
        .then((result) => {
             // The signed-in user info.
             const user = result.user;
             const email = user.email
             const role = 'Student'
             const name = user.displayName
             let photo = user.photoURL
            //  const createat = user.metadata.creationTime
             const newuserdata = { name,role, email, photo,
                //  createdAt: createat
                 }
             console.log(newuserdata);
             axiosPublic.put(url, newuserdata)
                 .then(function (response) {
                     console.log(response);
                     if (response.data.insertedId) {
                         Swal.fire({
                             title: 'Success!',
                             text: 'Registered with email Successfully',
                             icon: 'success',
                             confirmButtonText: 'OK'
                         })
                       
                    }
                })

            navigate(location?.state ? location.state : '/')
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
                        
                        <Button onClick={handlegoogle}  sx={{ marginBottom:"15px",marginTop:"25px", border:1,width: { xs: '100%', md: '50%' },padding:'15px 0' }}> 
                            <FcGoogle />   Continue with Google </Button>
                        {/* register your input into the hook by invoking the "register" function */}
                        {/* <input defaultValue="test" {...register("example")} /> */}
                        <TextField
                            style={{ padding: "0",marginBottom:"15px", width: { xs: '100%', md: '50%' }   }}
                            label="Email"
                            variant="outlined"
                            {...register("email")}
                        />
                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField
                            style={{ padding: "0",marginBottom:"15px", width:{xs:'100%', md: '100%' }  }}
                            label="Password"
                            variant="outlined"
                            {...register("password")}
                            type="password"
                        />

                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                       
                        <Button
                            sx={{ padding: "15px 0px", width: { xs: '100%', md: '50%' }, background:"#dd33fa" , outline:'0' ,color:"white" }}
                           
                            // variant="outlined"

                            type="submit"
                           
                        >Login</Button>
                    </Box>

                </form>
                <Divider style={{ padding: "15px 0px",marginBottom:"15px"}}/>
               <Typography className={classes.typo2}> Don't have an account?<Link to={'/signup'}>Sign up</Link></Typography> 
            </Box>
         
        </Container>
    );
};

export default Login;