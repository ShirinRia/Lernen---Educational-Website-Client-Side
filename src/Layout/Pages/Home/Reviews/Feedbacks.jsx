// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactStars from "react-rating-stars-component";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import useAllreview from '../../../../Hooks/useAllreview';
import { Avatar, Box, Typography } from '@mui/material';

const Feedbacks = () => {
    const [reviews, refetch] = useAllreview()
    return (

        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            sx={{ mx: '8px' }}
        >
            {
                reviews.map(review => <SwiperSlide key={review._id}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' ,alignItems:'center' }}>
                        <div><Avatar
                            alt="Remy Sharp"
                            src={review.photo}
                            sx={{ width: 120, height: 120 }}
                        />
                            <Typography component="div" variant="h5">
                                {review.name}
                            </Typography>
                            <ReactStars
                                count={5}
                                value={review.rating}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            /></div>

                    </Box>
                    <Typography variant="subtitle1" color="darkblue" component="div" sx={{ mx: 12, my: 4, textAlign: 'center' }}>
                        {review.description}
                    </Typography>
                </SwiperSlide>)
            }
        </Swiper>

    );
}
export default Feedbacks;