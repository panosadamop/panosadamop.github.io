import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../layout/Navbar';
import Hero from '../section/hero';
import About from '../section/about';
import Blockquote from '../section/blockquote';
import Whatido from '../section/whatido';
import Gallery from '../section/gallery';
import Resume from '../section/resume';
import Contact from '../section/contact';
import Footer from '../section/footer';
import Preloader from "../layout/Preloader";
import ScrollToTopBtn from '../layout/ScrollToTop';
import Particle from '../layout/Particle';
import { createGlobalStyle } from 'styled-components';

const image1 ="./img/background/4.jpg";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

function home() {
  return (
    <>
    <GlobalStyles/>
    <Preloader/>
    <div className="home">
      <header id="header-wrap">
        <Navbar />
      </header>
      <section id="hero-area" className="bg-bottom py-0">
        <Parallax bgImage={image1} strength={300}>
        <Particle/>
        <Hero/>
        <Link smooth spy to="about">
          <span className="mouse transition" id="fly">
              <span className="scroll"></span>
          </span>
        </Link>
        </Parallax>
      </section>
      <section id="about" className="pb-0">
        <About/>
      </section>
      <section id="whatido">
        <Whatido/>
      </section>
      <section id="gallery">
        <Gallery/>
      </section>

      {/* Gallery */}
      <section id="resume" className="pb-0">
        <Resume/>
      </section>

      {/* contact */}
      <section id="contact" className="pb-0">
        <Contact/>
        <Footer/>
      </section>




      <div className="float-text">
          <div className="de_social-icons">
              <span className="buton"><i className="fa fa-linkedin fa-lg"></i></span>
              <span className="buton"><i className="fa fa-drupal fa-lg"></i></span>
              <span className="buton"><i className="fa fa-github fa-lg"></i></span>
          </div>
          <span>Find Me</span>
      </div>
    </div>
    <ScrollToTopBtn />
    </>
  );
}

export default home;
