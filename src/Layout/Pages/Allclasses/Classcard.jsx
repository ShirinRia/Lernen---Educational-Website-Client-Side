import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Swal from "sweetalert2";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useAxiossecure from '../../../Hooks/useAxios/useAxiossecure';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from "@material-ui/core/TextField";
import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import './Classcard.css'
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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Classcard = ({ classe, refetch,isallclassnav }) => {
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { _id, title, name, email, price, description, photo } = classe
    const isteacher = false
    const isstudent = true
    const axiosSecure = useAxiossecure();
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/class/${_id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };
    const onSubmit = async (data) => {

        console.log(data)
        const title = data.title;
        const name = data.name;
        const email = data.email;
        const price = data.price;
        const description = data.description;
        const photo = data.photo
        const newclass = { title, name, email, price, description, photo }
        console.log(newclass)
        const url = `/updatecourse/${_id}`;
        axiosSecure.put(url, newclass)
            .then(function (response) {
                console.log(response);
                if (response.data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank You'
                    })
                    refetch()
                    reset()
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Update FAILED',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
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
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
            sx={{fontWeight:700}}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img src={photo} alt="" height={50} width={50} />
                    </Avatar>
                }

                title={title}
                subheader={name}
            />
            <CardMedia
                component="img"
                height="194"
                image={photo}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    enrolled this course
                </Typography>
                <Typography variant="body2"  sx={{fontWeight:700, fontSize:'16px'}}>
                   $ {price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {
                    isteacher & !isallclassnav ? <div>
                        <div>
                            <Button onClick={handleOpen} variant="contained" >Update</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"

                            >
                                <Box sx={style}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Typography className={classes.typo}>
                                            Update Course</Typography>

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
                                                label="Your Name"
                                                variant="outlined"
                                                {...register("name")}
                                            />

                                            <TextField
                                                style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                                                label="Email"
                                                variant="outlined"
                                                {...register("email")}
                                            />
                                            <TextField
                                                style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                                                label="Price"
                                                variant="outlined"
                                                {...register("price")}
                                            />
                                            <Textarea style={{ padding: "0", marginBottom: "15px", width: "100%", gridColumn: 'span 2' }} minRows={3} placeholder="Description" variant="outlined"  {...register("description")} />

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
                                            Update Course
                                        </button>



                                    </form>
                                </Box>
                            </Modal>
                            <Button
                                href={`/dashboard/myclass/${_id}`}
                                variant="contained"

                                type="submit">
                                See details
                            </Button>
                        </div>

                        <Button onClick={handleDelete} variant="contained" >Delete</Button></div>
                        : <div>
                            {isstudent & !isallclassnav  ?
                                <Button variant="contained" href={`/dashboard/myenrollclass/${_id}`}>Continue</Button>
                                : <div>
                                    {
                                    isallclassnav &&   <Button variant="contained" href={`/details/${_id}`}>Enroll</Button>
                                }
                                </div>
                              
                            }
                        </div>
                }
            </CardActions>

        </Card>
    );
}
export default Classcard;