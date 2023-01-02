import SponsorCard from '../components/SponsorCard'
import './Sponsors.scss'
import scu_logo from '../assets/scu_logo.png'
import altium_logo from '../assets/altium_logo.jpg'
import solidworks_logo from '../assets/solidworks.png'
import mathworks_logo from '../assets/mathworks_logo.jpg'
import altair_logo from '../assets/altair_logo.png'

export default function Sponsors() {
  const sponsors = [
    {
      members: [
        {
          name: 'Altium',
          img: altium_logo,
          description:
            'From automotive and aerospace to consumer electronics and medical devices, Altium is always there for designers whenever and wherever.',
          link: 'https://www.altium.com'
        },
        {
          name: 'SOLIDWORKS',
          img: solidworks_logo,
          description: "SOLIDWORKS delivers connected, easy-to-use tools that help you innovate and accelerate every aspect of your product development process.",
          link: 'https://www.solidworks.com/',
        },
        {
          name: 'MathWorks',
          img: mathworks_logo,
          description:
            'MathWorks develops, sells, and supports MATLAB and Simulink products.',
          link: 'https://www.mathworks.com/'
        },
        {
          name: 'Altair',
          img: altair_logo,
          description:
            'Altair provides software and cloud solutions for simulation, IoT, high performance computing, data analytics, and artificial intelligence',
          link: 'https://www.altair.com/'
        }
      ]
    },
    {
      group: 'Special Thanks',
      members: [
        {
          name: 'Santa Clara University',
          img: scu_logo,
          description:
            "Located in the heart of Silicon Valley, Santa Clara University blends high-tech innovation with a social consciousness grounded in the Jesuit educational tradition. Santa Clara's undergraduate and graduate programs span areas ranging from psychology to sustainable-energy engineering and from theatre arts to business analytics.",
          link: 'https://www.scu.edu'
        }
      ]
    }
  ]

  return (
    <>
      <div className="parallax sponsors">
        <div className="bg-image"></div>

        <div className="header">
            <h1 className='title-ab is-1'>Sponsors</h1>
        </div>

        <div className="parallax-gap">
          <div className="hero is-medium container has-text-centered">
            <div className="hero-body">
              {/* <p className="title header">Sponsors</p> */}
              <p className="subtitle">
                Thank you to our sponsors, technology partners, and other
                supporters. Without you, racing would be impossible.
              </p>
            </div>
          </div>
        </div>

        <div className="parallax-content has-bleed-more">
          {sponsors.map((a, i) => (
            <>
              <div key={i} className="container section">
                {a.group ? (
                  <h3 className="subtitle is-3 has-text-centered">{a.group}</h3>
                ) : (
                  ''
                )}

                <div className="members is-flex is-flex-wrap-wrap is-justify-content-center">
                  {a.members.map((b, i) => (
                    <SponsorCard key={i} sponsor={b} />
                  ))}
                </div>
              </div>

              <div className="container">
                <hr />
              </div>
            </>
          ))}

          <div className="section container">
            <h2 className="title is-3 has-text-centered">
                Interested in joining them?
            </h2>
            <p className="content">
              Monetary sponsorships are not the only sponsorships we accept.
              Software and part sponsorships are always helpful. If you can make
              precision parts or provide components that will be useful for an
              electric car, feel free to reach out.
            </p>
            <p className="content mb-6">
              If your company is interested in sponsoring Bronco Racing, please
              reach out to the team to request a copy of our sponsorship packet.
              Our sponsorship packet details levels of sponsorship and what is
              included at each level.
            </p>
            <div className="title has-text-centered">
              <a className='button' href="mailto:srthompson@scu.edu" target="_blank">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
