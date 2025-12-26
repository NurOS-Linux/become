import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState(3);
  const redirectUrl = 'https://tally.so/r/mB6774';

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = redirectUrl;
    }
  }, [countdown]);

  const handleManualRedirect = () => {
    window.location.href = redirectUrl;
  };

  return (
    <div className="container">
      <h1>
        Redirecting you to the form
        <span className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </h1>
      <p>
        Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
      </p>
      <p>If you are not redirected automatically, please click the link below:</p>
      <a href={redirectUrl} onClick={handleManualRedirect}>
        Go to Form
      </a>
    </div>
  );
}

export default App;
