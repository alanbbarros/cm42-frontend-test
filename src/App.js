import GlobalStyle from './globalStyle';
import AppRoutes from './routes'
import ContextProvider from './context';

function App() {

  return (
    <ContextProvider>
      <GlobalStyle />
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
