import React from 'react'
import cheesecake from '../img/cheesecake.jpg'

function About(){
  return(
    <section id="about" class="section-about">

     <div class="about__header">About</div>

     <div class="about__info">

      <div>
        Left Side
        <div class="info">
          <figure class="info__shape">
            <img src={cheesecake} alt="Picture of myself" width="100px"/>
          </figure>
        </div>

        <div class="info__text">
          I'm a Full-Stack Developer in NYC. I'm looking for opportunities to make a difference.
        </div>
      </div>

      <div>
        right side
      </div>

     </div>

    </section>
  )
}

export default About;
