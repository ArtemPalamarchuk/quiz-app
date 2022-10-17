import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "@components/Main/Main";
import {Quiz} from "@components/Quiz/Quiz";
import './style.scss'

export const pages = {
  main: '/',
  quiz: '/:quizId'
}

function App() {
  return (
    <Routes>
      <Route path={pages.main} element={<Main/>}/>
      <Route path={pages.quiz} element={<Quiz />} />
      <Route path="*" element={<Navigate to={pages.main} replace/>}/>
    </Routes>
  );
}

export default App;
