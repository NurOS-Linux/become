import { useState, useEffect, type FC, type MouseEvent } from 'react';

const REDIRECT_URL = 'https://tally.so/r/mB6774';
const COUNTDOWN_SECONDS = 3;

const App: FC = () => {
  const [countdown, setCountdown] = useState<number>(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = REDIRECT_URL;
    }
  }, [countdown]);

  const handleManualRedirect = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    window.location.href = REDIRECT_URL;
  };

  const secondsLabel = countdown === 1 ? 'second' : 'seconds';

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
        Redirecting in {countdown} {secondsLabel}...
      </p>
      <p>If you are not redirected automatically, please click the link below:</p>
      <a href={REDIRECT_URL} onClick={handleManualRedirect}>
        Go to Form
      </a>
    </div>
  );
};

export default App;
