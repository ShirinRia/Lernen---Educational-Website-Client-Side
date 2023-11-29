import Swal from 'sweetalert2'
import useAxiossecure from './useAxios/useAxiossecure';
import { useMutation } from '@tanstack/react-query';

const usePostmutation = () => {
    const axiosSecure=useAxiossecure
    const mutation = useMutation({
        mutationFn: (newTodo) => {
          return axiosSecure.post(`/newinstructor`, newTodo)
          .then(function (response) {

              console.log(response);
              if (response.data.insertedId) {
                  Swal.fire({
                      title: 'Success!',
                      text: 'Thanks for your registration. We will let you know when admin approved your registration request',
                      icon: 'success',
                      confirmButtonText: 'OK'
                  })
                  // refetch()
                //   reset()
              }
          })
          .catch(function (error) {
              console.log(error);
              Swal.fire({
                  title: 'Something Went Wrong!',
                  text: error,
                  icon: 'error',
                  confirmButtonText: 'OK'
              })
          });
        },
      })
    return mutation
};

export default usePostmutation;