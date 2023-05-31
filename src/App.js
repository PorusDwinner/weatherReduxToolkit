import './styles/App.css';
import Topbar from "./component/Topbar";
import Footer from "./component/Footer";
import { ButtonsAndData } from './component/ButtonsAndData';

function App() {

  return (
    <div className='bgImg'>
        <Topbar/>
        <ButtonsAndData/>
        <Footer/>
    </div>
  );
}

export default App;
