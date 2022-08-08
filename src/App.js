import "./styles.css";
import Header from "./header-folder/header";
import HoveredContent from "./hovered-folder/hovered-content";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-content">
        <HoveredContent />
      </div>
    </div>
  );
}
