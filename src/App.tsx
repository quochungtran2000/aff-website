import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'route/Routes';
import { UpdateDocumentTitle } from 'utils/updateDocumentTitle';
import { UserProvider } from 'context/userContext';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          {/* <UserProvider> */}
          <UpdateDocumentTitle />
          <Routes />
          {/* </UserProvider> */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
