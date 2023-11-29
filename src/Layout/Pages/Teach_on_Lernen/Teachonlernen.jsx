import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from "@material-ui/core/TextField";
import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import Swal from 'sweetalert2'
import useAxiossecure from "../../../Hooks/useAxios/useAxiossecure";
import { FormControl } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import useAllclass from "../../../Hooks/useAllclass";
import useTeacher from "../../../Hooks/useTeacher";
import useStatus from "../../../Hooks/useStatus";
import useAllInstructor from "../../../Hooks/useAllinstructor";
import Showcard from "./Showcard";

const useStyles = makeStyles((theme) => ({

    typo: {
        fontWeight: 600,
        marginBottom: '8px',
        textAlign: 'center',
        fontSize: '32px'

    }
}));
const Teachonlernen = () => {
    const { user } = useAuth()
    const [instructors, refetch] = useAllInstructor();
    const thisuser = instructors.find(userr => userr?.email == user?.email)
    console.log(thisuser)

    console.log(thisuser?.status)
    const options = [
        { label: 'Beginner' },
        { label: 'Experienced' },
        { label: 'SomeIdea' }
    ];
    const [experience, setexperience] = useState('');
    const [category, setcategory] = useState('');
    const handleexpChange = (event) => {
        setexperience(event.target.value);
    };
    const handlecatChange = (event) => {
        setcategory(event.target.value);
    };
    const styleclasses = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const axiosSecure = useAxiossecure()

    const onSubmit = (data) => {
        console.log(data)

        const title = data.title;
        const name = user?.displayName;
        const email = user?.email
        const status = 'Pending'
        const category = data.category;
        const experience = data.experience
        const photo = data.photo
        const newinstructor = { title, name, email, category, experience, status, photo }
        console.log(data)
        const url = `/newinstructor`;
        axiosSecure.post(url, newinstructor)
            .then(function (response) {

                console.log(response);
                if (response.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Thanks for your registration. We will let you know when admin approved your registration request',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    // refetch()
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
        <Box sx={{ width: '100vw', mx: 'auto', my: 8 }}>
            <Container maxWidth="lg" >

                {
                    thisuser
                        ? <div>
                            {
                                thisuser?.status === 'Pending'
                                    ? <Showcard title={'Your request is pending'}></Showcard>
                                    : <div>
                                        {thisuser?.status === 'Accepted' ? <Showcard title={'You are already Registered'}></Showcard>
                                            : <form onSubmit={handleSubmit(onSubmit)}>
                                                <Typography className={styleclasses.typo}>Come teach with us</Typography>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',

                                                    alignItems: 'center',
                                                    // border: 1,
                                                    bgcolor: 'background.paper',
                                                    // borderRadius: 1,
                                                    // bgcolor: 'green'
                                                }}
                                                >
                                                    <TextField
                                                        style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                                                        // label="Full Name"
                                                        value={user?.displayName}
                                                        variant="outlined"
                                                        {...register("name")}
                                                    />
                                                    {/* register your input into the hook by invoking the "register" function */}
                                                    {/* <input defaultValue="test" {...register("example")} /> */}
                                                    <TextField
                                                        style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                                                        label="Title"
                                                        variant="outlined"
                                                        {...register("title")}
                                                    />
                                                    {/* include validation with required or other standard HTML validation rules */}

                                                    {/* errors will return when field validation fails  */}
                                                    {errors.exampleRequired && <span>This field is required</span>}
                                                    <TextField
                                                        style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                                                        label="Photo URL"
                                                        variant="outlined"
                                                        {...register("photo")}
                                                    />

                                                    <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={options}
                                                        style={{ padding: "0", marginBottom: "15px", width: "50%", }}
                                                        renderInput={(params) => <TextField {...params} {...register("experience")} label="Experience" variant="outlined" />}
                                                    />

                                                    <FormControl style={{ padding: "0", marginBottom: "15px", width: "50%" }}>
                                                        <InputLabel id="demo-simple-select-label">category</InputLabel>
                                                        <Select fullWidth
                                                            {...register("category")}
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={category}
                                                            label="category"
                                                            onChange={handlecatChange}
                                                        >
                                                            <MenuItem value={'web development'} >web development</MenuItem>
                                                            <MenuItem value={'Digital marketing'}>Digital marketing</MenuItem>
                                                            <MenuItem value={'Graphics Design'}>Graphics Design</MenuItem>
                                                            <MenuItem value={'Animation'}>Animation</MenuItem>
                                                            <MenuItem value={'Programming'}>Programming</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <button
                                                        style={{ padding: "15px 0px", marginBottom: "15px", width: "50%", background: "#dd33fa", outline: '0', color: "white" }}

                                                        // variant="outlined"

                                                        type="submit"

                                                    > Request to Another </button>
                                                </Box>

                                            </form>}
                                    </div>
                            }
                        </div>
                        : <form onSubmit={handleSubmit(onSubmit)}>
                            <Typography className={styleclasses.typo}>Come teach with us</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',

                                alignItems: 'center',
                                // border: 1,
                                bgcolor: 'background.paper',
                                // borderRadius: 1,
                                // bgcolor: 'green'
                            }}
                            >
                                <TextField
                                    style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                                    // label="Full Name"
                                    value={user?.displayName}
                                    variant="outlined"
                                    {...register("name")}
                                />
                                {/* register your input into the hook by invoking the "register" function */}
                                {/* <input defaultValue="test" {...register("example")} /> */}
                                <TextField
                                    style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                                    label="Title"
                                    variant="outlined"
                                    {...register("title")}
                                />
                                {/* include validation with required or other standard HTML validation rules */}

                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}
                                <TextField
                                    style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                                    label="Photo URL"
                                    variant="outlined"
                                    {...register("photo")}
                                />

                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={options}
                                    style={{ padding: "0", marginBottom: "15px", width: "50%", }}
                                    renderInput={(params) => <TextField {...params} {...register("experience")} label="Experience" variant="outlined" />}
                                />

                                <FormControl style={{ padding: "0", marginBottom: "15px", width: "50%" }}>
                                    <InputLabel id="demo-simple-select-label">category</InputLabel>
                                    <Select fullWidth
                                        {...register("category")}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="category"
                                        onChange={handlecatChange}

                                    >
                                        <MenuItem value={'web development'} >web development</MenuItem>
                                        <MenuItem value={'Digital marketing'}>Digital marketing</MenuItem>
                                        <MenuItem value={'Graphics Design'}>Graphics Design</MenuItem>
                                        <MenuItem value={'Animation'}>Animation</MenuItem>
                                        <MenuItem value={'Programming'}>Programming</MenuItem>
                                    </Select>
                                </FormControl>
                                <button
                                    style={{ padding: "15px 0px", marginBottom: "15px", width: "50%", background: "#dd33fa", outline: '0', color: "white" }}

                                    // variant="outlined"

                                    type="submit"

                                >Submit for review</button>
                            </Box>

                        </form>
                }

            </Container>
        </Box>
    );
};

export default Teachonlernen;