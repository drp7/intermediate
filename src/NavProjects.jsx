import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavProjects() {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center flex-col bg-gradient-to-tl from-slate-900  to-blue-900 w-screen min-h-screen  ">
      <h1 className="text-3xl font-bold text-cyan-400 m-10">Projects</h1>
      <div className="flex  flex-wrap  gap-4 text-xl font-semibold justify-center items-center">
        <div
          onClick={() => navigate("/markdown")}
          className="bg-slate-200 hover:text-4xl border  w-60 h-24 grid place-content-center"
        >
          Markdown
        </div>
        <div
          onClick={() => navigate("/random-user")}
          className="bg-slate-200 hover:text-4xl border  w-60 h-24 grid place-content-center"
        >
          Random user
        </div>
        <div className="bg-slate-200 border  w-60 h-24 grid place-content-center">
          Project3
        </div>
        <div className="bg-slate-200 border  w-60 h-24 grid place-content-center">
          Project4
        </div>
        <div className="bg-slate-200 border  w-60 h-24 grid place-content-center">
          Project5
        </div>
      </div>
    </section>
  );
}
