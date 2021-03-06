import React from "react";
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer id='contact'>
      <div class='container'>
        <div class='row text-center'>
          <div class='col-md-4'>
            <hr class='light' />
            <h5>HQ Office</h5>
            <hr class='light' />
            <p>555-555-5555</p>
            <p>mail@email.com</p>
            <p>Adress 1523 your st</p>
            <p>Sydney,NSW, 2000</p>
          </div>
          <div class='col-md-4'>
            <hr class='light' />
            <h5>Our Hours</h5>
            <hr class='light' />
            <p>Monday: 9am - 5pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div class='col-md-4'>
            <hr class='light' />
            <h5>Service Area</h5>
            <hr class='light' />
            <p>Sydney,NSW, 2000</p>
            <p>Melbourne,VIC, 3000</p>
            <p>Brisbane,QLD, 4000</p>
            <p>Adelaide,SA, 5000</p>
          </div>
          <div class='col-12'>
            <hr class='light-100' />
            <h5>&copy; OttoMation.com 2021</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
