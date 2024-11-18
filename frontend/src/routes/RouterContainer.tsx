import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUp from "../pages/Login/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import SearchPets from "../pages/Search/SearchPets";

export default function RouterContainer() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPets />} />
            <Route path="/auth/cadastrar" element={ <SignUp/> } />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}