import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'route/Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import { ReactQueryDevtools } from 'react-query/devtools';
import { UpdateDocumentTitle } from 'utils/updateDocumentTitle';

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        {/* <UserProvider> */}
        <UpdateDocumentTitle />
        <Routes />
        {/* </UserProvider> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
