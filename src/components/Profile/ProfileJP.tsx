import * as S from "./ProfileJP.styles"
import * as Global from "../../global/Global.styles"
import { Nav, Paths, Title } from "../../types/enum";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProfileJP = () => {

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
                        <S.Subtitle>{Title.WORKING_EXPERIENCE_JP}</S.Subtitle>
                        <S.WorkingExperience>
                            <S.JobDescription>
                                <S.CompanyJP>株式会社ニトリ （日本） | 2010年3月 - 2011年3月</S.CompanyJP>
                                <S.PositionJP></S.PositionJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>株式会社アクト・インターナショナル （日本） | 2012年6月 - 2012年10月</S.CompanyJP>
                                <S.PositionJP>展示会コーディネーター 国際展示会担当</S.PositionJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>株式会社アール工房 （日本） | 2012年11月 - 2014年12月</S.CompanyJP>
                                <S.PositionJP>DTPオペレーター</S.PositionJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>フリーランス・トランスレーター（スウェーデン） | 2015年4月 - 2016年5月</S.CompanyJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>Happy Socks AB （スウェーデン） | 2017年7月 - 2022年12月</S.CompanyJP>
                                <S.PositionJP>カスタマー・エクスペリエンス</S.PositionJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>Lemontree Enterprise Solutions AB （スウェーデン） | 2023年11月 - 2024年5月</S.CompanyJP>
                                <S.PositionJP>フロントエンド・デベロッパー（インターンシップ）</S.PositionJP>
                            </S.JobDescription>
                        </S.WorkingExperience>
                    </S.Right>
                </S.Top>
                <S.Center>
                    <S.Left>
                        <S.Subtitle>{Title.SKILLS_JP}</S.Subtitle>
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
                        <S.Subtitle>{Title.EDUCATION_JP}</S.Subtitle>
                        <S.EducationalBackground>
                            <S.Education>
                                <S.School>ジャカルタ・インターナショナル・スクール （インドネシア） | 2002年1月入学 - 2005年5月卒業</S.School>
                                <S.Major>高校</S.Major>
                            </S.Education>
                            <S.Education>
                                <S.School>立命館大学 （日本） | 2006年4月入学 - 2010年3月卒業</S.School>
                                <S.Major>経営学部　国際経営学科</S.Major>
                            </S.Education>
                            <S.Education>
                                <S.School>KYH （スウェーデン） | 2021年9月入学 - 2024年6月卒業</S.School>
                                <S.Major>フロントエンド・デベロッパー（職業大学）</S.Major>
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

export default ProfileJP;







{/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }}>
            <S.Container>
                <S.Left>
                    <S.TopLeft>
                        <Global.Logo>
                            <div className="dot1" style={{ width: "4rem", height: "4rem" }} />
                            <div className="dot2" style={{ width: "4rem", height: "4rem" }} />
                            <div className="dot3" style={{ width: "4rem", height: "4rem" }} />
                        </Global.Logo>
                        <S.Title>{Nav.PROFILE}</S.Title>
                    </S.TopLeft>
                    <S.CenterLeft>
                        <S.Subtitle>{Title.SKILLS}</S.Subtitle>
                        <S.Skills>
                            React.js Typescript
                            Redux styled-components
                            Axios MySQL Node.js
                            Github Bitbucket
                            JavaScript HTML CSS
                            Atom Visual Studio
                            Figma Bootstrap
                        </S.Skills>
                    </S.CenterLeft>
                    <S.BottomLeft>
                        <Link to={Paths.PROFILE_JP}><S.Icon src="../icons/japan.png" /></Link>
                        <Link to={Paths.PROFILE_SE}><S.Icon src="../icons/sweden.png" /></Link>
                        <Link to={Paths.PROFILE}><S.Icon src="../icons/globe-grid.png" /></Link>
                    </S.BottomLeft>
                </S.Left>

                <S.Right>
                    <S.TopRight>
                        <S.Subtitle>{Title.WORKING_EXPERIENCE}</S.Subtitle>
                        <S.WorkingExperience>
                            <S.JobDescription>
                                <S.CompanyJP>株式会社ニトリ （日本） | 2010年3月 - 2011年3月</S.CompanyJP>
                                <S.PositionJP></S.PositionJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>株式会社アクト・インターナショナル （日本） | 2012年6月 - 2012年10月</S.CompanyJP>
                                <S.PositionJP>展示会コーディネーター 国際展示会担当</S.PositionJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>株式会社アール工房 （日本） | 2012年11月 - 2014年12月</S.CompanyJP>
                                <S.PositionJP>DTPオペレーター</S.PositionJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>フリーランス・トランスレーター（スウェーデン） | 2015年4月 - 2016年5月</S.CompanyJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>Happy Socks AB （スウェーデン） | 2017年7月 - 2022年12月</S.CompanyJP>
                                <S.PositionJP>カスタマー・エクスペリエンス</S.PositionJP>
                            </S.JobDescription>
                            <S.JobDescription>
                                <S.CompanyJP>Lemontree Enterprise Solutions AB （スウェーデン） | 2023年11月 - 2024年5月</S.CompanyJP>
                                <S.PositionJP>フロントエンド・デベロッパー（インターンシップ）</S.PositionJP>
                            </S.JobDescription>
                        </S.WorkingExperience>
                    </S.TopRight>
                    <S.BottomRight>
                        <S.Subtitle>{Title.EDUCATION}</S.Subtitle>
                        <S.EducationalBackground>
                            <S.Education>
                                <S.Major>高校</S.Major>
                                <S.School>ジャカルタ・インターナショナル・スクール （インドネシア） | 2002年1月入学 - 2005年5月卒業</S.School>
                            </S.Education>
                            <S.Education>
                                <S.Major>経営学部　国際経営学科</S.Major>
                                <S.School>立命館大学 （日本） | 2006年4月入学 - 2010年3月卒業</S.School>
                            </S.Education>
                            <S.Education>
                                <S.Major>フロントエンド・デベロッパー（職業大学）</S.Major>
                                <S.School>KYH （スウェーデン） | 2021年9月入学 - 2024年5月卒業</S.School>
                            </S.Education>
                        </S.EducationalBackground>
                    </S.BottomRight>
                   
                </S.Right>
            </S.Container>
        </motion.div> */}