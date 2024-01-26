// Images
import cvImg from "../imgs/cv.png";
import examImg from "../imgs/exam.png";
import serverdashboardImg from "../imgs/serverdashboard.png";

const Projects = () => {
  // Url handling
  const handleClick = (url) => {
    window.location.href = url;
  };

  const urlstart = "https://github.com/LonlyGamerX/";

  const projectInfo = [
    { key: "MyCV", label: "My CV Website", imgBg: cvImg },
    { key: "ExamWeb", label: "Exam July 2023", imgBg: examImg },
    {
      key: "serverdashboard",
      label: "Self-host Server Dashboard",
      imgBg: serverdashboardImg,
    },
  ];

  return (
    <div className="mt-5 ms-5 container">
      <div className="row">
        {projectInfo.map((project) => (
          <section
            key={project.key}
            className="col-lg-3 col-md-3 me-3 boxInfo pointerMouse mb-2"
            onClick={() => handleClick(urlstart + project.key)}
            style={{
              backgroundImage: `url(${project.imgBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-white text-center px-3 py-3">
              {project.label}
            </h3>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
