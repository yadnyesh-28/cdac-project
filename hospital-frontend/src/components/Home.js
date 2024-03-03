import Header from "./Header";
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Appointment from './Appointment';
import Doctors from './Doctors';
import Questions from './Question';
import Gallery from './Gallary';
import Feedback from './Feedback';
import Contact from './Contact';
import Footer from './Footer';


function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Service/>
    <Doctors/>
    <Questions/>
    <Gallery/>
    <Feedback/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Home;
