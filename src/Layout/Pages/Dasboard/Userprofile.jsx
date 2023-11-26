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
const Userprofile = () => {
    return (
        <Box>
            <Box sx={{
            display: 'flex', 

            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
                <Typography>Shirin</Typography>
                <Typography>Shirin</Typography>
            </Box>
            <Divider/> 
            <Box sx={{
            display: 'flex', flexDirection: 'column',

            alignItems: 'center',
            my:8
        }}>

            <TextField
                style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                label="Email"
                variant="outlined"
            />

            <TextField
                style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                label="Password"
                variant="outlined"
            />

            <TextField
                style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                label="Role"
                variant="outlined"
            />
            <TextField
                style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                label="Phone Number"
                variant="outlined"
            />

        </Box>
        </Box>




    );
};

export default Userprofile;