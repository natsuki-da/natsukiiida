// import { lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Paths } from "./types/enum"

// const Home = lazy(() => import("./components/Home/Home"));
// const Profile = lazy(() => import("./components/Profile/Profile"));
// const Works = lazy(() => import("./components/Works/Works"));

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path={Paths.HOME} element={<Home />}/>
//         <Route path={Paths.PROFILE} element={<Profile />}/>
//         <Route path={Paths.WORKS} element={<Works />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App;

import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App;