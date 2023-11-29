import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Swal from "sweetalert2";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useAxiossecure from '../../../../Hooks/useAxios/useAxiossecure';
import useAssignment from '../../../../Hooks/useAssignment'
import BasicCard from './BasicCard'
import Divider from '@mui/material/Divider';
import TextField from "@material-ui/core/TextField";
import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
const useStyles = makeStyles((theme) => ({

    typo: {

        textAlign: 'center',
        fontSize: '32px !important',
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

const Teacherclassdetails = () => {
    const { id } = useParams()
   const [assignments,refetch]=useAssignment()

    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()
    const url = `/createassignment`;
    const mutation = useMutation({
        mutationFn: (newTodo) => {
          return axiosSecure.post(url, newTodo)
          .then(function (response) {
              console.log(response);
              setOpen(false)
              if (response.data.insertedId) {
                  Swal.fire({
                      title: 'Success!',
                      text: 'Assignment Added',
                      icon: 'success',
                      confirmButtonText: 'OK'
                  })
                  reset()
                  refetch()
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
    const [enrollmentlength,setenrollmentlength]=useState(0)
   
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const axiosSecure = useAxiossecure();
    useEffect(() => {
        
        let url = `/totalenrollment/${id}`
        axiosSecure.get(url)
            .then(res => {
                setenrollmentlength(res.data.length)
            })


    //    url = `/totalassignment/${id}`
    //     axiosSecure.get(url)
    //         .then(res => {
    //             setassignmentlength(res.data.length)
    //         })
    }, [axiosSecure, id])
    const assignment=assignments.filter(classe => classe.courseid ===id)
    console.log(assignment.length)
    const perdaycount = assignment.reduce((total, item) => total + item.submissioncount, 0);
    const onSubmit = async (data) => {

        console.log(data)
        const title = data.title;
        const courseid = id
        const description = data.description;
        const date = data.date
        const submissioncount = 0

        const newassignment = { courseid, title, date, description, submissioncount }
        console.log(newassignment)
        mutation.mutate(newassignment)
        

    }
    return (

        <Container fullwidth>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>

                <BasicCard title={'Total enrollment'} value={enrollmentlength} />
                <BasicCard title={'Total Assignment'} value={assignment.length}/>
                <BasicCard title={'Per Day Assignment Submission'} value={perdaycount}/>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'end', mt: 4 }}>
                <Button onClick={handleOpen} variant="contained">Create Assignment</Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"

                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Typography className={classes.typo}>
                                Create an Assignment</Typography>

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
                                    // label="Deadline"
                                    variant="outlined"
                                    type='date'
                                    //    onFocus={(this.type='date')}
                                    // onfocus="(this.type='date')"
                                    {...register("date")}
                                />
                                <Textarea style={{ padding: "0", marginBottom: "15px", width: "100%", gridColumn: 'span 2' }} minRows={3} placeholder="Description" variant="outlined"  {...register("description")} />

                                {errors.exampleRequired && <span>This field is required</span>}

                            </Box>

                            <button
                                style={{ padding: "15px 0px", marginBottom: "15px", width: "100%", fontSize: '24px', background: "#dd33fa", outline: '0', color: "white" }}

                                // variant="outlined"

                                type="submit">
                                Create Assignment
                            </button>

                        </form>
                    </Box>
                </Modal>
            </Box>

        </Container>

    );
};

export default Teacherclassdetails;