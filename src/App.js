import {BrowserRouter as Router,Route} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import CandidateRecords from './components/CandidateRecords'
import CandidateVerify from './components/CandidateVerify'
import CandidateDetails from './components/CandidateDetails'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Header} />
        <Route path="/admin" component={CandidateRecords} />
        <Route path="/verify" component={CandidateVerify} />
        {/* <Route path="/candidate" component={CandidateDetails} /> */}
      </div>
    </Router>
  );
}

export default App;
