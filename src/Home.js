import './Styles/Home.scss';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToSponsor = () => {
    navigate('/sponsors');
  };
    return  <div className="home">
        <div class="bg-image"></div>

        <div class="header">
            <h1 className='title-ab is-1'>Home</h1>
        </div>

        <div className='content'>

          <div className='text-cent'>
            <h2>Bronco Racing</h2>
            <p>
              We are a first year Formula SAE Electric team from Santa Clara University. Our mission is to ensure that our members can hone their mindset and skill set through the rigor of the Formula SAE competition.
            </p>
            <button className="learn-more" onClick={navigateToAbout}>Learn More</button>
          </div>

          <div className='text-cent'>
            <h2>Our goal</h2>
            <p>
              We are planning on a two year design cycle. Our first year we will focus on training members so they can succeed in whichever subteam they choose to pursue. In addition to software and fabrication training, we will also begin working on our vehicles chassis. Our second year will focus on fabrication of the vehicle and preparing for our first competition in 2024.
            </p>
          </div>

          <div className='text-cent'>
            <h2>Sponsorships</h2>
            <p>
              We are always looking for more sponsorships. We have multiple sponsorship tiers. For corporate sponsorships, please reach out to the team.
            </p>
            <button className="learn-more" onClick={navigateToSponsor}>Sponsor Us</button>
          </div>

        </div>
      </div>
  }
