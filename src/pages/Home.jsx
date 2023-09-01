const Home = () => {
  return (
    <>
      <div className="row">
        <section className="ms-5 col-lg-4">
          <img
            src="https://via.placeholder.com/300"
            alt="placeholder profile pic"
            className="image-fluid img-thumbnail rounded-circle"
          />
        </section>
        <section className="col-lg-6 mt-lg-5">
          <div className="box-info">
            <h1 className=" text-center mb-3">Info</h1>
            <ul>
              <li>Full Name: Scott Pirrer Damagaard Zangenberg</li>
              <li>Birthday: August 1st, 2001</li>
              <li>Favorite colors: cyan & black</li>
              <li>Hobbies: playing videogames & building Legos</li>
              <li>Lanuages: English, Danish and a bit of Spanish</li>
              <li>
                Favorite Games: Halo 4, Minecraft, League of legends and Destiny
                2
              </li>
              <li>Dream job: playing videogames for a living</li>
            </ul>
          </div>
        </section>
      </div>
      <section className="mt-5 col-lg-12">
        <h3 className="me-2">Short bio</h3>
        <div className="box-info p-2">
          <p>
            I was born in Denmark on the 1st of August 2001 in [insert
            /location]. My memory has always been hazy regarding my early years.
            At the age of [N/A], I relocated to Spain with my two older sisters
            to stay with our grandmother while our parents prepared to move from
            Denmark. Our grandma resided in a trailer park-style community,
            where we had the chance to meet diverse people and enjoy some
            excitement while waiting for our parents to join us in Spain. Once
            they arrived, we went through several relocations until we settled
            in Mijas Pueblo on the outskirts in the south of Spain.
            <br />
            <br />
            Afterward, I attended Sunny View School, which, in my opinion,
            wasn't the best due to frequent bullying. After finishing year [7],
            I switched to The Ark Christian School, which I found to be a
            significant improvement both teachers and students. There, I
            completed my IGCSE. Subsequently, I returned to Denmark, both to
            explore something new and to pursue my A-levels at Skals Boarding
            School in northen Denmark.
            <br />
            <br />
            Unfortunately, I was unable to complete my A-levels due to I fallen
            to a severe illness. It was during this time that my family and I
            discovered I had two failing kidneys, leading me to drop out on
            [date] for an operation to receive a new kidney from my mother. Due
            to this my family had to move back to Denmark to be closer to the
            hospital and me. After my recovery, I attended a boarding school in
            Grenaa, where I attempted pre-IB and IB programs. Regrettably, I did
            not make it into the IB program due to high absence and poor grades
            caused by medication side effects and stress from a weakened immune
            system from kidney treatment during covid. <br />
            <br />I also felt that most of the teachers had given up on me,
            which further discouraged me from pursuing IB at that school even if
            i hadn't failed pre-IB. Consequently, I transferred to another
            boarding school in the same area called 3D College, where I earned a
            degree as a Frontend Web Developer. Following that achievement, I
            sought to expand my skills into backend development to become a
            full-stack web developer. [END]
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
