import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Featured_ from "./components/Feature_";
import Footer from "./components/Footer";
import MeetTeam from "./components/Meetteam";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonial";
import Service from "./components/service";

function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Service/>
      <Accordion/>
      <MeetTeam/>
      <Featured_/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
