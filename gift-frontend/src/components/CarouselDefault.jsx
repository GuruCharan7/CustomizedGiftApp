import image1 from '../assets/images/Birthday_Desk-29224.webp'
import image2 from '../assets/images/Anniversary-banner_Desk_16jan.jpg'
import image3 from '../assets/images/Personalised-banner_Desktop-Banner (3).webp'

function CarouselDefault() {

    return (
        <div id='tips' className='carousel-container'>
            <div className='card shadow-lg' style={{ border: 'none' }}>
                <div id="carouselExampleCaptions" className="carousel slide shadow-lg" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} alt="..." className="w-full" />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} alt="..." className="w-full" />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} alt="..." className="w-full" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">                        
                        <svg className="w-6 h-6 text-gray-800 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                        </svg>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">                    
                        <svg className="w-6 h-6 text-gray-800 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default CarouselDefault;
