import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import Swal from 'sweetalert2'
import useAxiospublic from '../../../../Hooks/useAxios/useAxiospublic';
import useAuth from '../../../../Hooks/useAuth';
import { useState } from 'react';
const Teacherrequestdat = ({ instructors }) => {
  const axiosPublic = useAxiospublic()
  const { user } = useAuth()
  const [changestatus, setchangestatus] = useState(false)
  const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    align:'center'
    },


    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      editable: true,
    },

    {
      field: 'photo',
      headerName: 'Image',
      width: 150,
      editable: true,
      renderCell: (params) => <img src={params.value} style={{ width: '100%', height: '100%' }} />, // renderCell will render the component
    },

    {
      field: 'experience',
      headerName: 'Experience',

      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',

      width: 110,
      editable: true,
    },
    {
      field: 'Action',
      width: 150,
      renderCell: (cellValues) => {
        // console.log(cellValues)
        return (
          <div style={{ display: 'flex' }}>
            <Button disabled={changestatus} onClick={() => handlechange(cellValues.id)} ><FaCheckCircle style={{ fontSize: '30px' }} /></Button>
            {/* <Button ><PiCrosshairDuotone /></Button> */}
            <Button disabled={changestatus} onClick={() => handlechange2(cellValues.id)}><RxCrossCircled style={{ fontSize: '30px' }} /></Button>
          </div>
        )
      }

    },

  ];

  const handlechange = (id_) => {
    const info = {
      email: user?.email,
      id: id_,
      status: 'Accepted',
      role: 'Instructor'
    }
    const url = `/updateinstructorinfo`;
    axiosPublic.patch(url, info)
      .then(response => {
        console.log(response.data);
        const count = response.data.reduce((total, item) => total + item.modifiedCount, 0);
        console.log(count)
        if (count > 1) {
          setchangestatus(true)
          Swal.fire({
            title: 'Approved!',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      })


      .catch((error) => {

        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const handlechange2 = (id_) => {
    const info = {
      email: user?.email,
      id: id_,
      status: 'Rejected',
      role: 'Student'
    }
    const url = `/updateinstructorinfo`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(url, info)
          .then(response => {
            console.log(response.data);
            const count = response.data.reduce((total, item) => total + item.modifiedCount, 0);
            console.log(count)
            if (count > 0) {
              setchangestatus(true)
              Swal.fire({
                title: 'Rejected!',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
          })
          .catch((error) => {

            const errorMessage = error.message;
            console.log(errorMessage);
          });
      }
    });

  }
  // console.log(instructors)
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <DataGrid
      
        sx={{ textAlign: 'center' }}
        rows={instructors}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Teacherrequestdat;
