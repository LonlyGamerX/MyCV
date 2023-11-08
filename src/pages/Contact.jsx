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
  ];

  const addressStuff = [
    {
      key: "city",
      label: "City",
      tag: "Vejile",
    },
    {
      key: "address",
      label: "Address",
      tag: "Egtvedvej 91, 6040",
    },
    {
      key: "phone",
      label: "Phone",
      tag: "(+45) 27 58 11 07",
    },
    {
      key: "mail",
      label: "Mail",
      tag: "technomusicgaming117@gmail.com",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row ms-5 mt-5">
          <section className="boxInfo me-3">
            <h2 className="text-center mb-5 text-decoration-underline">
              Personal Info
            </h2>
            {addressStuff.map((address) => (
              <div
                key={address.key}
                className="row"
                onClick={() => handleClick(address.url)}
              >
                <h3 className="text-center mb-3">
                  {address.label}: {address.tag}
                </h3>
              </div>
            ))}
            <h2 className="text-center mt-5 mb-3 text-decoration-underline">
              Social Media
            </h2>
            {mediaStuff.map((media) => (
              <div
                key={media.key}
                className="pointerMouse"
                onClick={() => handleClick(media.url)}
              >
                <h3 className="text-center mb-3">
                  {media.label}: {media.tag}
                </h3>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
