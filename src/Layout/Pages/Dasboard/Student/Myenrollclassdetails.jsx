import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Button, Container } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useLoaderData, useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form"
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Swal from "sweetalert2";
import Modal from '@mui/material/Modal';
import useAxiossecure from '../../../../Hooks/useAxios/useAxiossecure';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import TextField from "@material-ui/core/TextField";
import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import useAuth from "../../../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
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
const Myenrollclassdetails = () => {
    const axiosSecure = useAxiossecure()
    const { user } = useAuth()
    const [newRating, setnewrating] = useState()
    const ratingChanged = (Rating) => {
        setnewrating(Rating)
    };
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const url = `/feedbacks`;
    const mutation = useMutation({
        mutationFn: (newTodo) => {
            return axiosSecure.post(url, newTodo)
                .then(function (response) {
                    console.log(response);
                    if (response.data.insertedId) {

                        Swal.fire({
                            title: 'Success!',
                            text: 'Thanks for your feedback',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        reset()
                        setOpen(false)
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
        },
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const assignments = useLoaderData()
    const { id } = useParams()
    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            // width: "max-content",
            width: 250,
            editable: true,
            headerAlign: 'center',
            align:'center'
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 450,
            editable: true,
            headerAlign: 'center',
            align:'center'
        },

        {
            field: 'date',
            headerName: 'Deadline',
            width: '110',
            editable: true,
            headerAlign: 'center',
            align:'center'
        },
        {
            field: 'Action',
            headerAlign: 'center',
            align:'center',
            renderCell: (cellValues) => {
                console.log(cellValues)
                return (
                    <Button onClick={() => handlesubmission(cellValues.row.submissioncount, cellValues.row._id, cellValues.row.courseid)} variant="contained">Submit</Button>
                )
            }

        },

    ];

    const handlesubmission = (count, id, cid) => {
        const url = `/course/assignment/${id}/${cid}`
        const newsubmission = {
            newcount: count + 1
        }
        axiosSecure.patch(url, newsubmission)
            .then(response => {
                console.log(response);
                if (response.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Submitted!',
                        // text: 'Sign In Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    const onSubmit = async (data) => {

        console.log(data)

        const description = data.description;
        const name = user?.name
        const photo = user?.photoURL
        const email = user?.email
        const rating = newRating
        const courseid = id
        const feedback = { description, rating, courseid, name, photo, email }
        console.log(feedback)
        mutation.mutate(feedback)

    }
    return (
        <Container>
            <Button sx={{ mb: 4 }} onClick={handleOpen} variant="contained">Teaching Evaluation Report </Button>
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
                            <Textarea style={{ padding: "0", marginBottom: "15px", width: "100%", gridColumn: 'span 2' }} minRows={3} placeholder="Description" variant="outlined"  {...register("description")} />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />,
                        </Box>

                        <button
                            style={{ padding: "15px 0px", marginBottom: "15px", width: "100%", fontSize: '24px', background: "#dd33fa", outline: '0', color: "white" }}

                            // variant="outlined"

                            type="submit">
                            Send
                        </button>

                    </form>
                </Box>
            </Modal>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={assignments}
                    getRowId={(row) => row._id}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    // checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>

        </Container>
    );
};

export default Myenrollclassdetails;