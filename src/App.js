import React from "react";

const Iphone12Pro = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px', padding: '20px' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ fontSize: '14px' }}>APPSTORE.UZ <br /> Uzbekistan</div>
          <ul style={{ display: 'flex', gap: '20px', color: 'gray', listStyle: 'none', padding: 0 }}>
            <li style={{ color: 'white', borderBottom: '2px solid white' }}>Home</li>
            <li>Gallery</li>
            <li>News</li>
            <li>About us</li>
            <li>
              <span style={{ position: 'relative' }}>
                <i className="fas fa-shopping-cart"></i>
                <span style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'blue', color: 'white', fontSize: '12px', borderRadius: '50%', padding: '2px 5px' }}>1</span>
              </span>
            </li>
          </ul>
        </nav>
        
        <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>iPhone 12 pro</h1>
        <p style={{ marginTop: '10px', color: 'gray' }}>
          The iPhone 12 Pro and iPhone 12 Pro Max are part of Apple's latest generation of smartphones,
          offering 5G connectivity, the A14 chip for better performance.
        </p>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <button style={{ backgroundColor: 'blue', padding: '10px 20px', color: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', border: 'none', cursor: 'pointer' }}>Order now</button>
          <button style={{ padding: '10px 20px', border: '1px solid gray', borderRadius: '5px', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}>Learn more</button>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px', color: 'gray' }}>
          <span>01</span>
          <span style={{ color: 'white', borderBottom: '2px solid white' }}>02</span>
          <span>03</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
};

export default Iphone12Pro;
