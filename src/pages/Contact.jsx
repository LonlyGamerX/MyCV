import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SMTPClient } from "emailjs";

const Contact = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get the form input values
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    const client = new SMTPClient({
      user: process.env.REACT_APP_EMAIL_USER,
      password: process.env.REACT_APP_EMAIL_PASSWORD,
      host: process.env.REACT_APP_EMAIL_HOST,
      ssl: true,
    });

    client.send(
      {
        text: message,
        from: email,
        to: "technomusicgaming117@gmail.com",
        subject: subject,
      },
      (err, message) => {
        if (err) {
          console.log(err);
        } else {
          console.log(message);
        }
      }
    );
  };

  const mediaStuff = [
    {
      key: "github",
      label: "Github",
      tag: "LonlyGamerX",
      url: "https://github.com/LonlyGamerX",
    },
    {
      key: "discord",
      label: "Discord",
      tag: "lonlygamerx",
      url: "https://discordapp.com/users/406536304612999188",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      tag: "Scott Zangenberg",
      url: "https://www.linkedin.com/in/scottzangenberg/",
    },
    {
      key: "twitch",
      label: "Twitch",
      tag: "LonlyGamerX",
      url: "https://www.twitch.tv/lonlygamerx",
    },
    {
      key: "youtube",
      label: "Youtube",
      tag: "LonlyGamerX",
      url: "https://www.youtube.com/channel/UCv0CqbjfUOsR6sefB_bp1Tg",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <section className="col-lg-5 me-3 box-info">
            <h2 className="text-center mb-5 text-decoration-underline">
              Contact Me
            </h2>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="subject">
                <Form.Label>subject</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className="btnOwn mb-3" type="submit">
                Send
              </Button>
            </Form>
          </section>
          <section className="col-lg-5 box-info">
            <h2 className="text-center mb-5 text-decoration-underline">
              Social Media
            </h2>
            {mediaStuff.map((media) => (
              <section
                key={media.key}
                className="row justify-content-center pointerMouse"
                onClick={() => handleClick(media.url)}
              >
                <h3 className="text-center mb-2">
                  {media.label}: {media.tag}
                </h3>
              </section>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
