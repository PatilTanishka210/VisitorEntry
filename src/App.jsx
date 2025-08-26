import { useState } from "react";
import OtpLogin from "./OtpLogin.jsx";
import VisitorForm from "./VisitorForm.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleBackToLogin = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <OtpLogin onLogin={handleLoginSuccess} />
      ) : (
        <VisitorForm onBack={handleBackToLogin} />
      )}
    </div>
  );
}

export default App;
