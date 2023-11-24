import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from "@material-ui/core/TextField";
import { palette } from '@mui/system';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { createTheme } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

  const useStyles = makeStyles((theme) => ({
   
    typo: {
      
      textAlign: 'center',
      fontSize:'24px'

    }
  }));
const Login = () => {
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <Container sx={{ width: '100vw',  mx: "auto", my:'16px', border: 1 }}>
            <Box >
           
                <form onSubmit={handleSubmit(onSubmit)}>
                <Typography className={classes.typo}>Log in to your Lernen account</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                       
                        alignItems: 'center',
                        border:1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        // bgcolor: 'green'
                    }}
                    >
                        
                       
                        <button  style={{ marginBottom:"15px", width:"50%", padding:'15px 0' }}> 
                            <FcGoogle /> Continue with Google </button>
                        {/* register your input into the hook by invoking the "register" function */}
                        {/* <input defaultValue="test" {...register("example")} /> */}
                        <TextField
                            style={{ padding: "0",marginBottom:"15px", width:"50%"   }}
                            label="Email"
                            variant="outlined"
                        />
                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField
                            style={{ padding: "0",marginBottom:"15px", width:"50%"  }}
                            label="Password"
                            variant="outlined"
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
               <Typography className={classes.typo}>Don't have an account?<Link to={'/signup'}>Sign up</Link></Typography> 
            </Box>
         
        </Container>
    );
};

export default Login;