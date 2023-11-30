import { Box, Container } from "@mui/material";

import Classcard from "./Classcard";
import { useEffect, useState } from "react";
import './Allclasses.css'

import Showcard from "../Teach_on_Lernen/Showcard";


const Allclasses = () => {

    const [products, setProducts] = useState([]);
    const isallclassnav = true
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    // const [classes, refetch] = usePaginationclasses(currentPage, itemsPerPage);
    // const axiossecure = useAxiossecure()
    //tan stack query
    // const { refetch, data: Paginationclasses = [] } = useQuery({

    //     queryKey: ["Paginationclasses", currentPage, itemsPerPage,],  // should be unique
    //     queryFn: async () => {

    //         const res = await axiossecure.get(`/Paginationclasses?page=${currentPage}&size=${itemsPerPage}`)
    //         setCount(res.data.length)
    //         return res.data
    //     },
    // });
    // const approvedClasses = Paginationclasses.filter(classe => classe.status === "Approved")
    // console.log('approvedClasses', approvedClasses.length)
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    useEffect(() => {
        fetch('https://server-ruby-pi.vercel.app/productsCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])
    console.log(itemsPerPage)
    useEffect(() => {
        fetch(`https://server-ruby-pi.vercel.app/Paginationclasses?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                
                const approvedClasses = data.filter(classe => classe.status === "Approved")
                setProducts(approvedClasses)})
    }, [currentPage, itemsPerPage]);
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);

        setCurrentPage(0);
        // refetch()
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            // refetch()
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
            // refetch()
        }
    }
    return (
        <Container maxWidth='xl' sx={{
            my: 8
        }}>
            <Box sx={{
                mb: 8,
                display: 'grid', justifyContent: 'center', gridTemplateColumns: { sm: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }, columnGap: 2,
                rowGap: 3,
            }}>
                {
                    products.map(classe => <Classcard key={classe._id} classe={classe} isallclassnav={isallclassnav}></Classcard>)
                }
            </Box>
            {!products.length ? <Showcard title={'Class will be added soon'}></Showcard> : <div className='pagination'>
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

                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>}


        </Container >
    );
};

export default Allclasses;