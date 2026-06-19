import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { theme } from "./theme";
import { Onboarding } from "./pages/Onboarding/Onboarding";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onboarding" element={<ProtectedRoute><Onboarding/></ProtectedRoute>} />
          <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;