import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/search-bar';
import SongForm from './components/song-form';
import MusicTable from './components/music-table';

function App() {
  return (
    <div className="App">
      <h1>Music Library React Project</h1>
      <SearchBar />
      <SongForm />
      <MusicTable />
    </div>
  );
}

export default App;
