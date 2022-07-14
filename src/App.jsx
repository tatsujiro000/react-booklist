import { Booklist } from "./components/Booklist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  // 🔽 関数を追加
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };

  const languages = ["React", "Vue", "Angular"];
  return (
    // 🔽 1つ目のコンポーネントに関数を渡す
    <BrowserRouter>
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/vue">Vue</Link>
        </li>
        <li>
          <Link to="/angular">Angular</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route
          path="/react"
          element={
            <Booklist language={languages[0]} getData={getDataFromAPI} />
          }
        />
        <Route
          path="/vue"
          element={
            <Booklist language={languages[1]} getData={getDataFromAPI} />
          }
        />
        <Route
          path="/angular"
          element={
            <Booklist language={languages[2]} getData={getDataFromAPI} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;