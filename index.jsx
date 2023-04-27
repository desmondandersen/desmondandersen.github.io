import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Images
import "./index.scss";

export default function Home() {
  return (
    <div className='homepage'>
      <div className='column-left'>
        <div className='profile'>
          <img src='/hello.gif' alt='Nice to meet you' />
        </div>
        <div className='title'>Desmond Andersen</div>
        <div className='subtitle'>
          Software Engineer | Technical Artist
          <br />
          Computer Science, B.S. @ UCLA '24
        </div>
        <div className='nav'>
          <div className='nav-item'>
            <FontAwesomeIcon icon={faEnvelope} />
            dfa@ucla.edu
          </div>
          <a
            href='https://github.com/desmondandersen'
            target='_blank'
            rel='noreferrer'
            className='nav-item nav-item--link'
          >
            <FontAwesomeIcon icon={faGithub} />
            Github
          </a>
          <a
            href='https://www.linkedin.com/in/desmondandersen/'
            target='_blank'
            rel='noreferrer'
            className='nav-item nav-item--link'
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </div>

        <div className='resume'>
          <a download={`DesmondAndersen_Resume`} href={`/resume.pdf`}>
            My Resume
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </div>
      </div>

      {/* <div className='column-right'>
        <div className='gallery-row'>
          <div className='gallery-column'>
            <StaticImage
              src='../assets/images/lisa-render.png'
              alt='3D render of an Apple LISA'
              layout='fixed'
              width={400}
            />
            <StaticImage
              src='../assets/images/clock-1.png'
              alt='Internal circuits of clock project'
              layout='fixed'
              width={400}
            />
          </div>
          <div className='gallery-column'>
            <StaticImage
              src='../assets/images/bargue-1.jpg'
              alt='Drawing of old man'
              layout='fixed'
              height={350}
              width={400}
            />
            <StaticImage
              src='../assets/images/stop-motion-2.jpg'
              alt='Head made of clay'
              layout='fixed'
              width={400}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
