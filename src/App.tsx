import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Catalog,
  ProductDetail,
  Wishlist,
  NotFound,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "catalogo",
        element: <Catalog />,
      },
      {
        path: "shop",
        element: <Catalog />,
      },
      {
        path: "shop/:category",
        element: <Catalog />,
      },
      {
        path: "produto/:id",
        element: <ProductDetail />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "carrinho",
        element: <Cart />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favoritos",
        element: <Wishlist />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
