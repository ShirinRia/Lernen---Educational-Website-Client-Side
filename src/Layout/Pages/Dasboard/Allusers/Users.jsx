import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiossecure from '../../../../Hooks/useAxios/useAxiossecure';
import { useState } from 'react';
const Users = ({ users,refetch }) => {

  const axiosSecure = useAxiossecure();
  const handlemakeadmin = (id,name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            // setchangestatus(true)
            refetch();
            Swal.fire({
              title: "Congrats",
              text: `${name}  is an admin now!!`,
              icon: "success",
            });
          }
        });
      }
    });
  };
    console.log(users)
    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'photo',
          headerName: 'Image',
          headerAlign: 'center',
          align:'center',
          width: 150,
          editable: true,
          renderCell: (params) => <img src={params.value} style={{ width: '100%', height: '100%' }} />, // renderCell will render the component
        },
        {
          field: 'name',
          headerName: 'Name',
          width: 150,
          editable: true,
          headerAlign: 'center',
          align:'center'
        },
       
        
        {
          field: 'email',
          headerName: 'Email',
          headerAlign: 'center',
          width: 310,
          editable: true,
          align:'center'
        },
        {
          field: 'role',
          headerName: 'Role',
          headerAlign: 'center',
          width: 110,
          editable: true,
          align:'center'
        },
        {
          field: 'Action',
          
          headerAlign: 'center',
          width: 150,
          
          align:'center',
          renderCell: (cellValues) => {
            console.log(cellValues)
           
            return (
            <div>
             
              
              <Button disabled={cellValues.row.role === 'Admin' ? true : false} onClick={() => handlemakeadmin(cellValues.id,cellValues.row.name)} ><RiAdminFill style={{ fontSize: '30px' }} /></Button>
               
            </div>
            )
          }
    
        },
        
      ];

     
      console.log(users)
      return (
        <Box sx={{ height: '100%', width: '100%' }}>
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