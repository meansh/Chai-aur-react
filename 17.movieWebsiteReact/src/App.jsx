import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MovieDetail from './components/MovieDetail/MovieDetail'
import store from './components/Store/Store'
import { Provider } from "react-redux"


function App() {
  
  return (
    <>
     <div className='app'>
      <Provider store={store}>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route exact path="/" element={Home } />
              <Route exact path="/movie/:id" element={MovieDetail } />
              <Route path="*" element={PageNotFound } />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
     </div>
    </>
  )
}

export default App
