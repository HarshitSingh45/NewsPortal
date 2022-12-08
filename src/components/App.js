import { BrowserRouter as Router, Link, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Header, MainContainer } from ".";
import CreatePost from "./CreatePost";
import DetailedNews from './DetailedNews';
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-auto flex flex-col bg-bckGroundColor">
          <Router>
            <Header />
            <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full border-2">
              <Routes>
                <Route path='/' element={<MainContainer />} />
                <Route path='/create' element={<CreatePost />} />
                <Route path='/news' element={<DetailedNews />} />
              </Routes>
            </main>
          </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
