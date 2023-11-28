import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';
import TextField from "@material-ui/core/TextField";
import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Swal from 'sweetalert2'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import useAxiossecure from "../../../Hooks/useAxios/useAxiossecure";
import { styled } from '@mui/system';
import useAuth from "../../../Hooks/useAuth";
const useStyles = makeStyles((theme) => ({

    typo: {

        textAlign: 'center',
        fontSize: '48px',
        paddingTop: '25px',
        paddingBottom: '25px',

    }
}));
const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

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
const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
const Addclass = () => {


    const classes = useStyles();
    const {user}=useAuth()
    const axiosSecure = useAxiossecure()
   
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = async (data) => {

        console.log(data)
        const status = 'Pending'
        const title = data.title;
        const name = data.name;
        const email = data.email;
        const price = data.price;
        const description = data.description;
        const photo = data.photo
        const newclass = { title, name, email, price, description,status, photo }
        console.log(newclass)
        const url = `/classes`;
        axiosSecure.post(url, newclass)
            .then(function (response) {
                console.log(response);
                if (response.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your course has been added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    reset()
                }
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    title: 'Something Went Wrong!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });

    }
    return (
        <Box >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography className={classes.typo}>
                    Create an Engaging Course</Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 2,
                    alignItems: 'center',

                    // bgcolor: 'green'
                }}
                >
                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                        label="Title"
                        variant="outlined"
                        {...register("title")}
                    />
                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                        // label="Your Name"
                        value={user?.displayName}
                        variant="outlined"
                        {...register("name")}
                    />

                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                        value={user?.email}
                        variant="outlined"
                        {...register("email")}
                    />
                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                        label="Price"
                        variant="outlined"
                        {...register("price")}
                    />
                    <Textarea  style={{ padding: "0", marginBottom: "15px", width: "100%", gridColumn: 'span 2'}} minRows={3} placeholder="Description" variant="outlined"  {...register("description")}/>
                    {/* <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%", gridColumn: 'span 2', gridRow: 'span 2' }}
                        label="Description"
                        variant="outlined"
                        {...register("description")}
                    /> */}


                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%", gridColumn: 'span 2' }}
                        label="Photo URL"
                        variant="outlined"
                        {...register("photo")}
                    />
                </Box>

                <button
                    style={{ padding: "15px 0px", marginBottom: "15px", width: "100%", fontSize: '24px', background: "#dd33fa", outline: '0', color: "white" }}

                    // variant="outlined"

                    type="submit">
                    Create Course
                </button>


            </form>

        </Box>
    );
};

export default Addclass;