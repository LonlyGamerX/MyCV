const Projects = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  const projects = {
    cv: "https://github.com/LonlyGamerX/MyCV",
    exam: "https://github.com/LonlyGamerX/exam2023",
    McServer: "https://github.com/LonlyGamerX/mcservertemplate",
    none: "https://github.com/LonlyGamerX/",
  };

  return (
    <>
      <div className="mt-5 ms-5 container">
        <div className="row">
          {/* Project 1 */}
          <section
            className="col-lg-4 me-lg-3 box-info codeBG pointerMouse"
            onClick={() => handleClick(projects.cv)}
          >
            <h3 className="text-white text-center px-5 py-5">My CV Website</h3>
          </section>
          {/* Project 2 */}
          <section
            className="col-lg-4 me-lg-3 box-info codeBG pointerMouse"
            onClick={() => handleClick(projects.exam)}
          >
            <h3 className="text-white text-center px-5 py-5">Exam July 2023</h3>
          </section>
          {/* Project 3 */}
          <section
            className="col-lg-4 me-lg-3 box-info codeBG pointerMouse"
            onClick={() => handleClick(projects.McServer)}
          >
            <h3 className="text-white text-center px-5 py-5">
              MC Server template
            </h3>
          </section>
        </div>
        <div className="mt-3 row">
          {/* Project 4 */}
          <section
            className="col-lg-4 me-lg-3 box-info codeBG pointerMouse"
            onClick={() => handleClick(projects.none)}
          >
            <h3 className="text-white text-center px-5 py-5">
              Example Project Web
            </h3>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
