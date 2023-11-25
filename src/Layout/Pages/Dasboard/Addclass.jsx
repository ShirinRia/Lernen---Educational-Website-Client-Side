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
        fontSize: '48px',
        paddingTop:'25px', 
        paddingBottom:'25px', 

    }
}));
const Addclass = () => {
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
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
                    />
                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                        label="Your Name"
                        variant="outlined"
                    />

                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                        label="Price"
                        variant="outlined"
                    />
                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%", gridColumn: 'span 2', gridRow: 'span 2' }}
                        label="Description"
                        variant="outlined"
                    />


                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <TextField
                        style={{ padding: "0", marginBottom: "15px", width: "100%" ,gridColumn: 'span 2'}}
                        label="Photo URL"
                        variant="outlined"
                    />
                </Box>

                <button
                    style={{ padding: "15px 0px", marginBottom: "15px", width: "100%", fontSize:'24px' ,background: "#dd33fa", outline: '0', color: "white" }}

                    // variant="outlined"

                    type="submit"

                >Create Course</button>


            </form>

        </Box>
    );
};

export default Addclass;