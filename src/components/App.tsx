import InfoContainer from "./InfoContainer";

function App() {
  return (
    <body className="bg-gray-100">
      <main className="md:max-w-7xl mx-auto max-w-full flex justify-center items-center h-screen">
      <div data-testid="container" className="overflow-hidden bg-white shadow sm:rounded-md md:min-w-[30vw]">
        <InfoContainer />
      </div>
      </main>
    </body>
    
  );
}

export default App;
