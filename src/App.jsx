import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainLayout from './components/Layout/MainLayout';
import Listings from './pages/Listings';
import VehicleListing from './pages/VehicleListing';
import MyBids from './pages/MyBids';
import PastResults from './pages/PastResults';
import Settings from './pages/Settings';
import SaleConfirmation from './components/SaleConfirmation';
import { loadVehicles, getMakes } from './utils/data';

function App() {
  const [vehicles, setVehicles] = useState({});
  const [makes, setMakes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const loadedVehicles = await loadVehicles();
        setVehicles(loadedVehicles);
        setMakes(getMakes(loadedVehicles));
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7fafc]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-auction-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/listings" replace />} />
        <Route element={<MainLayout vehicles={vehicles} />}>
          <Route 
            path="/listings" 
            element={<Listings vehicles={vehicles} makes={makes} />} 
          />
          <Route 
            path="/listings/:id" 
            element={<VehicleListing vehicles={vehicles} />} 
          />
          <Route path="/my-bids" element={<MyBids />} />
          <Route path="/past-results" element={<PastResults />} />
          <Route path="/settings" element={<Settings />} />
          <Route 
            path="/sale-confirmation/:id" 
            element={<SaleConfirmation vehicles={vehicles} />} 
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
