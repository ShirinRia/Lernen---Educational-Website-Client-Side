import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import useAuth from "../../../Hooks/useAuth";
import useAllusers from "../../../Hooks/useAllusers";
const useStyles = makeStyles((theme) => ({

    typo: {

        textAlign: 'center',
        fontSize: '48px',
        paddingTop: '25px',
        paddingBottom: '25px',

    }
}));
const Userprofile = () => {
    const classes = useStyles();
    const { user } = useAuth()
    const [users] = useAllusers()
    const thisuser = users.find(userr => userr?.email == user?.email)
    // console.log(user?.email)
    // console.log('thisuser',thisuser?.role)
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                mb: 4,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                <Typography className={classes.typo}>{thisuser?.name}</Typography>
                <Avatar
                    alt={thisuser?.name}
                    src={thisuser?.photo}
                    sx={{ width: 120, height: 120 }}
                />
            </Box>
            <Divider />
            <Box sx={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center',
                my: 4
            }}>

                <TextField
                    style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                    // label="Email"
                    variant="outlined"
                    value={thisuser?.email}
                />
                <TextField
                    style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                    // label="Role"
                    variant="outlined"
                    value={thisuser?.role}
                />
                <TextField
                    style={{ padding: "0", marginBottom: "15px", width: "100%" }}
                    label="Phone Number"
                    variant="outlined"
                    value={thisuser?.phone}
                />

            </Box>
        </Box>




    );
};

export default Userprofile;