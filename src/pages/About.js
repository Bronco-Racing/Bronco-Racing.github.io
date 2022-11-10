import './About.scss';

export default function About() {
    return <div>
        <div class="bg-image"></div>

        <div class="header">
            <h1 className='title-ab is-1'>About</h1>
        </div>

        <div className='content'>
            <div className='text-cent-left'>
                <h2>What is Formula SAE?</h2>
                <span>
                Formula SAE is an intercollegiate engineering design competition that is hosted by SAE International. Students from universities around the world design and build a small Formula 1 style car over the academic year to compete in a series of dynamic and static events. The teams are scored throughout these events by professional engineers to determine winners of the competition.
                </span>
            </div>

            <div className='img-container'>
                <img src="./FSAE_car.jpg" alt="FSAE car"></img>
            </div>

            <div className='img-container'>
            <img src="./FSAE Leadership Picture-1.jpg" alt="SCU FSAE Leadership"></img>
            </div>

            <div className='text-cent-right'>
                <h2>Santa Clara University's FSAE Journey</h2>
                <span>
                Santa Clara Formula SAE was created in 2022 with the aim of providing students with a practical application of the knowledge gained through college curricula, experience working in a collaborative environment, and a fantastic opportunity to network with other students, faculty, and companies. Our mission is to ensure that our members can hone their mindset and skill set through the rigor of the Formula SAE competition. Members are encouraged to think boldly, learn often, and exceed their expectations.
                </span>
            </div>
        </div>
    </div>
}
