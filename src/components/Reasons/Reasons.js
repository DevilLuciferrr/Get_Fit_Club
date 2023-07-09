import React from "react";
import "./Reasons.css";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img
          src="https://people.com/thmb/E7s57vN2kIGZibed7YNsMUkXxMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1059x318:1061x320)/Chris-Hemsworth-and-trainer-Luke-Zocchi-071822-04-6aba1627f5424ec4bf9df3387fe7d220.jpg"
          alt=""
        />
        <img
          src="https://stylesatlife.com/wp-content/uploads/2019/07/Simple-Body-Fitness-Tips.jpg.webp"
          alt=""
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9jtEo0fGJNDiMsLelNx1VvMcWXOEM0nMU6bk590QOg&usqp=CAU&ec=48665701"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznkMtAqFbcq8Ol58XB88WaNkyUKd8yf7RRaCKsANMfA&usqp=CAU&ec=48665701"
          alt=""
        />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose Us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Orange_check.svg/600px-Orange_check.svg.png" alt="" style={{width:'30px',height:'30px'}}></img>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Orange_check.svg/600px-Orange_check.svg.png" alt="" style={{width:'30px',height:'30px'}}/>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Orange_check.svg/600px-Orange_check.svg.png" alt="" style={{width:'30px',height:'30px'}}/>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Orange_check.svg/600px-Orange_check.svg.png" alt="" style={{width:'30px',height:'30px'}}/>
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{color:'var(--gray)', fontWeight:'normal'}}>OUR PARTNERS</span>
        <div className="partners">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="" style={{width:'70px', height:'50px'}}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png" alt="" style={{width:'70px', height:'30px'}}/>
            <img src="https://www.svgrepo.com/show/303470/puma-logo-logo.svg" alt="" style={{width:'70px', height:'50px'}}/>
        </div>

      </div>
    </div>
  );
};

export default Reasons;
