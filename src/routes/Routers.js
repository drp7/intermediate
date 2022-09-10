import { Route, Routes } from "react-router-dom";
import { Markdown, RandomPerson } from "../projects";
import NavProjects from "../NavProjects";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<NavProjects />} />
      <Route path="/markdown" element={<Markdown />} />
      <Route path="/random-user" element={<RandomPerson />} />
    </Routes>
  );
}
