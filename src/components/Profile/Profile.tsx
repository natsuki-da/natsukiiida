import * as S from "./Profile.styles"
import * as Global from "../../global/Global.styles"
import { Nav, Paths, Title } from "../../types/enum";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
            <S.Container>
                <S.Top>
                    <S.Left>
                        <S.Logo>
                            <Link to={Paths.HOME}>
                                <Global.Logo>
                                    <div className="dot1" style={{ width: "4rem", height: "4rem" }} />
                                    <div className="dot2" style={{ width: "4rem", height: "4rem" }} />
                                    <div className="dot3" style={{ width: "4rem", height: "4rem" }} />
                                </Global.Logo>
                            </Link>
                        </S.Logo>
                        <S.Title>{Nav.PROFILE}</S.Title>
                    </S.Left>
                    <S.Right>
                        <S.Subtitle style={{ fontSize: "1.5rem" }}>{Title.WORKING_EXPERIENCE}</S.Subtitle>
                        <S.WorkingExperience>
                            <S.JobDescription>
                                <S.Position>Internship (full-time)</S.Position>
                                <S.Company>Lemontree Enterprise Solutions AB (Sweden) | Nov 2023 - May 2024</S.Company>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.Position>Customer Experience Representative (part-time)</S.Position>
                                <S.Company>Happy Socks AB (Sweden) | July 2017 - December 2022</S.Company>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.Position>Freelance Translator</S.Position>
                                <S.Company>(Sweden) | Apr 2015 - May 2016</S.Company>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.Position>DTP Operator</S.Position>
                                <S.Company>R-atelier. Inc (Japan) | Nov 2012 - Dec 2014</S.Company>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.Position>Trade Show Coordinator</S.Position>
                                <S.Company>ACT INTERNATIONAL, INC, (Japan) | Jun 2012 - Oct 2012</S.Company>
                            </S.JobDescription>
                            {/* <S.JobDescription>
                                                <S.Position>Sales</S.Position>
                                                <S.Company>IKEA JAPAN K.K. (Japan) | Mar 2011 - Jun 2012</S.Company>
                                            </S.JobDescription>
                                            <S.JobDescription>
                                                <S.Position>Sales</S.Position>
                                                <S.Company>NITORI CO., LTD (Japan) | Mar 2010 - Mar 2011</S.Company>
                                            </S.JobDescription> */}
                        </S.WorkingExperience>
                    </S.Right>
                </S.Top>
                <S.Center>
                    <S.Left>
                        <S.Subtitle style={{ fontSize: "1.5rem" }}>{Title.SKILLS}</S.Subtitle>
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
                        <S.Subtitle style={{ fontSize: "1.5rem" }}>{Title.EDUCATION}</S.Subtitle>
                        <S.EducationalBackground>
                            <S.Education>
                                <S.Major>Front End Developer (Higher Vocational Education)</S.Major>
                                <S.School>KYH (Sweden) | Sep 2021 - May 2024</S.School>
                            </S.Education>
                            <S.Education>
                                <S.Major>International Business College of Business Administration</S.Major>
                                <S.School>RITSUMEIKAN UNIVERSITY (Japan) | 2006 - 2010</S.School>
                            </S.Education>
                            <S.Education>
                                <S.Major>High School</S.Major>
                                <S.School>JAKARTA INTERNATIONAL SCHOOL (Indonesia) | 2002 - 2005</S.School>
                            </S.Education>
                        </S.EducationalBackground>
                    </S.Right>
                </S.Center>
                <S.Bottom>
                    <S.BottomLeft>
                        <Link to={Paths.PROFILE_JP}><S.Icon_language src="/natsukiiida/icons/japan.png" /></Link>
                        <Link to={Paths.PROFILE_SE}><S.Icon_language src="/natsukiiida/icons/sweden.png" /></Link>
                        <Link to={Paths.PROFILE}><S.Icon_language src="/natsukiiida/icons/globe-grid.png" /></Link>
                    </S.BottomLeft>
                    <S.BottomRight>
                        <a href="https://github.com/natsuki-da?tab=repositories"><S.Icon alt="github-icon" src="/natsukiiida/icons/GitHub_Invertocat_White.png" /></a>
                        <a href="https://www.linkedin.com/public-profile/settings"><S.Icon alt="linkedin-icon" src="/natsukiiida/icons/InBug-White.png" /></a>
                    </S.BottomRight>
                </S.Bottom>
            </S.Container>
        </motion.div>
    )
}

export default Profile;