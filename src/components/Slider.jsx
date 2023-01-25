import React, {useRef} from 'react';
import img1 from "../img/home-img/img1.png"
import img2 from "../img/home-img/img2.png"
import img3 from "../img/home-img/img3.png"

import './Slider.css';



const Slider = () => {

    const sliderContainer = useRef(null);

    

    //Funciones para las flechas

    const next = () =>{
        if(sliderContainer.current.children.length > 0){
            const firstChild = sliderContainer.current.children[0];
            const sliderWidth = sliderContainer.current.children[0].offsetWidth;
            sliderContainer.current.style.transition = `500ms ease-out all`;
            sliderContainer.current.style.transform = `translateX(-${sliderWidth}px)`;

            const backTransition = () => {
				sliderContainer.current.style.transition = 'none';
				sliderContainer.current.style.transform = `translateX(0)`;
				sliderContainer.current.appendChild(firstChild);
				sliderContainer.current.removeEventListener('transitionend', backTransition);
			}

			sliderContainer.current.addEventListener('transitionend', backTransition);

        }
    }

    const back = () =>{
        if(sliderContainer.current.children.length > 0){
            const indexOfLast = sliderContainer.current.children.length -1;
            const lastChildren = sliderContainer.current.children[indexOfLast];
            sliderContainer.current.insertBefore(lastChildren, sliderContainer.current.firstChild)

            sliderContainer.current.style.transition = 'none';
			const sliderWidth = sliderContainer.current.children[0].offsetWidth;
			sliderContainer.current.style.transform = `translateX(-${sliderWidth}px)`;
		
			setTimeout(() => {
				sliderContainer.current.style.transition = `500ms ease-out all`;
				sliderContainer.current.style.transform = `translateX(0)`;
			}, 30);
        }
    }



    return ( 
        //contenedor principal
        <div className='container'>
            {/* Contendedor del Slider */}
            <div className='slider-container' ref={sliderContainer}>
                {/* Slide */}
                <div className='slider'>
                    <img className='slider-img' src={img1} alt="imagen 1" />
                    <div className='slider-text'>
                        <h3 className=" text-xl font-bold sm:text-4xl ">CashBack</h3>
                        <p className=' text-xs w-1/2 sm:text-3xl'>You will get 5% of CashBack <i>🤑</i></p>
                    </div>
                </div>
                <div className='slider'>
                    <img className='slider-img' src={img2} alt="imagen 1" />
                    <div className='slider-text'>
                        <h3 className=" text-xl font-bold sm:text-4xl ">Super Sale</h3>
                        <p className=' text-xs w-1/2 sm:text-3xl'>Earn money buying sales <i>😜</i></p>
                    </div>
                </div>
                <div className='slider'> 
                    <img className='slider-img' src={img3} alt="imagen 1" />
                    <div className='slider-text'>
                        <h3 className=" text-xl font-bold sm:text-4xl ">Cards</h3>
                        <p className=' text-xs w-1/2 sm:text-3xl'>Now you can use every credit or debit car <i>🤪</i></p>
                    </div>
                </div>
            </div>
            
            <div className='slider-arrows-container flex justify-between z-10'>
                <button className='slider-arrow left z-10' onClick={back}>
                    <i className="bi bi-caret-left-fill text-slate-300"></i>
                </button>
                <button className='slider-arrow right z-10' onClick={next}>
                    <i className="bi bi-caret-right-fill text-slate-300"></i>
                </button>
            </div>
        </div>
     );
}
 
export default Slider;