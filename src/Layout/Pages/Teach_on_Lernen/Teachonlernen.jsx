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

const useStyles = makeStyles((theme) => ({

    typo: {

        textAlign: 'center',
        fontSize: '24px'

    }
}));
const Teachonlernen = () => {
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
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const axiosSecure = useAxiossecure()
    const onSubmit = (data) => {console.log(data)
    
        const title = data.title;
        const name = data.name;
        
        const category = data.category;
        const experience = data.experience
        const photo=data.photo
        const newinstructor = { title, name, category, experience, photo }
        console.log(data)
        const url = `/newinstructor`;
        axiosSecure.post(url, newinstructor)
            .then(function (response) {
                console.log(response);
                if (response.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Thanks for your donation',
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
        <Box sx={{ width: '100vw', mx: 'auto', my: 16, border: 1 }}>
            <Container maxWidth="lg" >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography className={classes.typo}>Come teach with us</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',

                        alignItems: 'center',
                        border: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        // bgcolor: 'green'
                    }}
                    >
                        <TextField
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            label="Full Name"
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
                        {/* <InputLabel >Experience</InputLabel>
                        <Select
                           
                            
                            value={experience}
                            label="experience"
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                            onChange={handleexpChange}
                        >
                            <MenuItem value={10}>Beginner</MenuItem>
                            <MenuItem value={20}>Experienced</MenuItem>
                            <MenuItem value={30}>Some idea</MenuItem>
                        </Select> */}

                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            style={{ padding: "0", marginBottom: "15px", width: "50%", }}
                            renderInput={(params) => <TextField {...params} {...register("experience")} label="Experience" variant="outlined" />}
                        />
                        <InputLabel >Category</InputLabel>
                        <Select
                            {...register("category")}
                            value={category}
                            label="category"
                            onChange={handlecatChange}
                            style={{ padding: "0", marginBottom: "15px", width: "50%" }}
                        >
                            <MenuItem value={'web development'} >web development</MenuItem>
                            <MenuItem value={'Digital marketing'}>Digital marketing</MenuItem>
                            <MenuItem value={'Graphics Design'}>Graphics Design</MenuItem>
                            <MenuItem value={'Animation'}>Animation</MenuItem>
                            <MenuItem value={'Programming'}>Programming</MenuItem>
                        </Select>
                        <button
                            style={{ padding: "15px 0px", marginBottom: "15px", width: "50%", background: "#dd33fa", outline: '0', color: "white" }}

                            // variant="outlined"

                            type="submit"

                        >Submit for review</button>
                    </Box>

                </form>

            </Container>
        </Box>
    );
};

export default Teachonlernen;