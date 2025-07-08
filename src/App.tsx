import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import FactorCalculator from "./features/FactorCalculator";
import InterestCalculator from "./features/InterestCalculator";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="my-10 text-center">
        <h1 className="text-4xl font-bold">Calculadora Económica</h1>
      </header>
      <Tabs defaultValue="factor" className="w-full max-w-3xl mx-auto">
        <TabsList>
          <TabsTrigger value="factor">Calculadora de Factor</TabsTrigger>
          <TabsTrigger value="interes">Interés</TabsTrigger>
        </TabsList>
        <TabsContent value="factor">
          <FactorCalculator />
        </TabsContent>
        <TabsContent value="interes">
          <InterestCalculator />
        </TabsContent>
      </Tabs>
    </ThemeProvider>
  );
}

export default App;
