import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Missionvision from './components/missionvision/Missionvision';
import Menu from './components/menu/Menu';
import Choose from './components/choose/Choose';
import Gallery from './components/gallery/Gallery';
import Video from './components/video/Video';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';

function App(){
    return (
    <> 
        <Header />
        <Home />
        <About />
        <Missionvision />
        <Menu/>
        <Choose/>
        <Gallery/>
        <Video/>
        <Team/>
        <Footer/>
    </>
    );
}

export default App;





