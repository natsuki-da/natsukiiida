import * as S from "./Works.styles";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from "react";
import * as Global from "../../global/Global.styles"
import { motion } from "framer-motion";

const Works = () => {
    const sliderRef = useRef<Slider | null>(null);
    const prev = () => { sliderRef.current?.slickPrev() };
    const next = () => { sliderRef.current?.slickNext() };

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: false,
    }
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 1}} >
            <S.Container>
                <S.ButtonContainer>
                    <Global.Logo>
                        <button onClick={prev}><div className="dot1" style={{ width: "3rem", height: "3rem" }} /></button>
                    </Global.Logo>
                </S.ButtonContainer>
                <S.SlidesContainer>
                    <Slider ref={sliderRef} {...settings}>
                        <div>1</div>
                        <div>2</div>
                    </Slider>
                </S.SlidesContainer>
                <S.ButtonContainer>
                    <Global.Logo>
                        <button onClick={next}><div className="dot3" style={{ width: "3rem", height: "3rem" }} /></button>
                    </Global.Logo>
                </S.ButtonContainer>
            </S.Container>
        </motion.div>
    )
};

export default Works;
















































// import useEmblaCarousel from "embla-carousel-react";

// const Works = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
//     const handleNext = () => {
//         if (!emblaApi || !emblaApi.canScrollNext()) return;
//         emblaApi.scrollNext();
//     }
//     const handlePrev = () => {
//         if (!emblaApi || !emblaApi.canScrollPrev()) return;
//         emblaApi.scrollPrev()
//     }
//     return (
//         <S.Container>
//             <S.SlidesContainer ref={emblaRef}>
//             <S.Slides>
//                 <S.Slide>
//                     <S.Left>
//                         <S.Title>Natsuki</S.Title>
//                         <S.Skills style={{ fontWeight: "700" }}>React</S.Skills>
//                         <S.Description>
//                             This is about the work #1
//                         </S.Description>
//                     </S.Left>
//                     <S.Right>
//                         <S.Img />
//                     </S.Right>
//                 </S.Slide>
//                 <S.Slide>2</S.Slide>
//                 <S.Slide>3</S.Slide>
//             </S.Slides>

//             <button type="button" onClick={handlePrev}>Prev</button>
//             <button type="button" onClick={handleNext}>Next</button>
//             </S.SlidesContainer>
//             {/* <S.Slide>
//                     <S.Left>
//                         <S.Title>1</S.Title>
//                         <S.Skills style={{ fontWeight: "700" }}>React</S.Skills>
//                         <S.Description>
//                             This is about the work #1
//                         </S.Description>
//                     </S.Left>
//                     <S.Right>
//                         <S.Img />
//                     </S.Right>
//                 </S.Slide> 
//             </S.Slides> */}
//         </S.Container>
//     )
// };

// export default Works;