import React from "react";
import { footer } from "../pages/Data";
import "../pages/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="yoga-footer">
        <div className="contain" style={{ marginBottom: 20 }}>
          <div className="box" style={{ marginLeft: 100 }}>
            <div className="logo">
              <h2>Join Our Yoga Academy Today</h2>
              <p>Unlock the path to inner peace and well-being.</p>

              <div className="input flex" style={{ display: 'flex', alignItems: 'center' }}>
  <input type="text" placeholder="Email Address" style={{ padding: '10px', borderRadius: '5px', border: '2px solid #3498db', marginRight: '10px' }} />
  <button style={{ padding: '15px', borderRadius: '5px', backgroundColor: '#2ecc71', color: '#fff', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>
    Subscribe
  </button>
</div>

            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index} style={{ marginRight: 100 }}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, subIndex) => (
                  <li key={subIndex}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
