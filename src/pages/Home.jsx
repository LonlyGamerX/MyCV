import scottProfilePic from "../imgs/picofme.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="row">
        <section className="ms-auto marginBot mt-5 col-lg-4">
          <img
            src={scottProfilePic}
            alt="placeholder profile pic"
            className="image-fluid img-thumbnail rounded-circle mb-sm-3  w-auto h-auto"
          />
        </section>
        <section className="col-lg-5 m-auto boxInfo">
          <h1 className="text-center mb-3 text-decoration-underline">Info</h1>
          <ul className="txt-md text-center">
            <li>{t("title")}</li>
            <li>{t("name")}</li>
            <li>{t("birthday")}</li>
            <li>{t("colors")}</li>
            <li>{t("hobbies")}</li>
            <li>{t("lanuages")}</li>
            <li>{t("programming")}</li>
            <li>{t("games")}</li>
            <li>{t("dream-job")}</li>
          </ul>
        </section>
      </div>
      <section className="col-lg-12 mt-5 m-auto boxInfo">
        <h3 className="me-2 text-center text-decoration-underline mb-4">
          Short bio
        </h3>
        <p className="txt-md p-2">
          {t("aboutMe.p1")}
          <br />
          <br />
          {t("aboutMe.p2")}
          <br />
          <br />
          {t("aboutMe.p3")}
          <br />
          <br />
          {t("aboutMe.p4")}
        </p>
      </section>
    </>
  );
};

export default Home;
