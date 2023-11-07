import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const handleClick = (url) => {
    window.location.href = url;
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
    {
      key: "mail",
      label: "Mail",
      tag: "technomusicgaming117@gmail.com",
      url: "mailto:technomusicgaming117@gmail.com",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
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
