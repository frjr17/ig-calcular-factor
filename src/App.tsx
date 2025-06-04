import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Card, CardContent, CardDescription, CardHeader } from "./components/ui/card";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-center items-center h-screen w-full">
        <Card className="w-full max-w-sm p-5 text-center" >
          <CardHeader>
            <h1 className="text-4xl font-extrabold">Calculadora de Factor</h1>
          </CardHeader>
          <CardDescription className="italic">
            <span>Ingresa los datos y obtén el factor...</span>
            <span>y tal vez tu respuesta jajajajajaj</span>
          </CardDescription>
          <CardContent>

          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
