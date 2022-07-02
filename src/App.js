import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Note from "./Components/Note.jsx";
import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      
      <Footer />

    </div>
  );
}

export default App;
