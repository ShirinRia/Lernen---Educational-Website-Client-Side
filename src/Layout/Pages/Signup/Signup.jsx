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
import { red } from "@mui/material/colors";
import { useMutation } from "@tanstack/react-query";
const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
const useStyles = makeStyles((theme) => ({

    typo: {
        marginBottom: '16px',
        textAlign: 'center',
        fontSize: '32px'

    },
    typo2: {
        marginBottom: '16px',
        textAlign: 'center',
        fontSize: '16px'


    },
    typo3: {
        marginBottom: '8px',
        textAlign: 'center',
        fontSize: '14px'

    }
}));
const Signup = () => {
    const axiosPublic = useAxiospublic()
    const classes = useStyles();
    const navigate = useNavigate()
    const url = '/users'
    const { createuser, signgoogle } = useAuth()
    const mutation = useMutation({
        mutationFn: (newTodo) => {
          return   axiosPublic.post(url, newTodo)
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
        },
      })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
  
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
                const phone = data.phone
                const role = 'Student'
                const newuserdata = { name, email, phone, photo, createdAt: createat, role }
                console.log(newuserdata);
                // update
                updateProfile(currentuser, {
                    displayName: data.name,

                    photoURL: data.photo
                })
                    .then(() => {
                        // Profile updated!

                        mutation.mutate(newuserdata)

                        navigate("/");

                    })
                    .catch((error) => {
                        console.log(error)
                        // setregerror(error.message);
                        Swal.fire({
                            title: `${error.message}`,
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    });
                reset();
            }
            )
            .catch((error) => {
                console.log(error)
                // setregerror(error.message);
                Swal.fire({
                    title: `${error.message}`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            });
    }
    // const handlegoogle = () => {
    //     signgoogle()
    //         .then((result) => {

    //             // The signed-in user info.
    //             const user = result.user;
    //             const email = user.email
    //             const role = 'Student'
    //             const name = user.displayName
    //             let photo = user.photoURL
    //             const createat = user.metadata.creationTime
    //             const newuserdata = { name,role, email, photo, createdAt: createat }
    //             console.log(newuserdata);
    //             axiosPublic.post(url, newuserdata)
    //                 .then(function (response) {
    //                     console.log(response);
    //                     if (response.data.insertedId) {
    //                         Swal.fire({
    //                             title: 'Success!',
    //                             text: 'Registered with email Successfully',
    //                             icon: 'success',
    //                             confirmButtonText: 'OK'
    //                         })
    //                     }
    //                 })
    //                 .catch(function (error) {
    //                     console.log(error);
    //                 });

    //             navigate("/");

    //         }).catch((error) => {

    //             console.log(error.message);

    //         });

    // }
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
                        {/* <button onClick={handlegoogle} style={{ marginBottom: "15px", width: "50%", padding: '15px 0' }}>
                            <FcGoogle /> Continue with Google </button> */}
                        <Box sx={{ display: 'flex', width: '50%', gap: 2, marginBottom: "15px" }}>
                            <TextField
                                style={{ padding: "0", width: "50%" }}
                                label="Full Name"
                                variant="outlined"
                                type="text"

                                {...register("name", { required: true })}
                            />

                            <TextField
                                style={{ padding: "0", width: "50%" }}
                                label="Phone Number"
                                variant="outlined"
                                type="text"

                                {...register("phone")}
                            />

                        </Box>
                        {errors.name && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Name is required</span>}
                        {/* register your input into the hook by invoking the "register" function */}
                        {/* <input defaultValue="test" {...register("example")} /> */}
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Email"
                            variant="outlined"
                            type="email"

                            {...register("email", { required: true })}
                        />
                        {errors.email && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Email is required</span>}
                        {/* include validation with required or other standard HTML validation rules */}
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Password"
                            variant="outlined"
                            type="password"

                            {...register("password", {
                                required: true, minLength: 6,
                                maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                        />
                        {/* {errors.password && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password is required</span>} */}
                        {errors.password?.type === 'required' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must be 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must be less than 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Password must have one Uppercase one lower case, one number and one special character.</span>}

                        <TextField
                            style={{ padding: "0", marginBottom: '15px', width: "50%" }}
                            label="Photo URL"
                            variant="outlined"
                            {...register("photo", { required: true },)}

                            type="url"
                        />
                        {errors.photo && <span style={{ color: 'red', fontWeight: 600, marginBottom: '15px' }}>Photo is required</span>}
                        <button
                            style={{ padding: "15px 0px", marginBottom: "15px", width: "50%", background: grey[900], outline: '0', color: "white" }}

                            // variant="outlined"

                            type="submit"

                        >Sign Up</button>
                    </Box>


                </form>
                <Divider style={{ padding: "5px 0px", marginBottom: "5px" }} />
                <Typography className={classes.typo2}>Already have an account?<Link to={'/login'}>Log in</Link></Typography>


            </Container>
        </Box>
    );
};

export default Signup;