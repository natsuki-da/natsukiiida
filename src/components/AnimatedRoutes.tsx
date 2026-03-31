import { Paths } from "../types/enum";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import Profile from "./Profile/Profile";
import Works from "./Works/Works";
import ProfileJP from "./Profile/ProfileJP";
import ProfileEN from "./Profile/ProfileSE";
import Landing from "./Landing/Landing";
import Home from "./Home/Home";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={Paths.LANDING} element={<Landing />} />
                <Route path={Paths.HOME} element={<Home />} />
                <Route path={Paths.PROFILE} element={<Profile />} />
                <Route path={Paths.PROFILE_JP} element={<ProfileJP />} />
                <Route path={Paths.PROFILE_SE} element={<ProfileEN />} />
                <Route path={Paths.WORKS} element={<Works />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;