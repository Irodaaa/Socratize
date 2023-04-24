import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Support from './components/Support'
import SocialLinks from "./components/SocialLinks";
import Contacts from "./components/Contacts";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

function App() {

    const {t, i18n} = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, [])

    const lng = navigator.language

  return (
     <Router>
         <Navbar/>
         <Routes>
             <Route exact path='/' element={<Homepage/>} />
                 <Route exact path='/contacts' element={<Contacts/>} />
      {/*<Pricing />*/}
      {/*<Footer />*/}
         </Routes>
     </Router>



  );
}

export default App;
