import React from "react";
import "./App.css";
import Main from "./layouts/Main";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BasketContent from "./components/content/basket/BasketContent";
import ScrollSm from "./utils/ScrollSmoother";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ApiService } from "./API/Api.service";
import User from "./layouts/User";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

function App() {
  ScrollSm();
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await ApiService.setAvtorization();
    };
    fetchData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<Main />} />\
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<BasketContent />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
