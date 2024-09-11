import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [views, setView] = useState(1);
  const [videoId, setVideoId] = useState("");
  // const [displayIframes, setDisplayIframes] = useState(false);
  // const CheckVideoId = (e) => {
  //   e.preventDefault();
  //   if (views && videoId) {
  //     setDisplayIframes(true)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  const createArray = useCallback(
    (views) => {
      return [...Array(views).keys()].map((i) => i + 1);
    },
    [views]
  );
  return (
    <div
      style={{
        backgroundColor: "grey",
        color: "white",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1>Increase Your Youtube Video Views</h1>
      <section style={{ padding: "1rem", display: "flex", flexDirection: "row", gap: "2rem", flexWrap: "wrap" }}>
        <label htmlFor="numberOfIframes">No of Views:</label>
        <input
          id="numberOfIframes"
          type="number"
          value={views}
          min={1}
          onChange={(e) => {
            setView(Number(e.target.value));
          }}
          style={{ border: "1px solid white", borderRadius: "1rem", paddingInlineStart: "1rem" }}
        />
      </section>
      <section style={{ padding: "1rem", display: "flex", flexDirection: "row", gap: "2rem", flexWrap: "wrap" }}>
        <label htmlFor="youtubeLink">Youtube Video ID:</label>
        <input
          style={{ border: "1px solid white", borderRadius: "1rem", paddingInlineStart: "1rem" }}
          id="youtubeLink"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
        />
      </section>

      <div>
        {console.log(createArray(views), views)}
        {createArray(views).map((_, x) => (
          <iframe
            key={videoId + x}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            width="100px"
            height="100px"
            referrerPolicy="no-referrer"
            allow="autoplay"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
