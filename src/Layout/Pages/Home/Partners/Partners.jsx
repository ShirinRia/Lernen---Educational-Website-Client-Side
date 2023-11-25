import banner from '../../../../assets/banner.jpg'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
const Partners = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const style = {


        bgcolor: 'secondary.light',
        display: 'flex',
        justifyItems: 'center',

        alignItems: 'center',
        justifyContent: 'center',


    };
    return (
        <div >
            <Typography textAlign= 'center' >
                Trusted by over 15,000 companies and millions of learners around the world
            </Typography>
            <Box sx={style}>


                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>


            </Box>
        </div>

    );
};

export default Partners;