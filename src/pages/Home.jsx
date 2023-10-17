import scottProfilePic from "../imgs/picofme.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="row">
        <section className="ms-auto mt-5 col-lg-4">
          <img
            src={scottProfilePic}
            alt="placeholder profile pic"
            className="image-fluid img-thumbnail rounded-circle mb-sm-3 w-auto h-auto"
          />
        </section>
        <section className="col-lg-5 m-auto">
          <div className="box-info">
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
          </div>
        </section>
      </div>
      <section className="mt-5 col-lg-12">
        <h3 className="me-2">Short bio</h3>
        <div className="box-info p-2 txt-md">
          <p>
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
        </div>
      </section>
    </>
  );
};

export default Home;
