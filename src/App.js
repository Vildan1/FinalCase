import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import List from './components/StarshipsList/StarshipsList';
import LoadingScreen from './components/Loader/LoadingScreen';
import NotFound from './pages/NotFound/NotFound';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // App element olarak root elementini kullanıyoruz

const App = () => {
  const queryClient = new QueryClient();
  const [loading, setLoading] = React.useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 saniye gecikme
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        {loading && <LoadingScreen />} {/* LoadingScreen bileşenini burada çağırıyoruz */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starship" element={<List />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
