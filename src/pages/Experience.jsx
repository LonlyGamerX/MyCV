import React from "react";
import Button from "react-bootstrap/Button";
import examsIgcse from "../exams/IGCSE.pdf";
import Table from "react-bootstrap/Table";

const Experience = () => {
  const educationInfo = [
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
  ];

  return (
    <>
      <section className="col-lg-12 mb-3 boxInfo">
        <h2 className="text-decoration-underline text-center mb-3">
          Experience
        </h2>
        <section className="col-lg-11 ms-lg-5 text-center">
          <Table striped bordered hover variant="dark" size="lg">
            <thead>
              <tr>
                <th>Programming lanuage</th>
                <th>Learnt it</th>
                <th>learning it</th>
                <th>love it/prefer to use it</th>
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
          <section className="col-lg-3">
            <Button
              variant="outline-secondary"
              className="ms-md-3 btnOwn"
              href={examsIgcse}
              download
            >
              Download my IGCSE.pdf
            </Button>
          </section>
          <section className="col-lg-3">
            <Button
              variant="outline-secondary"
              className="ms-md-3 mt-md-2 mt-sm-2 btnOwn"
              r
              href={examsIgcse}
              download
            >
              Download my WebExams.pdf
            </Button>
          </section>
        </div>
        <section className="col-lg-11 ms-lg-5">
          <Table striped bordered hover variant="dark" size="lg">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
                <th>Year</th>
                <th>Education System</th>
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

export default Experience;
