import { useEffect, type FC } from 'react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const TALLY_FORM_ID = 'mB6774';

const Apply: FC = () => {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className="apply-page">
      <header className="apply-header">
        <Link to="/" className="back-link">← Назад к вакансиям</Link>
        <h1>Подать заявку</h1>
      </header>
      <div className="form-container">
        <iframe
          data-tally-src={`https://tally.so/r/${TALLY_FORM_ID}?transparentBackground=1`}
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="Вступление в команду NurOS"
        />
      </div>
    </div>
  );
};

export default Apply;
