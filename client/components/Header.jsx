import React, { Component } from 'react'
import {Parallax} from 'react-materialize'

export default class Header extends Component {
  render() {
    return (
        <div className="section white">
          <div className="row container">
            <h2 className="header">A Little Bit About Me</h2>
            <div id="texts">            
            <p className="grey-text text-darken-3 lighten-3">Hi! I'm originally from Alexandria, VA (right outside of 
              Washington, D.C.) where I attended T.C. Williams H.S. <i>(Remember the Titans)</i>.</p>
            <p>After attending the College of William and Mary, I went on to work at a boutique PR firm in Washington, D.C., where I 
              did everything from designing email newsletters to planning events on Capitol Hill. Three years later, I 
              became the Campaign Associate for a $10 million campaign at St. Anne's-Belfield School in Charlottesville, VA. 
              I was also put in charge of organizing events around the School's new Computer Science Initiative -- one of the first of its 
              kind in the nation for K-12 students. This included organizing the first-ever hackathon for high school students in Central Virginia.
              It was during this time that I was inspired to learn to code.</p>
            <p>I joined Girl Develop It, started learning through Codeacademy, Harvard's CS50 online course, and any other free online resources I could find.
              I still wasn't sure if I was ready to commit to coding full-time, so when my husband and I moved to New York City, I joined a boutique PR firm for startups. 
              Still, I couldn't get coding off my mind. It was around this time that I joined Codewars... and was hooked. Sometimes, I'd stay up way past midnight trying to finish a problem.
              Sometimes, I'd even dream about solving the problem. This is when I knew I should become a programmer.</p>
              <p>I finished Fullstack Academy's Javascript Jumpstart program, 
              completed their Bootcamp Prep program, applied to Fullstack Academy's Immersive Program, and got in. Three months later, for my capstone project, my team and I
              built a real-time 3D multiplayer webgame using Babylon.js and React. Now, I'm a teaching fellow at Fullstack, and excited for whatever comes next in my coding journey!
              </p>
            </div>
            <div id="image"><img src="./images/myAvatar.png" /></div>
        </div>
      </div>
    )
  }
}