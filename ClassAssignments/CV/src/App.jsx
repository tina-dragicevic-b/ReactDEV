import { useState } from 'react'
import Header from './components/Header'
import AboutUser from './components/AboutUser';
import Project from './components/Project';

function App() {

  const projects = [
    {
      name: "Project One",
      projectImage:
        "https://img.graphicsurf.com/2018/11/project-management-vector-free-icons-set2.jpg",
      description: "Guia voluptas sit.",
      author: "Tina",
    },
    {
      name: "Project Two",
      projectImage:
        "https://blog.topdesk.com/nl/wp-content/uploads/sites/14/2022/03/AM-2022_Visual-Blog-01-e1664529576929.png",
      description: "Ratione voluptatem sequi.",
      author: "Tina",
    },
    {
      name: "Project Three",
      projectImage:
        "https://img.freepik.com/premium-vector/illustration-downloading-graphic-design-internet-server-network-down-arrow-download_4968-1026.jpg",
      description: "Neque porro quisquam est.",
      author: "Tina",
    },
    // {
    //   name: "P3",
    //   projectImage: "https://img.freepik.com/premium-vector/illustration-downloading-graphic-design-internet-server-network-down-arrow-download_4968-1026.jpg",
    //   description: "",
    // author: "Tina"
    // },{
    //   name: "P3",
    //   projectImage: "https://img.freepik.com/premium-vector/illustration-downloading-graphic-design-internet-server-network-down-arrow-download_4968-1026.jpg",
    //   description: "",
    // author: "Tina"
    // },
  ];

  return (
    <>
      <Header></Header>
      <AboutUser></AboutUser>
      <div className="grid grid-cols-3 xsm:grid-cols-1 justify-items-center mt-16 mb-36">
        {projects.map((project) => (
          <Project key={project.name} project={project}></Project>
        ))}
      </div>
      
    </>
  );
}

export default App
