import React from "react";
import ResetStyle from "../../theme/Reset.style";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { CardContextProvider } from "../../context/RecentlyViewedCards/CardContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CardContextProvider>
        <ResetStyle />
        <Layout />
      </CardContextProvider>
    </QueryClientProvider>
  );
}

export default App;
