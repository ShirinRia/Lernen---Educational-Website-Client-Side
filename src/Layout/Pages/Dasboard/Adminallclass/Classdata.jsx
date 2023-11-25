import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
// import { DataGridPro } from '@mui/x-data-grid-pro';

const Classdata = ({ classe }) => {
    
    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        {
          field: 'title',
          headerName: 'Title',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
         
          width: 110,
          editable: true,
        },
        {
          field: 'price',
          headerName: 'Price',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
         
        },
      ];

      const rows = [
        // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        {id: '65620211342e58d4eef79195', title: 'dsaa', name: 'saxds', email: 'ssria41@gmail.com', price: '896'}
        
      ];
      console.log(classe)
      return (
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={classe}
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

export default Classdata;