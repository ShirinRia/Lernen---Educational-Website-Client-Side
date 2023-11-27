import { Button, Container } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link, useLoaderData } from "react-router-dom";

const Myenrollclassdetails = () => {
    const assignments=useLoaderData()
    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Title',
            // width: "max-content",
            width: 200,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 350,
            editable: true,
        },

        {
            field: 'date',
            headerName: 'Deadline',

            width: '110',
            editable: true,
        },
        {
            field:'Action',
            renderCell:(cellValues)=>{
                console.log(cellValues)
                return (
                    <Button variant="contained">Submit</Button>
                )
            }
             
          },
      

    ];
  
    return (
        <Container>
            <Button variant="contained">Teaching Evaluation Report </Button>

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