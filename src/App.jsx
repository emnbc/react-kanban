import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { BoardPage } from "./pages/BoardPage/BoardPage";
import { TaskPage } from "./pages/TaskPage/TaskPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskProvider } from "./providers/task-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BoardPage />,
  },
  {
    path: "/tasks/:taskId",
    element: <TaskPage />,
  },
]);

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <RouterProvider router={router} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </TaskProvider>
  );
}

export default App;
