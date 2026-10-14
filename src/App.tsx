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
import { CartProvider } from "./context/CartContext.tsx";
import { WishlistProvider } from "./context/WishlistContext.tsx";
import { Toaster } from "react-hot-toast";

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
  return (
    <CartProvider>
      <WishlistProvider>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
