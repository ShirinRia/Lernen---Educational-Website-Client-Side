import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
// import { DataGridPro } from '@mui/x-data-grid-pro';

const Users = ({ users }) => {
    console.log(users)
    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'photo',
          headerName: 'Image',
          width: 150,
          editable: true,
          renderCell: (params) => <img src={params.value} style={{ width: '100%', height: '100%' }} />, // renderCell will render the component
        },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
       
        
        {
          field: 'email',
          headerName: 'Email',
         
          width: 110,
          editable: true,
        },
        
      ];

     
      console.log(users)
      return (
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
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
      );
};

export default Users;