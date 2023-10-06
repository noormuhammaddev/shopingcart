import { Route, Routes } from 'react-router-dom';

import About from '../pages/About/About';
import Products from '../pages/Products/Products';


export const routes = [
  {
    path: '',
    element: <Products />,
    breadcrumb: 'Home / Products',
  },
  {
    path: 'about',
    element: <About />,
    breadcrumb: 'Home / About Us',
  },
];

export function StaticRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Products />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  );
}
