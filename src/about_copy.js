import './Styles/About.css';

export default function About() {
    return <div className='footer-alignment'>
        <div class="bg-image"></div>

        <div class="header">
            <h1 className='title'>About</h1>
        </div>

        <div className='content'>
            <div className='footer-alignment-left'>
                <h2 className='sub-title-text-left'>What is Formula SAE?</h2>
                <span className='paragraph-text-left'>
                Formula SAE is an intercollegiate engineering design competition that is hosted by SAE International. Students from universities around the world design and build a small Formula 1 style car over the academic year to compete in a series of dynamic and static events. The teams are scored throughout these events by professional engineers to determine winners of the competition.
                </span>
            </div>

            <div className='image'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Curtin_Motorsport_Team_2019_car_.jpg/2560px-Curtin_Motorsport_Team_2019_car_.jpg" alt="FSAE car"></img>
            </div>

            <div className='image'>
            <img src="./FSAE Leadership Picture-1.jpg" alt="SCU FSAE Leadership"></img>
            </div>

            <div class='footer-alignment-right'>
                <h2 className='sub-title-text-right'>Santa Clara University's FSAE Journey</h2>
                <span className='paragraph-text-right'>
                Santa Clara Formula SAE was created in 2022 with the aim of providing students with a practical application of the knowledge gained through college curricula, experience working in a collaborative environment, and a fantastic opportunity to network with other students, faculty, and companies. Our mission is to ensure that our members can hone their mindset and skill set through the rigor of the Formula SAE competition. Members are encouraged to think boldly, learn often, and exceed their expectations.
                </span>
            </div>
        </div>
    </div>
}