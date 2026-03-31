import { Paths, Profile } from "../../types/enum";
import * as S from "./Home.styles"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
            <S.Container>
                    <S.Left>
                        <S.Img src="/natsukiiida/images/natsuki.png" alt="profile picture" />
                        <S.Profile>
                            <S.Name>{Profile.FULLNAME}</S.Name>
                            <S.Occupation>{Profile.OCCUPATION}</S.Occupation>
                            <S.Nationality>{Profile.NATIONALITY}</S.Nationality>
                            <S.Description>Based in {Profile.COUNTRY}</S.Description>
                        </S.Profile>
                    </S.Left>
                    <S.Right>
                        <S.Dot1><S.Button></S.Button></S.Dot1>
                        {/* <S.Dot1><S.Button><Link to={Paths.PROFILE}>Profile</Link></S.Button></S.Dot1> */}
                        <S.Dot2><S.Button></S.Button></S.Dot2>
                        <S.Dot3><S.Button><Link to={Paths.PROFILE}>Profile</Link></S.Button></S.Dot3>
                    </S.Right>
            </S.Container>
        </motion.div>
    )
}

export default Home;













































// const Home = () => {
//     const dot1radius = "68% 49% 67% 46% / 47% 39% 67% 77%";
//     const dot2radius = "49% 38% 38% 43% / 57% 54% 71% 45%";
//     const dot3radius = "23% 77% 70% 30% / 30% 61% 39% 70%";
    
//     const dot1transition = {
//         y: {
//             type: "spring",
//             bounce: 4,
//             duration: 4,
//         }
//     };
//     const dot2transition = {
//         y: {
//             type: "spring",
//             bounce: 5,
//             duration: 5,
//         }
//     }

//     const dot3transition = {
//         y: {
//             type: "spring",
//             bounce: 6,
//             duration: 6,
//         }
//     }

//     return (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
//             <S.Container>
//                 <S.Top>
//                     <S.Left>
//                         <S.Img src="/images/natsuki.png" alt="profile picture" />
//                         <S.Profile>
//                             <S.Name>{Profile.FULLNAME}</S.Name>
//                             <S.Occupation>{Profile.OCCUPATION}</S.Occupation>
//                             <S.Nationality>{Profile.NATIONALITY}</S.Nationality>
//                             <S.Description>Based in {Profile.COUNTRY}</S.Description>
//                         </S.Profile>
//                     </S.Left>
//                     <S.Right>
//                         <Global.Logo>
//                             <div className="dot1" />
//                             <div className="dot2" />
//                             <div className="dot3" />
//                         </Global.Logo>
//                     </S.Right>
//                 </S.Top>
//                 <S.Bottom>
//                     <S.BttnContainer>
//                         <S.Button><Link to={Paths.PROFILE} style={{ textDecoration: "none" }}>{Glossary.NEXT}</Link></S.Button>
//                         <motion.div
//                             initial={{x: 0, y: -100, opacity: 0}}
//                             style={{ width: "2rem", height: "2rem", borderRadius: `${dot1radius}` }}
//                             transition={dot1transition}
//                             animate={{ y: 0, opacity: 1, backgroundColor: ["#808080", "#e17a7a"] }}
//                         />
//                         <motion.div 
//                            initial={{x: 0, y: -200, opacity: 0}}
//                            style={{width: "2rem", height: "2rem", borderRadius: `${dot2radius}`}}
//                            transition={dot2transition}
//                            animate={{y: 0, opacity: 1, backgroundColor: ["#808080", "#d6c0c0"]}}
//                         />
//                         <motion.div 
//                            initial={{x: 0, y: -300, opacity: 0}}
//                            style={{width: "2rem", height: "2rem", borderRadius: `${dot3radius}`}}
//                            transition={dot3transition}
//                            animate={{y: 0, opacity: 1, backgroundColor: ["#808080", "#5c7290" ]}}
//                         />
                        
//                     </S.BttnContainer>
//                 </S.Bottom>
//             </S.Container>
//         </motion.div>
//     )
// }

// export default Home;