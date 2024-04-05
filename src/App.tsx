import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';

import 'bulma/css/bulma.css';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
