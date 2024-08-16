"use client";

import { ReactNode } from "react";
import {
  isServer,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQuertClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQuertClient) browserQuertClient = makeQueryClient();
    return browserQuertClient;
  }
}

const queryClient = getQueryClient();

export default function QueryClientContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
