import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';


import Swiper, { Pagination, Autoplay } from 'swiper';

// configure Swiper to use modules
Swiper.use([Pagination, Autoplay]);



const reviewsSlider = () => {
	new Swiper('.reviews-slider__container', {
		type: 'horizontal',
		loop: true,
		pagination: {
			el: '.reviews-slider__pagination',
			bulletClass: 'reviews-slider__dot',
			bulletActiveClass: 'reviews-slider__dot--active',
			clickable: true,
		},
		autoplay: {
			delay: 4000
		}
	});
};

export default reviewsSlider;
