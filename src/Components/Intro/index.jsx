import React from 'react';
import './CSS/main.css';


const Intro = props =>  (
  <div className='pageOne'>
    <div className='fadeBlock1'>
        <div className='anim'>
        <h1 className='j1'>Cory Hrycko</h1>
        </div>
            <h3 className='j3'> &lt;Something Sick&gt; </h3>
            <br></br>
        <div className ="btnlistTextCenter">
          <a className ="btn btn-default" href="*"><i class="fa fa-twitter fa-lg" id="twitterIcon" aria-hidden="true"></i>
Twitter  </a>
          <a className ="btn btn-default" href="https://github.com/CoryHrycko"><i class="fa fa-github fa-lg" aria-hidden="true" id="githubIcon"></i>Github  </a>
          <a className ="btn btn-default" href="https://www.linkedin.com/in/cory-hrycko-196802107/"><i class="fa fa-linkedin fa-lg" aria-hidden="true" id="linkedinIcon"></i>LinkedIn  </a>
          <a className ="btn btn-default" href="https://www.facebook.com/cory.hrycko"><i class="fa fa-facebook-official fa-lg" aria-hidden="true"id="facebookIcon"></i>FaceBook  </a>
          </div>
          </div>
          </div>
);
export default Intro;