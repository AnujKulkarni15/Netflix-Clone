import './App.css';
import Request from './Request';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Banner/>


      {/* fetchUrl is used to fetch the data from movie database */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={Request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
      <Row title="Dramas" fetchUrl={Request.fetchRomanceMovies}/>
      <Row title="Family Features" fetchUrl={Request.fetchDocumentaries}/>

    </div>
  );
}

export default App;
