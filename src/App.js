import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/JSX/Footer/Footer";
import ScrollToTop from "./components/JSX/Footer/ScrollToTop";
import FilmDetails from "./components/JSX/Content/FilmDetails/FilmDetails";
import Nav from "./components/JSX/Nav/Nav";
import Content from "./components/JSX/Content/HomePage/Content";
import MovieShow from "./components/JSX/Content/HomePage/MovieShow";
import HideNav from "./components/JS/HideDetails";
import ContactPage from "./components/JSX/Content/NavList/ContactPage/ContactPage";
import GenresPage from "./components/JSX/Content/NavList/GenresPage/GenresPage";
import NewPage from "./components/JSX/Content/NavList/NewsPage/NewPage";
import TopRatedPage from "./components/JSX/Content/NavList/TopRatedPage/TopRatedPage";
import Profile from "./components/JSX/Content/NavList/ProfilePage/Profile";

function App() {
  return (
    <>
      <HideNav>
        <Nav />
      </HideNav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MovieShow />
              <Content />
              <ScrollToTop />
            </>
          }
        />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/GenresPage" element={<GenresPage />} />
        <Route path="/aboutPage" element={<TopRatedPage />} />
        <Route path="/newPage" element={<NewPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/filmDetails/:id" element={<FilmDetails />} />
      </Routes>


      <HideNav>
        <Footer />
      </HideNav>
    </>
  );
}

export default App;
