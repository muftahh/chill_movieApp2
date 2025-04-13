import "../home/components/src/style.css";
import Header from "../../pages/home/components/Header";
import Footer from "../../pages/home/components/Footer";
import { useLocation } from "react-router";
import CommentSection from "./components/CommentSection";

const FilmDetail = () => {
  const { state: film } = useLocation();

  return (
    <>
      <Header />

      <div className="header-background text-white p-10 md:py-8 md:px-20">
        <h1 className="text-3xl font-bold mb-4">{film.title}</h1>
        <div className="grid grid-cols-1 md:flex md:flex-row md:items-stretch">
          <div className="">
            <img
              src={film.poster}
              alt={film.title}
              className="w-[300px] rounded-lg mb-4"
            />
          </div>
          <div className="md:ml-10 text-justify md:self-end">
            <p className="mb-4">{film.description}</p>
          </div>
        </div>

        <CommentSection />
      </div>

      <Footer />
    </>
  );
};

export default FilmDetail;
