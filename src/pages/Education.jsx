import Button from "react-bootstrap/Button";
import examsIgcse from "../downloads/IGCSE.pdf";
import cvDoc from "../downloads/CV-Portfolio.docx";
import examsWeb from "../downloads/WebUdvikler.pdf";
import Table from "react-bootstrap/Table";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  const educationInfo = [
    {
      key: "endingexam",
      subject: t("subject1"),
      grade: "7",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "danish",
      subject: t("subject2"),
      grade: "E",
      year: "2021",
      educationSystem: t("eduIB"),
    },
    {
      key: "exam-oral",
      subject: t("subject3"),
      grade: "7",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "exam-project",
      subject: t("subject4"),
      grade: "4",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "math",
      subject: "Math",
      grade: "C",
      year: "2018",
      educationSystem: "British education system",
    },
    {
      key: "englishlanguage",
      subject: "English Speaking and Listening",
      grade: "E",
      year: "2018",
      educationSystem: "British education system",
    },
    {
      key: "englishliterature",
      subject: "English Literature",
      grade: "F",
      year: "2018",
      educationSystem: "British education system",
    },
    {
      key: "spanish",
      subject: "Spanish",
      grade: "D",
      year: "2018",
      educationSystem: "British education system",
    },
    {
      key: "co-ordinatedscience",
      subject: "Co-ordinated Science",
      grade: "D",
      year: "2018",
      educationSystem: "British education system",
    },
    {
      key: "informationandcommunicationtechnology",
      subject: "Information and Communication Technology",
      grade: "E",
      year: "2018",
      educationSystem: "British education system",
    },
    {
      key: "travelandtourism",
      subject: "Travel and Tourism",
      grade: "E",
      year: "2018",
      educationSystem: "British education system",
    },
    {
      key: "history",
      subject: "History",
      grade: "F",
      year: "2018",
      educationSystem: "British education system",
    },
    {
      key: "css",
      subject: "Advanced CSS",
      grade: "02",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "frontend",
      subject: "Advanced Frontend",
      grade: "10",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "cms",
      subject: "CMS",
      grade: "04",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "dataservices",
      subject: "Data services and integration",
      grade: "10",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "renewal",
      subject: "Professional renewal",
      grade: "07",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "job",
      subject: "Job searching",
      grade: "02",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "development",
      subject: "Practical web development",
      grade: "07",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "programming",
      subject: "Programming",
      grade: "02",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "project",
      subject: "Project organization",
      grade: "07",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "apps",
      subject: "Apps",
      grade: "04",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
    {
      key: "serverside",
      subject: "Serverside Programming",
      grade: "10",
      year: "2023",
      educationSystem: t("eduDanish"),
    },
  ];

  return (
    <>
      <section className="col-lg-12 mb-3 boxInfo">
        <h2 className="text-decoration-underline text-center mb-3">
          Experience
        </h2>
        <section className="col-lg-11 ms-lg-5 text-center">
          <Table responsive striped bordered hover size="sm" variant="light">
            <thead>
              <tr>
                <th>{t("programminglang")}</th>
                <th>{t("learnit")}</th>
                <th>{t("learningit")}</th>
                <th>{t("likeit")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTML, CSS, Javascrit</td>
                <td>✅</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>React JS</td>
                <td></td>
                <td></td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Bootstrap</td>
                <td></td>
                <td></td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Python</td>
                <td></td>
                <td>✅</td>
                <td></td>
              </tr>
              <tr>
                <td>Java</td>
                <td></td>
                <td>✅</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </section>
      </section>
      <section className="col-lg-12 boxInfo">
        <h2 className="text-decoration-underline text-center mb-4">
          Education
        </h2>
        <div className="row justify-content-center mb-4">
          <section className="col-lg-2">
            <Button
              variant="outline-secondary"
              className="ms-3 mt-md-2 mt-sm-2 btnOwn"
              href={examsIgcse}
              download
            >
              {t("downloadIGCSE")}.pdf
            </Button>
          </section>
          <section className="col-lg-3">
            <Button
              variant="outline-secondary"
              className="ms-3 mt-md-2 mt-sm-2 btnOwn"
              href={examsWeb}
              download
            >
              {t("downloadFrontend")}.pdf
            </Button>
          </section>
          <section className="col-lg-3">
            <Button
              variant="outline-secondary"
              className="ms-3 mt-md-2 mt-sm-2 btnOwn"
              href={cvDoc}
              download
            >
              {t("downloadCV")}.pdf
            </Button>
          </section>
        </div>
        <section className="col-lg-11 ms-lg-5">
          <Table responsive striped bordered hover size="sm" variant="light">
            <thead>
              <tr>
                <th>{t("subjectlang")}</th>
                <th>{t("gradelang")}</th>
                <th>{t("yearlang")}</th>
                <th>{t("educationlang")}</th>
              </tr>
            </thead>
            <tbody>
              {educationInfo.map((education) => (
                <tr key={education.key}>
                  <td>{education.subject}</td>
                  <td>{education.grade}</td>
                  <td>{education.year}</td>
                  <td>{education.educationSystem}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </section>
    </>
  );
};

export default Education;
