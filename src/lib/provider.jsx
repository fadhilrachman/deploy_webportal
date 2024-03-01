"use client";
import { ChakraProvider } from "@chakra-ui/react";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Providers({ children }) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          useErrorBoundary: false,
          refetchOnWindowFocus: false,
          retry(failureCount, error) {
            if (error.status === 404) return false;
            if (failureCount < 2) return true;
            return false;
          },
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}

export default Providers;
