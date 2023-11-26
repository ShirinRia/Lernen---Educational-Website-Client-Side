import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
// import { DataGridPro } from '@mui/x-data-grid-pro';

const Teacherrequestdat = ({ instructors }) => {
    
    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        
        
        {
          field: 'category',
          headerName: 'Category',
          width: 150,
          editable: true,
        },
        
        {
          field: 'experience',
          headerName: 'Experience',
      
          width: 110,
          editable: true,
        },
        
      ];

     
      console.log(instructors)
      return (
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={instructors}
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

export default Teacherrequestdat;
