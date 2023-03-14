import '../App.css'

function Project({project}) {
    const projectImagePath = `../assets/${project.projectImage}`
    return (
      <>
        <div className="project bg-white w-96 m-5 rounded-lg">
          <div>
          {/* <div className="w-full h-60 lg:w-80 sm:w-60"> */}
            <img className="object-contain rounded-t-lg " src={project.projectImage} />
          </div>
          <h1 className="text-gray-900 m-1 font-mono font-extrabold">{project.name}</h1>
          <h3 className="text-gray-600 ml-1 m-3 font-mono">{project.description} by {project.author}</h3>
        </div>

        {/* <div className="bg-[url(`${projectImagePath}`)]"> */}
        {/* <div className="bg-[url('assets/P1.png')] w-96 h-96">
            </div> */}
        {/* <div className={`${bg-[url(projectImagePath)]}`}>
            </div> */}

        {/* <div className={'bg-[url("'+projectImagePath+'")]'}>
            </div> */}

        {/* <div className="bg-[url('assets/P2.jpg')] w-96 h-96">
            </div>

            <div className="bg-[url('assets/P3.avif')] w-96 h-96">
            </div> */}
      </>
    );
}
export default Project;