import React, { useState } from 'react';
import classNames from 'classnames';
import './About.css';
import about from './about.jpg';
import trusteeImage from './trustee.jpg';
import ceoImage from './ceo.jpg';
import principalImage from './principal.jpg';
import vision from './vision.jpg';

export default function About() {
    const [selectedOption, setSelectedOption] = useState('aboutUs');

    const contentMap = {
        aboutUs: {
            heading: 'ABOUT US',
            imageSrc: about,
            text: [
                'Nehru Institute of Engineering and Technology is a self-financing Engineering College, Approved by AICTE, New Delhi and Affiliated to Anna University Chennai, and Accredited by NAAC & NBA. NIET is established in the year 2006, under the able leadership of our Founder Chairman, Shri. P. K. Das is entering into its fifteenth successful year by marching ahead towards achieving the Vision and Mission of the Founder Chairman under the guidance of the most respected Managing Trustee Adv. Dr.P.Krishna Das, and the most beloved CEO and Secretary Dr.P.Krishna Kumar.',
                'In its fifteenth year of establishment, NIET has evolved into a multidisciplinary, research-focused and student centric Institution offering 11 academic programs, 8 at the Undergraduate level and 3 at Postgraduate level. NIET comprises of dedicated team of eminent faculty members, rich in knowledge and with good retention rate, 5 Centre of Excellences, Well-equipped Laboratories, Excellent Infrastructure, Smart Classrooms, Amphitheatres and Conference Halls.',
                'NIET had gained high reputation in the society over the past decade through the academic excellence testified by the number of University ranks secured by the students year after year. NIET is marching ahead in its road to success by receiving NAAC accreditation, NBA accreditation for few undergraduate programs, and internationally recognized 14001:2004 certification for the serene, eco-friendly and green campus. These certificates and accreditations are testimonials for NIET to proclaim that it upkeeps the best system and the international quality standards, benchmarked by the globally renowned rating agencies.',
                'NIET has adopted academic reforms to become internationally recognized for the quality of its teaching and learning process, research, and student enrichment. It is aimed at inculcating scientific integrity and human values to expand the boundaries of technologies, creativity and human knowledge, generating new insights and improving the quality of life by which an individual is moulded into a true citizen.',
            ],
        },
        vision: {
            heading: 'VISION',
            imageSrc: vision,
            text: [
                'Our Vision is to mould the youngsters to acquire sound knowledge in technical and scientific fields to face the future challenges by continuous upgradation of all resources and processes for the benefit of humanity as envisaged by our great leader Pandit Jawaharlal Nehru.',
            ],
        },
        trustee: {
            heading: 'Trustee Message',
            imageSrc: trusteeImage,
            text: [
                'The prestigious large galaxy of educational institutions in South India, popularly christened as "The Nehru Group of Institutions" is a name synonym to world class education. It would be my special privilege and pleasure to welcome one and all to an enchanting world of exclusive higher education for a truly challenging and much rewarding academic career. The campuses serve as a temple of learning for students of various academic streams. The ISO 14001-2004 certified large conglomeration of institutions has been founded by late P. K. Das an eminent academician and a Philanthropist and is patronized by the Nehru College of Educational & Charitable Trust way back in the year 1968. The group is on its 49th year of celebration of its selfless, dedicated and yeomen service to the field of higher education. The institutes are duly affiliated to Alagappa University, Karaikudi. Bharathiar University, Coimbatore. Anna University, Chennai.Calicut University, Calicut. and KUHAS. Located in parts of Tamil Nadu and Kerala states in the extreme South of India, spread over 300 acres of land in six campuses, the Nehru Group hosts around 20 renowned educational institutes catering to the diversified needs of students in Aeronautical Sciences, Engineering, Information Technology, Management, Medicine, Pharmacy, Architecture, Legal studies and Arts & Sciences.',
                'A step into the Nehru Group of Institutions is a right step into a brighter world of education and a knowledge hub. It is worth one takes up a chance to experience the difference and to enjoy the "Joy of learning".',
                '',
                '',
                'Adv.Dr.P.Krishnadas LLB, MBA, DEM, PhD.',
                '',
                '',
                'Managing Trustee',
            ],
        },
        CEO: {
            heading: "CEO & Secretary's Message",
            imageSrc: ceoImage,
            text: [
                'It is my proud privilege to introduce the large group of pioneering educational institutions popularly known as the "Nehru Group of Institutions" owing its origin to the southernmost part of peninsular India. Higher education is a part of socio-economic system and has a strong and direct bearing on the economic, social, political and cultural developments of the nation. I would like to quote the golden words of Pandit Jawaharlal Nehru “If everything is well with universities in the country, then everything will be well with this nation”.',
                'A step into the Nehru Group of Institutions is a right step into a brighter world of education and a knowledge hub. It is worth one takes up a chance to experience the difference and to enjoy the "Joy of learning".',
                'The well wishes and support of the students and parents is our strength and we would welcome you all to become partakers of this highly resourceful learning environment for an enduring and mutually sharing and benefitting career.',
                '',
                '',
                'Dr.P.Krishnakumar MBA, PhD',
                '',
                '',
                'CEO & Secretary',
            ],
        },
        principal: {
            heading: 'Principal Message',
            imageSrc: principalImage,
            text: [
                'In a country where education is held in very high esteem, we at Nehru Institute of Engineering and Technology have dedicated ourselves to impart education and develop the student to be a responsible engineer and individual.',
                'Students of Nehru Institute of Engineering and Technology are groomed carefully and the virtues of hard work, discipline and ethical practices in profession are imbibed in them constantly during their campus life.',
                'Campus life here stresses the importance of extra academic activities apart from academic learning, leading them to many new avenues. All these go a long way in making our student a thoroughbred professional, eminently suited to contribute in his chosen career with an ever open mind for new thoughts and ideas in industrial and technological advancements.',
                'We are hence confident that our students equipped with such capabilities will emerge as valuable contributory assets to the development of the organizations they serve as well as to the nation.',
                'A step into the Nehru Group of Institutions is a right step into a brighter world of education and a knowledge hub. It is worth one takes up a chance to experience the difference and to enjoy the "Joy of learning".',
                'Our college is committed to providing quality Education and Training in Engineering and Technology to prepare students for life and work equipping them to contribute to the technological, economic and social development of India. The College pursues excellence in providing training to develop a sense of professional responsibility, social and cultural awareness and set students on the path to leadership.',
                '',
                '',
                'Dr. P. Maniarasan',
                '',
                '',
                'Principal',
            ],
        },
    };

    const handleOptionClick = option => {
        setSelectedOption(option);
    };

    return (
        <div className='about-container'>
            <div className='options-section'>
                <ul>
                    <li
                        className={classNames('option', {
                            'selected-option': selectedOption === 'aboutUs',
                        })}
                        onClick={() => handleOptionClick('aboutUs')}
                    >
                        ABOUT US
                    </li>
                    <li
                        className={classNames('option', {
                            'selected-option': selectedOption === 'vision',
                        })}
                        onClick={() => handleOptionClick('vision')}
                    >
                        VISION
                    </li>
                    <li
                        className={classNames('option', {
                            'selected-option': selectedOption === 'trustee',
                        })}
                        onClick={() => handleOptionClick('trustee')}
                    >
                        TRUSTEE
                    </li>
                    <li
                        className={classNames('option', {
                            'selected-option': selectedOption === 'CEO',
                        })}
                        onClick={() => handleOptionClick('CEO')}
                    >
                        CEO
                    </li>
                    <li
                        className={classNames('option', {
                            'selected-option': selectedOption === 'principal',
                        })}
                        onClick={() => handleOptionClick('principal')}
                    >
                        Principal
                    </li>
                </ul>
            </div>
            <div className='content-section'>
                <div className='content-wrapper'>
                    <div className='content-text-wrapper'>
                        <h2 className='content-heading'>
                            {contentMap[selectedOption].heading}
                        </h2>
                        {contentMap[selectedOption].text.map(
                            (paragraph, index) => (
                                <p key={index} className='content-text'>
                                    {paragraph}
                                </p>
                            )
                        )}
                    </div>
                    <img
                        className='content-image'
                        src={contentMap[selectedOption].imageSrc}
                        alt={contentMap[selectedOption].heading}
                    />
                </div>
            </div>
        </div>
    );
}
