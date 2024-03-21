// Description.js

import React, { useState } from 'react';
import '../css/Description.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const Description = () => {
    // State to keep track of accordion section open/closed status
    const [sectionOpen, setSectionOpen] = useState({
        section1: false,
        section2: false,
        section3: false,
        section4: false,
        section5: false,
    });

    const toggleSection = (section) => {
        setSectionOpen((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <>
            <div className='accordion'>
                <div>
                    <input
                        type='checkbox'
                        id='section1'
                        className='accordion__input'
                        checked={sectionOpen.section1}
                        onChange={() => toggleSection('section1')}
                    />
                    <label htmlFor='section1' className='accordion__label'>
                        About Vision Valut
                        <FontAwesomeIcon
                            icon={sectionOpen.section1 ? faCircleMinus : faCirclePlus}
                        />
                    </label>
                    <div className='accordion__content'>
                        <p>
                            Whether you are a fashion-forward trendsetter or a refined professional, all your requirements will be fulfilled here! At Vision Valut, we understand eyewear's profound impact on one's appearance, confidence, and overall well-being. Hence, we have carefully handpicked each item in our expansive range, ensuring that you have access to the finest selection. From timeless classics to avant-garde designs, our range is more than mere functionality. Get your hands on our latest collection of sunglasses, eyeglasses, contact lenses, and computer glasses designed to cater to every taste, individual personality, and diverse occasion. Throw in amazing discounts, offers and personalized services; you have the one-stop destination to get your new eyeglasses!
                        </p>
                    </div>
                </div>

                <div>
                    <input
                        type='checkbox'
                        id='section2'
                        className='accordion__input'
                        checked={sectionOpen.section2}
                        onChange={() => toggleSection('section2')}
                    />
                    <label htmlFor='section2' className='accordion__label'>
                        Range of Sunglasses
                        <FontAwesomeIcon
                            icon={sectionOpen.section2 ? faCircleMinus : faCirclePlus}
                        />
                    </label>
                    <div className='accordion__content'>
                        <p>
                            From aviator sunglasses to trendy cateye sunglasses, our diverse range of sunglasses is designed to harmonize with the latest fashion trends while embodying timeless elegance. However, it's not just about looking fabulous. Our sunglasses provide exceptional protection for the eyes, giving you the freedom to step out and enjoy a bright sunny day!

                            Our sunglasses for men and sunglasses for women come with UV protection that safeguards your eyes from harmful rays ensuring that your vision remains uncompromised. Crafted with precision and attention to detail, our sunglasses are made from high-quality materials that provide durability and comfort. We extend our commitment to excellence to the lenses, ensuring optical clarity and sharpness that enhance your visual experience.

                            Whether you're seeking a sophisticated look for a formal occasion or a trendy pair to make a fashion statement, Vision Valut has your back. Browse through our extensive range of sunglasses in vibrant colours, designs, and brands.
                        </p>
                    </div>
                </div>

                <div>
                    <input
                        type='checkbox'
                        id='section3'
                        className='accordion__input'
                        checked={sectionOpen.section3}
                        onChange={() => toggleSection('section3')}
                    />
                    <label htmlFor='section3' className='accordion__label'>
                        Range of Frames & Lenses
                        <FontAwesomeIcon
                            icon={sectionOpen.section3 ? faCircleMinus : faCirclePlus}
                        />
                    </label>
                    <div className='accordion__content'>
                        <p>
                            At Vision Valut, you can discover a vast collection of eyeglasses that will transform the way you see and how the world sees you. Pick eyeglasses from a wide range of spectacles that will enhance your vision and also elevate your overall appearance. Be it reading glasses or a specs frame, you can get it all here from a wide variety of brands.

                            Additionally, you can also get your eyes checked by optometrists to know your visual acuity, eye coordination, peripheral vision and eye muscle function. Once the test is done, you can get the new glasses as per the prescription from the professionals. Whether you require single-vision lenses or progressive lenses, we offer a wide range of options to meet your specific needs. With Vision Valut, you can experience the joy of clear and focused vision, allowing you to engage with the world around you fully.

                        </p>
                    </div>
                </div>

                <div>
                    <input
                        type='checkbox'
                        id='section4'
                        className='accordion__input'
                        checked={sectionOpen.section4}
                        onChange={() => toggleSection('section4')}
                    />
                    <label htmlFor='section4' className='accordion__label'>
                        Range of Contact Lenses
                        <FontAwesomeIcon
                            icon={sectionOpen.section4 ? faCircleMinus : faCirclePlus}
                        />
                    </label>
                    <div className='accordion__content'>
                        <p>
                            Step into a world where hassle-free vision meets cutting-edge technology and explore our extensive range of contact lenses. Our lenses are designed to transform the way you see and live your life. Whether you need daily disposable lenses for utmost convenience or monthly lenses for extended wear, we have the perfect pick that meets your needs. Experience the freedom of clear vision without the constraints of traditional eyewear. Our contact lenses are crafted with precision and comfort in mind, offering a seamless fit and allowing you to go about your day with confidence.

                            Quality and safety are paramount when it comes to contact lenses, and we prioritize your well-being above all else. Rest assured that when you choose Vision Valut, you are selecting contact lenses that meet the strictest industry standards. Whether you're seeking lenses for nearsightedness, farsightedness, astigmatism, or simply looking to change your eye colour, Vision Valut has you covered.
                        </p>
                    </div>
                </div>

                <div>
                    <input
                        type='checkbox'
                        id='section5'
                        className='accordion__input'
                        checked={sectionOpen.section5}
                        onChange={() => toggleSection('section5')}
                    />
                    <label htmlFor='section5' className='accordion__label'>
                        Range of Computer Glasses
                        <FontAwesomeIcon
                            icon={sectionOpen.section5 ? faCircleMinus : faCirclePlus}
                        />
                    </label>
                    <div className='accordion__content'>
                        <p>
                            Vision Valut's revolutionary computer glasses are the ultimate solution for enhanced vision and eye protection in the digital era. Say goodbye to strained eyes and embrace a new level of comfort, clarity, and productivity with our computer eyewear. You can opt for anti-glare glasses, blue filter computer glasses, monofocal, bifocal and trifocal computer glasses and more with us.
                            With advanced lens technology, our computer glasses reduce the harmful blue light emitted by digital screens, minimizing eye strain and fatigue. Maximize your productivity, protect your eyes, and elevate your digital experience. Browse through our collection and select the pair that will revolutionize how you see and engage with the digital world. Embrace the future of vision technology and discover the perfect blend of style, comfort, and eye protection. Your eyes deserve the best, so start your journey to enhanced digital well-being today.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Description;
