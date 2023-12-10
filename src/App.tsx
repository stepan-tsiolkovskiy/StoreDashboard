import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layout/MainLayout'
import { routes } from './routes'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { init } from './redux/products';

function App() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.products);

  console.log(products);
  
  useEffect(() => {
    dispatch(init());
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
