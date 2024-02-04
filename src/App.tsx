import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Loader from "./components/loader";

const Dashboard = lazy(() => import("./pages/dashboard"));

const App = () => {
  return (
    <Router>
     <Suspense fallback={<Loader/>}>
     <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>} />
      </Routes>
     </Suspense>
    </Router>
  );
};


export default App;
