import SponsorCard from "./components/SponsorCard";
// import ContactForm from "./components/ContactForm";

export default function Sponsors() {
  const sponsors = [
    {
      group: "Sponsors",
      members: [
        {
          name: "Marlboro",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Marlboro_Logo.svg/1200px-Marlboro_Logo.svg.png",
          link: "https://www.smokefree.gov",
        },
      ],
    },
    {
      group: "Technology Partners",
      members: [
        {
          name: "Nasa",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
          link: "nasa.gov",
        },
      ],
    },
    {
      group: "Special Thanks",
      members: [
        {
          name: "Santa Clara University",
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Santa_Clara_U_Seal.svg/1200px-Santa_Clara_U_Seal.svg.png",
          link: "https://www.scu.edu",
        },
        {
          name: "Wonder",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Wonder_Bread_logo.svg/1200px-Wonder_Bread_logo.svg.png",
          link: "nasa.gov",
        },
      ],
    },
  ];

  return (
    <>
      <div className="section container">
        <p className="content">
          Thank you to our sponsors, technology partners, and other supportors.
          Without you, racing would be impossible.
        </p>
      </div>

      {sponsors.map((a) => (
        <>
          <div key={a.group} className="container section">
            <h3 className="subtitle is-3 has-text-centered">{a.group}</h3>
            <div className="members is-flex is-flex-wrap-wrap is-justify-content-center">
              {a.members.map((b, i) => (
                <SponsorCard key={i} sponsor={b} />
              ))}
            </div>
          </div>

          <hr />
        </>
      ))}
      <div className="section">
        <h2 className="title is-3 has-text-centered">
          <a href="https://forms.gle/bJu8PGZaXzDn2kXQ6" target="_blank">
            Interested in joining them?
          </a>
        </h2>
        <p className="content">
          Monetary sponsorships are not the only sponsorships we accept.
          Software and part sponsorships are always helpful. If you can make
          precision parts or provide components that will be useful for an
          electric car, feel free to reach out.
        </p>
        <p className="content">
          If your company is interested in sponsoring Bronco Racing, please
          reach out to the team to request a copy of our sponsorship packet. Our
          sponsorship packet details levels of sponsorship and what is included
          at each level.
        </p>
        <p className="content"></p>
      </div>
    </>
  );
}
