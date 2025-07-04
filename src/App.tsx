import "./App.css";
import { ThemeProvider } from "./components/theme-provider";


function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="my-10 text-center">
        <h1 className="text-4xl font-bold">Calculadora Económica</h1>
      </header>
   <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
    </ThemeProvider>
  );
}

export default App;
