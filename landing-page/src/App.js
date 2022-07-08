function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="header">
          <img src="/img/logo.png" alt="Logo" />
          <ul className="menu">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="center">
          <h1>
            Lorem <span>ipsum</span>, dolor sit amet
          </h1>

          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          <div className="footer">
          <button className="b1" ><span>Apply Now</span> </button>
          <button className="b2" >Sign up</button>
          {/* <img src="/img/main.png" alt="img" /> */}
        </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
