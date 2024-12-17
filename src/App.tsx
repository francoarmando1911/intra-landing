import ContactComponent from './components/ContactComponent';
import Header from './components/Header';
import SectionComponent from './components/SectionComponent';
import './index.css';

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header/>
        <SectionComponent/>
        <ContactComponent/>
      </div>
    </>
  )
}

export default App
