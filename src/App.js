import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import FilesViewer from './components/FileViewer/FileViewer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app_main'>
        <Sidebar />
        <FilesViewer />
      </div>
    </div>
  );
}

export default App;
