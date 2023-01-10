// got to be a better way to import this all at once
import React from 'react'
import "./AboutOurTeams.scss"
import Zane from "../assets/Zane_Kempler.jpg"
import Khris from "../assets/Kristoffer_Blomquist.jpg"
import Eugene from "../assets/captain.png"
import James from "../assets/james.png"
import Katie from "../assets/katie.png"
import Serena from '../assets/Serena.png'
import Max from "../assets/max.png"


// Bio container
function PersonElement(props) {
    var baseImage = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
    return (
        <>
            <div className='bio'>       
                <img className='bio-profile-image' src={props.image} alt={baseImage}></img>
                <div className='bio-profile-info'>
                    <p>{props.name}</p>
                    <p>{props.major}</p>
                    <div className='bio-profile-about'>
                        <p>{props.about}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default function AboutOurTeams() {
    
    //Bios need a better way to do this
    var SerenaBio = "About Me: I'm Serena and I'm a mechanical engineering student graduating in 2025. In my free time, I like to play bass or work on smaller side projects in SolidWorks. After I graduate, I would like to work on medical devices or in agriculture."
    var JamesBio = "About Me: My name is James Masukawa, a sophomore mechanical engineering major. I enjoy working on cars and modifying them to look and perform at their best. I also enjoy working on my golf game and just being outdoors."
    var ZaneBio = "About Me: I am Zane Kempler, and I will be leading chassis team. I am currently studying Mech-E with a minor in Aerospace, and I finish my undergraduate studies in 2025. Within my studies, I am fascinated by manufacturing and mechanical design, which are key elements of what chassis team does. Outside of academics, most of my time is spent either running a successful sneaker reselling business or weightlifting."
    var EugeneBio = "About Me: Coming from Newport Beach in Orange County CA, I swam competitively in high school and also participated in FRC as president and lead of several sub-teams. As of coming to SCU, I now compete in triathlons and am the sub-team leader of Suspension."
    var KhrisBio = "About Me: Hi, I'm Kristoffer Blomquist. I was born and raised here in the Bay Area and am currently a Junior Accounting major at Santa Clara University. In my free time I enjoy working on cars, practicing my photography, and following my love of the outdoors through camping, backpacking, and skiing."
    var baseImage = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
    var KatieBio = "Hi my name is Katie Ott, I’m a current sophomore majoring in mechanical engineering. In my free time I enjoy singing, spending time with family and friends, and figure skating."
    var JordanBio = "My name is Jordan Mosakowski, and I am a junior Computer Science and Engineering student from Boulder, Colorado. Outside of school, you can find me playing piano, watching Formula 1 racing, or going to concerts."
    return (
        <>
        <div className="header">
            <h1 className='title-ab is-1'>About Our Team</h1>
        </div>
            
            <div className='container'>
                <h3>Captains</h3>
                <div className='Captain-Bios'>
                    <PersonElement name="James Masukawa" major="Mechanical Engineering" image={James} about={JamesBio}/>
                    <PersonElement name="Serena Thompson" major="Mechanical Engineering" image={Serena} about={SerenaBio}/>
                    <PersonElement name="Maximus Wilson" major="Mechanical Engineering" image={Max} />
                </div>
                <h3>Subteam Leads</h3>
                <div className='Captain-Bios'>
                    <PersonElement name="Zane Kempler" major="Mechanical Engineering" image={Zane}  about={ZaneBio}/>
                    <PersonElement name="Katie Ott" major="Mechanical Engineering" image={Katie}  about={KatieBio}/>
                    <PersonElement name="Jordan Mosakowski" major="Computer Engineering" image={baseImage}  about={JordanBio}/>
                </div>
                <div className='Captain-Bios'>
                    <PersonElement name="Kris Blomquist" major="Accounting" image={Khris}  about={KhrisBio}/>
                    <PersonElement name="Justin DiNapoli" major="Finance" image={baseImage} />
                    <PersonElement name="Eugene Lim" major="Mechanical Engineering" image={Eugene} about={EugeneBio} />
                </div>
                <hr className="hr-element"></hr>
                <h1>Let's Build Something Together!</h1>
                <button className='in-touch-button' onClick={() => window.location = "mailto:srthompson@scu.edu"}>Get in Touch!</button>
                <hr className='hr-element'></hr>
            </div>   
        </>
    )
}
