import React from 'react';
import '../css/OurPolicy.css';

function OurPolicy() {
  return (
    <>
      <div className='divider'></div>
      <div className='policy-container'>
        <div className='title'>
          <label>Our Policies - Vision Vault</label>
        </div>
        <div className='line'></div>
        <div className='content'>
          <div>
            <label>VISION VAULT Policies</label>
            <p>
              <strong>Discounts and Warranty Policies</strong>
              <br />
              <strong>Tata Employee Discount:</strong>
              <ul>
                <li>10% on House Brand frames, House Brand sunglasses, Vision Vault lenses.</li>
                <li>5% on International Brand frames, International Brand sunglasses, Essilor lenses.</li>
              </ul>
            </p>
          </div>
          <div>
            <strong>WARRANTY DETAILS - House Brands:</strong>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Brand Name</th>
                  <th>Period of Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Frames</td>
                  <td>Vision Vault, Vybes, Enigma, Adreno, Minimalist, Retro, Flip, Sports, Aristo</td>
                  <td>12 Months</td>
                </tr>
                <tr>
                  <td>Frames</td>
                  <td>Eye+, Trendz, Fastrack, Dash</td>
                  <td>6 Months</td>
                </tr>
                <tr>
                  <td>Sunglass</td>
                  <td>Vision Vault Glares</td>
                  <td>12 Months</td>
                </tr>
                <tr>
                  <td>Sunglass</td>
                  <td>Fastrack</td>
                  <td>6-12 Months</td>
                </tr>
                <tr>
                  <td>Sunglass</td>
                  <td>Dash</td>
                  <td>6 Months</td>
                </tr>
                <tr>
                  <td>Lens</td>
                  <td>Vision Vault</td>
                  <td>12 Months</td>
                </tr>
                <tr>
                  <td>Lens</td>
                  <td>Ace</td>
                  <td>6 Months</td>
                </tr>
                <tr>
                  <td>Ready Readers</td>
                  <td>Vision Vault</td>
                  <td>6 Months</td>
                </tr>
                {/* Add other rows as needed */}
              </tbody>
            </table>
          </div>
          <div>
            <strong>EXCHANGE POLICY:</strong>
            <p>
              Vision Vault is committed to ensuring full customer satisfaction. If you are not satisfied with the product, you can choose to exchange it for a new design. In the unlikely event that the delivered order is damaged, we will provide a replacement.
              <br />
              <em>Note: Shipments returned through any other logistic partner will not be accepted.</em>
            </p>
          </div>
          <div>
            <strong>Return Charges:</strong>
            <p>
              <strong>Domestic Order:</strong> Our courier partner will collect the order from the provided address (within India). Customers need not pay any shipping charges to return the product.
            </p>
          </div>
          <div>
            <strong>How to initiate the exchange process?</strong>
            <ol>
              <li>Contact Vision Vault customer support at 1800256**** or write to visionvaulthelp@gmail.com within 7 days from the receipt of the product.</li>
              <li>Do not return the product before receiving a confirmation email from the customer support team.</li>
              <li>All products must be returned in their original condition, unaltered, and unused, in packed condition.</li>
              <li>Place the invoice/guarantee card inside the package for the return process.</li>
              <li>Reach out to our sales team for assistance in placing the exchange order.</li>
            </ol>
            <em>Note: Requests will not be entertained after 7 days from the date of receipt of the product.</em>
          </div>
          <div>
            <strong>Manufacturing Defect:</strong>
            <p>
              Customers can visit any Vision Vault store to address a manufacturing defect. Ensure that the original invoice is available. If a replacement is required, customers will be given the option to buy the same or a higher-priced frame. If a lower-priced frame is chosen, the price difference will not be refunded. If the customer has fitted the frame with a lens from another shop (non Vision Vault), we will not take responsibility for fitting damage.
            </p>
          </div>
          <div>
            <strong>Grievance Officer Contact Details:</strong>
            <p>
              The Grievance Officer, Eyecare Division <br />
              Vision Vault <br />
              Email: visionvaulthelp@gmail.com <br />
              Contact: 1800256****
            </p>
          </div>
          {/* Add other sections as needed */}
        </div>
      </div>
    </>
  );
}

export default OurPolicy;
