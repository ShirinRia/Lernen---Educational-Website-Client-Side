import useAxiospublic from '../../../../Hooks/useAxios/useAxiospublic';
import useAuth from '../../../../Hooks/useAuth';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Button, Container } from "@mui/material";
import Swal from 'sweetalert2'
import { RxCrossCircled } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
const Classdata = ({ classe, refetch }) => {
  const axiosPublic = useAxiospublic()
  const { user } = useAuth()
  const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'photo',
      headerName: 'Image',
      headerAlign: 'center',
      align: 'center',
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

      sortable: false,
      width: 60,

    },
    {
      field: 'status',
      headerName: 'Status',

      sortable: false,
      width: 100,

    },
    {
      field: 'Action',
      width: 150,
      renderCell: (cellValues) => {
        // console.log(cellValues)
        return (
          <div style={{ display: 'flex' }}>
            <Button onClick={() => handlechange(cellValues.id)} ><FaCheckCircle style={{ fontSize: '30px' }} /></Button>
            {/* <Button ><PiCrosshairDuotone /></Button> */}
            <Button onClick={() => handlechange2(cellValues.id)}><RxCrossCircled style={{ fontSize: '30px' }} /></Button>
          </div>
        )
      }

    },
  ];
  const url = `/updateclassinfo`;
  const handlechange = (id_) => {
    const info = {
      // email: user?.email,
      id: id_,
      status: 'Approved',

    }
    
    axiosPublic.patch(url, info)
      .then(response => {
        console.log(response.data);

        if (response.data.modifiedCount > 0) {
          refetch()
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
      // email: user?.email,
      id: id_,
      status: 'Rejected',
      // role: 'Student'
    }
    
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

            if (response.data.modifiedCount > 0) {
              refetch()
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