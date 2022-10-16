import React from "react";
import './About.css'

function About() {
    return (
        <div className="about-container">
             <h1>About</h1>
             <p>
             The --rebase option can be used to ensure a linear history by preventing unnecessary merge commits. Many developers prefer rebasing over merging, since it’s like saying, "I want to put my changes on top of what everybody else has done." In this sense, using git pull with the --rebase flag is even more like svn update than a plain git pull.

In fact, pulling with --rebase is such a common workflow that there is a dedicated configuration option for it:
             </p>
        </div>
       
    )
}

export default About;