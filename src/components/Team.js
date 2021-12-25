import React from 'react';
import '../Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const img_path = process.env.PUBLIC_URL +'/assets/';

export const Team = () => {
    return (
        <>
        <div className="container-fluid mainBody">
             <div className="container ">
               <div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`white`}}>Our Team</h1> 

           
        </div>
    </div>
    </div>
{/*<div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`black`}}>President</h1>
        </div>
    </div>
</div>
<div className="col-xl-4 col-sm-6 mx-auto">
            <div className="our-team">
                <div className="pic">
                    <img src="" alt=""/>
                    <div className="over-layer">
                        <p className="description">
                            sample text
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="#" className="fab fa-linkedin"></a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Tanishka Shetty</h5>
                    <small>President</small>
                </h3>
            </div>
        </div>
        <div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`black`}}>Vice-President</h1>
        </div>
    </div>
</div>
    <div className="row">
        <div className="col-xl-4 col-sm-6 mx-auto">
            <div className="our-team">
                <div className="pic">
                    <img src="" alt=""/>
                    <div className="over-layer">
                        <p className="description">
                            sample text
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="#" className="fab fa-linkedin"></a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Anmol Warikoo</h5>
                    <small>Vice-President</small>
                </h3>
            </div>
        </div>
        <div className="col-xl-4 col-sm-6 mx-auto">
            <div className="our-team">
                <div className="pic">
                    <img src="" alt=""/>
                    <div className="over-layer">
                        <p className="description">
                            sample text
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="#" className="fab fa-linkedin"></a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Shreshti Yadav</h5>
                    <small>Vice-President</small>
                </h3>
            </div>
        </div>
       
    </div>
    <div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`black`}}>Treasurer</h1>
        </div>
    </div>
</div>
<div className="col-xl-4 col-sm-6 mx-auto">
            <div className="our-team">
                <div className="pic">
                    <img src="" alt=""/>
                    <div className="over-layer">
                        <p className="description">
                            sample text
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="#" className="fab fa-linkedin"></a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Pranny Khushalani</h5>
                    <small>Treasurer</small>
                </h3>
            </div>
        </div> */}

    
    <div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`white`}}>Technical Team</h1>
        </div>
    </div>
</div>

<div className="row " >
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}atharva_joshi.png`}alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        A biological neural network trained for 19 years.
                        </p>
                        <ul className="social-link">
                      
                            
                            <li><a href="https://www.linkedin.com/in/atharva-joshi-a89a671b2" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Atharva Joshi</h5>
                    <small>Machine Learning Head</small>
                </h3>
            </div>
        </div>
        <div className="col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}himanshu_dhar.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Have you tried turning it on and off again?
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/himanshu-dhar-7411671b2/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Himanshu Dhar</h5>
                    <small>Web Development Head</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}vivek_verma.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Does what excites
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/omegaviv" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Vivek Verma</h5>
                    <small>App Development Head</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}aditya_malvadkar.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        I am a fast learner.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/aditya-malvadkar-93a6b2221/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Aditya Malvadkar</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>
        <div className="col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}anoushka_mudkhedkar.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Just trying my best
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/anoushka-mudkhedkar-2932a720a" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Anoushka Mudhkhedkar</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}krishna_sudan.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        A passionate learner who believes that knowledge is never wasted. 
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/krishna908" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Krishna</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}kshitij_chaudhari.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        You can always find me in front of laptop screen, with so many classNamees and functions
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/kshitij-chaudhari-87440b206" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Kshitij Chaudhari</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>

        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}mitul_koul.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Want to learn everything.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/mitulkoul/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Mitul Koul</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}rehanuddin_qazi.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        A person that u can rely on in your every situation 
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/rehanuddin-qazi-0a452020a/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Rehanuddin Qazi</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}sahil_hariyal.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        I'm creative, hard-working, and detail-oriented.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/sahil-hariyal-957666220" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Sahil Hariyal</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}sanket_jagdale.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Someone who has courage to follow his heart and intuition
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/sanket-jagdale-09/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Sanket Jagdale</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}sanket_patil.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        I'm passionate about my work.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/sanket-patil-218852207" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Sanket Patil</h5>
                    <small>Technical Coordinator</small>
                </h3>
            </div>
        </div>
        
    </div>
    <div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`white`}}>Content Team</h1>
        </div>
    </div>
    </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}narayani_vinke.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        An evergreen enthusiast, reading, learning and evolving every new day.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/narayani-vinke-9019431b8" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Narayani Vinke</h5>
                    <small>Content Head</small>
                </h3>
            </div>
        </div>
<div className ="row" data-aos="fade-up">

        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}Hiranmayee_sant.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        A student looking forward for a career in digital invensions.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/hiranmayee-sant-6b4b5821a" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Hiranmayee Sant</h5>
                    <small>Content Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}revant_pund.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Radiant Revant
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/revant-pund-b822bb216" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Revant Pund</h5>
                    <small>Content Coordinator</small>
                </h3>
            </div>
        </div>


</div>
<div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`white`}}>Corporate Relation Team</h1>
        </div>
    </div>
</div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}pranav_ratnaparkhi.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Sarcastic and shrewd by nature.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/pranav-ratnaparkhi-112d5" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Pranav Ratnaparkhi</h5>
                    <small>Corporate Relations Head</small>
                </h3>
            </div>
        </div>
    <div className="row" data-aos="fade-up">
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}harsh_dhabekar.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                            Work Silently!
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/harsh-dhabekar-848177184/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Harsh Dhabekar</h5>
                    <small>Corporate Relation Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}sanskruti_rajput.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Enthusiastic, love to learn new things, extrovert and much more.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/sanskruti-bahure-440430206" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Sanskruti Bahure</h5>
                    <small>Corporate Relations Coordinator</small>
                </h3>
            </div>
        </div>


</div>
<div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`white`}}>Multimedia Team</h1>
        </div>
    </div>
</div>
<div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}ameya_karpe.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        So far so good
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/ameya-karpe-1a204b1ba" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Ameya Karpe</h5>
                    <small>Multimedia Head</small>
                </h3>
            </div>
        </div>

<div className="row" data-aos="fade-up">
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}malhar_kshirsagar.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Smart and active in every phase of life
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="#" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Malhar Kshirsagar</h5>
                    <small>Multimedia Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}sahil_mohite.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                            Always Happy, all ways!
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/sahil-mohite-288112206/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Sahil Mohite</h5>
                    <small>Multimedia Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}shreyas_gaikwad.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        I am a positive thinking person with an energetic and ambivert personality and has a thing for cricket
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/shreyas-gaikwad-534308215/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Shreyas Gaikwad</h5>
                    <small>Multimedia Coordinator</small>
                </h3>
            </div>
        </div>


</div>
<div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`white`}}>Operations Team</h1>
        </div>
    </div>
</div>
<div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}prathamesh_kachkure.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Learning, Growing and Exploring.
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/prathamesh-kachkure-951617209" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Prathamesh Kachkure</h5>
                    <small>Operations Head</small>
                </h3>
            </div>
        </div>
<div className="row" data-aos="fade-up">
        <div className="col-xl-3 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}chanchal_kumawat.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        I'm consistent and enthusiastic to learn new skills
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/chanchal-kumawat-5a928a208" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Chanchal Kumawat</h5>
                    <small>Operations Coordinator</small>
                </h3>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}parth_kudal.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Tried to spell my name backwards, then realized it was more than just a trap
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/parth-kudal-49125b194" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Parth Kudal</h5>
                    <small>Operations Coordinator</small>
                </h3>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6  mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}pradyumn_patil.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        In the end, everything will be okay
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/pradyumn-patil-1980a1222/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Pradyumn Patil</h5>
                    <small>Operations Coordinator</small>
                </h3>
            </div>
        </div>
        <div className="col-xl-3 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}samruddhi_mumbare.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Enthusiastic, Quick learner and have belief in myself. 
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/samruddhi-mumbare-200b87217/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Samruddhi Mumbare</h5>
                    <small>Operations Coordinator</small>
                </h3>
            </div>
        </div>
       
    </div>
    <div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`white`}}>Publicity Team</h1>
        </div>
    </div>
</div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}akshad_modi.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        I like to keep a positive attitude
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="http://www.linkedin.com/in/akshad" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Akshad Modi</h5>
                    <small>Publicity Head</small>
                </h3>
            </div>
        </div>
    <div className="row" data-aos="fade-up">
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}khushi_bangad.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Passionate and enthusiastic for new experiences 
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/khushi-bangad-a09501220" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Khushi Bangad</h5>
                    <small>Publicity Coodinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}omkar_mahale.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        One hand I extend into myself, the other toward others
                        </p>
                        <ul className="social-link">
                      
                            <li ><a href="https://www.linkedin.com/in/omkar-mahale-ba5959205/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Omkar Mahale</h5>
                    <small>Publicity Coordinator</small>
                </h3>
            </div>
        </div>


</div>
<div className="container py-5">
    <div className="row text-center text-white">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-4" style={{color:`white`}}>Social Media Team</h1>
        </div>
    </div>
</div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5" data-aos="fade-up">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}prem_baravkar.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Nothing special to specify me but still I'm unique
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/prem-baravkar-189843206" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Prem Baravkar</h5>
                    <small>Social Media Head</small>
                </h3>
            </div>
        </div>
<div className="row" data-aos="fade-up">
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}ankush_chadgal.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Creative,loyal and Reliable
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/ankush-chadgal-3955a21b0" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Ankush Chadgal</h5>
                    <small>Social Media Coordinator</small>
                </h3>
            </div>
        </div>
        <div className=" col-xl-4 col-sm-6 mx-auto mb-5">
            <div className="our-team">
                <div className="pic">
                    <img src={`${img_path}pavan_bhadane.png`} alt=""/>
                    <div className="over-layer">
                        <p className="description">
                        Programmer by heart
                        </p>
                        <ul className="social-link">
                      
                            <li><a href="https://www.linkedin.com/in/pavan-bhadane-033b26205/" className="fab fa-linkedin">{}</a></li>
                       
                        </ul>
                    </div>
                </div>
                <h3 className="team-prof">
                    <h5>Pavan Bhadane</h5>
                    <small>Social Media Coordinator</small>
                </h3>
            </div>
        </div>


</div>

    


</div>
        </div>
        </>
    )
} 
AOS.init({
    duration:1200,
});
let scrollRef = 0;

window.addEventListener('scroll', function() {
  // increase value up to 10, then refresh AOS
  scrollRef <= 10 ? scrollRef++ : AOS.refresh();
});


