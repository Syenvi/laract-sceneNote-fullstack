// project import

import Routes from "./routes";
import { NavigationScroll } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationScroll>
        <Routes />
      </NavigationScroll>
    </QueryClientProvider>
  );
}

export default App;
