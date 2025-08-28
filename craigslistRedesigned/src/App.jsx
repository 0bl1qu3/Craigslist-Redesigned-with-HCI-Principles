import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Screens/HomePage';
import CategoryPage from "./Screens/CategoryPage";

import { MantineProvider } from "@mantine/core";

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

function App() {

  return (
   <MantineProvider>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
      </Routes>
    </Router>
   </MantineProvider>
  )
}

export default App
