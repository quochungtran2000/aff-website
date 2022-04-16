// import { ProductApi } from 'apis/productApi';
// import ProductCard from 'components/Card/ProductCard';
// import MainLayout from 'components/Layout';
// import { useEffect, useState } from 'react';
// import { ProductTemplateResponse } from 'types';
// import { PauseIcon } from './assets/svg';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'route/Routes';

function App() {
  // const [products, setProducts] = useState<ProductTemplateResponse[]>([]);

  // useEffect(() => {
  //   ProductApi.getProducts().then(({ data }) => setProducts(data));
  // }, []);
  // userApi.getUsers({}).then((res) => console.log(res));

  return (
    <Router>
      {/* <QueryClientProvider client={queryClient}>
        <UserProvider>
          <UpdateDocumentTitle /> */}
      <Routes />
      {/* </UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider> */}
    </Router>
  );
}

export default App;
