import SponsorCard from "./components/SponsorCard";
// import ContactForm from "./components/ContactForm";

export default function Sponsors() {
  const sponsors = [
    {
      group: "Platinum Sponsors",
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
          name: "These guys forgot an image",
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
      <p>Thank you to our sponsors, without which, racing would be impossible.</p>

      {sponsors.map((a) => (
        <>
          <div key={a.group} className="section is-medium">
            <h3 className="subtitle is-3 center">{a.group}</h3>
            <div className="members">
              {a.members.map((b, i) => (
                <SponsorCard key={i} sponsor={b} />
              ))}
            </div>
          </div>

          <hr />
        </>
      ))}
      <div className="section is-medium">
        <h2 className="title is-3 center">
          <a href="https://forms.gle/bJu8PGZaXzDn2kXQ6" target="_blank">
            Interested in joining them?
          </a>
        </h2>
      </div>
    </>
  );
}
