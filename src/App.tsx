import 'bulma/css/bulma.css';

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <h1 className="title">Hello</h1>
      {children}
    </>
  );
};

export default App;
