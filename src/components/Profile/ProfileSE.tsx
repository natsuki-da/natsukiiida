import * as S from "./ProfileSE.styles"
import * as Global from "../../global/Global.styles"
import { Nav, Paths, Title } from "../../types/enum";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProfileSE = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
            <S.Container>
                <S.Top>
                    <S.Left>
                        <Global.Logo>
                            <div className="dot1" style={{ width: "4rem", height: "4rem" }} />
                            <div className="dot2" style={{ width: "4rem", height: "4rem" }} />
                            <div className="dot3" style={{ width: "4rem", height: "4rem" }} />
                        </Global.Logo>
                        <S.Title>{Nav.PROFILE}</S.Title>
                    </S.Left>
                    <S.Right>
                        <S.Subtitle style={{ fontSize: "1.5rem" }}>{Title.WORKING_EXPERIENCE_SE}</S.Subtitle>
                        <S.WorkingExperience>
                            <S.JobDescription>
                                <S.Position>Praktik (heltid)</S.Position>
                                <S.Company>Lemontree Enterprise Solutions AB (Sverige) | november 2023 - maj 2024</S.Company>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.Position>Customer Experience Representative (deltid)</S.Position>
                                <S.Company>Happy Socks AB (Sverige) | juli 2017 - december 2022</S.Company>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.Position>Frilansöversättare</S.Position>
                                <S.Company>Frilansare (Sverige) | april 2015 - maj 2016</S.Company>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.Position>DTP Operator</S.Position>
                                <S.Company>R-atelier. Inc (Japan) | november 2012 - december 2014</S.Company>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.Position>Trade Show Coordinator</S.Position>
                                <S.Company>ACT INTERNATIONAL, INC, (Japan) | juni 2012 - oktober 2012</S.Company>
                            </S.JobDescription>
                            {/* <S.JobDescription>
                                        <S.Position>Sales</S.Position>
                                        <S.Company>IKEA JAPAN K.K. (Japan) | mars 2011 - juni 2012</S.Company>
                                    </S.JobDescription>
                                    <S.JobDescription>
                                        <S.Position>Sales</S.Position>
                                        <S.Company>NITORI CO., LTD (Japan) | mars 2010 - juni 2011</S.Company>
                                    </S.JobDescription> */}
                        </S.WorkingExperience>
                    </S.Right>
                </S.Top>
                <S.Center>
                    <S.Left>
                        <S.Subtitle style={{ fontSize: "1.5rem" }}>{Title.SKILLS_SE}</S.Subtitle>
                        <S.Skills>
                            React.js / Typescript / JavaScript /
                            Redux / Axios / MySQL / Node.js /
                            Github / Bitbucket /
                            HTML / CSS /styled-components /
                            Atom / Visual Studio Code /
                            Figma / Bootstrap
                        </S.Skills>
                    </S.Left>
                    <S.Right>
                        <S.Subtitle style={{ fontSize: "1.5rem" }}>{Title.EDUCATION_SE}</S.Subtitle>
                        <S.EducationalBackground>
                            <S.Education>
                                <S.Major>Front End Developer (Yrkeshögskoleutbildning)</S.Major>
                                <S.School>KYH (Sweden) | september 2021 - maj 2024</S.School>
                            </S.Education>
                            <S.Education>
                                <S.Major>International Business College of Business Administration</S.Major>
                                <S.School>RITSUMEIKAN UNIVERSITY (Japan) | april 2006 - mars 2010</S.School>
                            </S.Education>
                            <S.Education>
                                <S.Major>Gymnasiet</S.Major>
                                <S.School>JAKARTA INTERNATIONAL SCHOOL (Indonesien) | januari 2002 - maj 2005</S.School>
                            </S.Education>
                        </S.EducationalBackground>
                    </S.Right>
                </S.Center>
                <S.Bottom>
                    <S.BottomLeft>
                        <Link to={Paths.PROFILE_JP}><S.Icon_language src="../icons/japan.png" /></Link>
                        <Link to={Paths.PROFILE_SE}><S.Icon_language src="../icons/sweden.png" /></Link>
                        <Link to={Paths.PROFILE}><S.Icon_language src="../icons/globe-grid.png" /></Link>
                    </S.BottomLeft>
                    <S.BottomRight>
                        <a href="https://github.com/natsuki-da?tab=repositories"><S.Icon alt="github-icon" src="../icons/GitHub_Invertocat_White.png" /></a>
                        <a href="https://www.linkedin.com/public-profile/settings"><S.Icon alt="linkedin-icon" src="../icons/InBug-White.png" /></a>
                    </S.BottomRight>
                </S.Bottom>
            </S.Container>
        </motion.div>
    )
}

export default ProfileSE;