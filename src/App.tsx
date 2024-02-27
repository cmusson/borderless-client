import Header from "./components/Header";
import SearchableCandidateList from "./components/SearchableCandidateList";

function App() {
  return (
    <main className="min-h-screen pt-4 px-12">
      <Header />
      <SearchableCandidateList />
    </main>
  );
}

export default App;
