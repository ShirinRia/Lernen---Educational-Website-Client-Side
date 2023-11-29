import { Box, Container } from "@mui/material";
import useAllclass from "../../../Hooks/useAllclass";
import Classcard from "./Classcard";
import { useState } from "react";
import './Allclasses.css'
import usePaginationclasses from "../../../Hooks/usePaginationclasses";
import Showcard from "../Teach_on_Lernen/Showcard";

const Allclasses = () => {
   

    const isallclassnav = true
   
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [classes, refetch] = usePaginationclasses(currentPage,itemsPerPage);
    const [count, setCount] = useState(0)
    // const { count } = useLoaderData();
    // const count = 76;
    const approvedClasses = classes.filter(classe => classe.status === "Approved")
    const numberOfPages = Math.ceil(approvedClasses.length / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

   
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <Container maxWidth='xl' sx={{
            my: 8
        }}>
            <Box sx={{
                mb:8,
               display: 'grid', justifyContent: 'center', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: 2,
                rowGap: 3,
            }}>
 {
                approvedClasses.map(classe => <Classcard key={classe._id} classe={classe} isallclassnav={isallclassnav}></Classcard>)
            }
            </Box>
           {!approvedClasses.length? <Showcard title={'Class will be added soon'}></Showcard> : <div className='pagination'>
                {/* <p>Current page: {currentPage}</p> */}
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>}
            

        </Container >
    );
};

export default Allclasses;