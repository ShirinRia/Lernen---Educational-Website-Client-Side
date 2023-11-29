import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import Swal from "sweetalert2";
import { useNavigate,useLocation } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth";
import useAxiospublic from "../../../Hooks/useAxios/useAxiospublic";


const Sociallogin = () => {
    const { signgoogle } = useAuth()
    const axiosPublic = useAxiospublic
    const navigate=useNavigate()
    const location = useLocation()
    // google
    const handlegoogle = () => {
       
	const from = location.state?.from?.pathname || "/";
        signgoogle()
            .then((result) => {

                // The signed-in user info.
                const user = result.user;
                console.log(user)
               
                const userinfo = {
                    email:user?.email,
                    name:user?.displayName,
                    lastloggedat: user?.metadata?.lastSignInTime
                }

                const url = '/users'
                axiosPublic.post(url, userinfo)
                    .then(response => {
                        console.log(response);
                        if (response.data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Sign In!',
                                text: 'Sign In with google Successfully',
                                icon: 'success',
                                confirmButtonText: 'Explore'
                            })
                        }
                        navigate('/');
                    })

                    // navigate(from, { replace: true });
                  
            })
            .catch((error) => {

                const errorMessage = error.message;

                if (errorMessage === "Firebase: Error (auth/invalid-login-credentials).")

                    Swal.fire({
                        title: "Invalid Credential",
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
            });

    }
    return (
        <div>
            <div className="divider"></div>
            <div>
                {/* <button  className="btn"> Google</button> */}
                <button onClick={handlegoogle} style={{ marginBottom:"15px",marginTop:"25px", width:"100%", padding:'15px 15px' }}> 
                            <FcGoogle /> Continue with Google </button>
            </div>

        </div>
    );
};

export default Sociallogin;