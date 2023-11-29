import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { updateProfile } from "firebase/auth";

import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import { palette } from '@mui/system';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { createTheme } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";

import useAxiospublic from "../../../Hooks/useAxios/useAxiospublic";
import useAuth from "../../../Hooks/useAuth";
const useStyles = makeStyles((theme) => ({

    typo: {
marginBottom:4,
        textAlign: 'center',
        fontSize: '24px'

    }
}));
const Signup = () => {
    const axiosPublic = useAxiospublic()
    const classes = useStyles();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const url = '/users'
    const { createuser,signgoogle } = useAuth()
    const onSubmit = async (data) => {
        console.log(data)
       
        createuser(data.email, data.password)
            .then(result => {
                console.log(result)
                const currentuser = result.user;
                const createat = currentuser.metadata.creationTime
                const name = data.name
                const email = data.email
                const photo = data.photo
                const role = 'Student'
                const newuserdata = { name, email, photo, createdAt: createat, role }
                console.log(newuserdata);
                // update
                updateProfile(currentuser, {
                    displayName: data.name,

                    photoURL: data.photo
                })
                    .then(() => {
                        // Profile updated!

                       
                        axiosPublic.post(url, newuserdata)
                            .then(response => {
                                console.log(response);
                                if (response.data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Registered with email Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                    })
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                        navigate("/");

                    })
                    .catch((error) => {
                        console.log(error)
                        // setregerror(error.message);
                        // Swal.fire({
                        //     title: `${error.message}`,
                        //     showClass: {
                        //         popup: 'animate__animated animate__fadeInDown'
                        //     },
                        //     hideClass: {
                        //         popup: 'animate__animated animate__fadeOutUp'
                        //     }
                        // })
                    });
                reset();
            }
            )
    }
    const handlegoogle = () => {
        signgoogle()
            .then((result) => {

                // The signed-in user info.
                const user = result.user;
                const email = user.email
                const role = 'Student'
                const name = user.displayName
                let photo = user.photoURL
                const createat = user.metadata.creationTime
                const newuserdata = { name,role, email, photo, createdAt: createat }
                console.log(newuserdata);
                axiosPublic.post(url, newuserdata)
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
                    .catch(function (error) {
                        console.log(error);
                    });

                navigate("/");

            }).catch((error) => {

                console.log(error.message);

            });

    }
    return (
        <Box sx={{ width: '100vw', mx: 'auto', my: 4 }}>
            <Container maxWidth="lg" >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography className={classes.typo}>Sign up and start learning</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        alignItems: 'center',
                       
                        bgcolor: 'background.paper',
                       
                        // bgcolor: 'green'
                    }}
                    >
                        <button onClick={handlegoogle} style={{ marginBottom: "15px", width: "50%", padding: '15px 0' }}>
                            <FcGoogle /> Continue with Google </button>
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Full Name"
                            variant="outlined"
                            type="text"
                            {...register("name")}
                        />
                        {/* register your input into the hook by invoking the "register" function */}
                        {/* <input defaultValue="test" {...register("example")} /> */}
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Email"
                            variant="outlined"
                            type="email"
                            {...register("email")}
                        />
                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Password"
                            variant="outlined"
                            type="password"
                            {...register("password")}
                        />

                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Photo URL"
                            variant="outlined"
                            {...register("photo")}
                            type="url"
                        />

                        <button
                            style={{ padding: "15px 0px", marginBottom: "15px", width: "50%", background: "#dd33fa", outline: '0', color: "white" }}

                            // variant="outlined"

                            type="submit"

                        >Sign Up</button>
                    </Box>

                </form>
                <Divider style={{ padding: "5px 0px", marginBottom: "5px" }} />
                <Typography className={classes.typo}>Already have an account?<Link to={'/login'}>Log in</Link></Typography>


            </Container>
        </Box>
    );
};

export default Signup;