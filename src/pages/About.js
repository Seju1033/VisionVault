import React from 'react';
import '../css/About.css';

function About() {
  return (
    <>
      <div className='divider'></div>
      <div className='about-container'>
        <div className='title'>
          <label>About - Vision Vault</label>
        </div>
        <div className='line'></div>
        <div className='content'>
          <div>
            <label>VISION VAULT</label>
            <p>
              VisionVault, the eyewear business from Vision Company, was launched in December 2023. The move was an initiative to redefine the industry and straddle the marketplace with exacting quality standards, unparalleled in India’s prescription eyewear industry.
              <br />
              Benchmarked against the best in the world, Vision Vault heralds standardization in the eyewear industry. Following Tata‘s principles of quality and trust, the brand offers international quality standards enhanced by practices such as transparency in pricing, contemporary design, and styling in the highly fragmented and undifferentiated Indian optical retail segment.
              <br />
              Vision Vault has over 550 exclusive stores operating in over 229 cities and offers a wide range of stylish and contemporary eyewear.
            </p>
          </div>
          <div>
            <label> VISION COMPANY </label>
            <p>
              Vision Company Limited (earlier known as Vision Industries Limited) – a joint venture between the Tamil Nadu Industrial Development Corporation (TIDCO) and Tata Group – commenced operations in 1987 under the name Vision Glasses Limited. In 1994, Vision diversified into jewelry, and subsequently, into eyewear with Vision Vault. In 2023, Vision Vault entered the fragrances segment with SKINN.
              <br />
              Today, Vision Company – India’s unchallenged leader in eyewear – is credited with changing the face of all these industries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
