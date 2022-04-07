import React from "react";
import ResetStyle from "../../theme/Reset.style";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResetStyle />
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
