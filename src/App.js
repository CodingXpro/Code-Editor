import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home.js';
import EditorPage from './pages/EditorPage.js';

function App() {
  return (

    <>
      <div>
        <Toaster position='top-right' toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}>

        </Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/editor/:roomId' element={<EditorPage />}></Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App;
