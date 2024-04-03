import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoAt } from "react-icons/io5";
import { IoLinkOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";


export default function Resume() {
  return (
<>
<div style={{ "border": "1px solid black","marginLeft":"300px", "padding": "10px", "maxWidth": "900px" }}>
      <h1 style={{ "paddingLeft": "18px" }}>Taylor Foster</h1>
      <p style={{ "color": "#228BE6", "paddingLeft": "18px" }}>General Manager</p>
      <div style={{ "display": "flex", "paddingLeft": "18px" }}>
        <IoCall style={{ "padding": ".125rem" }} />
        <IoAdd style={{ "padding": ".125rem" }} />
        <p style={{ "marginTop": "0" }}>1-635-133-4079</p>
        <IoAt style={{ "padding": ".25rem", "paddingLeft": ".9375rem" }} />
        <p style={{ "marginTop": "0" }}>taylorfoster@gmail.com</p>
        <IoLinkOutline style={{ "padding": ".25rem", "paddingLeft": ".9375rem" }} />
        <p style={{ "marginTop": "0" }}>linkedin.com/in/taylor.forester</p>
        <GoLocation style={{ "padding": ".25rem", "paddingLeft": ".9375rem" }} />
        <p style={{ "marginTop": "0" }}>New York City,NY</p>
      </div>

      <div style={{ "display": "flex" }} >
        <div style={{ "padding": "20px", "width": "70%" }}>

          <div>
            <p style={{ "marginTop": "-5px", "color": "grey", "marginBottom": "-10px" }}>MY ROAD TO GENERAL MANAGER</p>
            <p>My inital plan was to graduate from the NY Medical College and Pursue a career as a personal trainer.
              Working out has been my biggest passion since my teenage years and i figured that this is a great way
              to stay fit,help others and earn a stable income.As the years passsed,I got more interested in the
              bussiness side of gyms and decided to try and get myself a position in management.
            </p>
          </div>
          <div>
            <p style={{ "color": "grey", "marginBottom": "-10px" }}>EDUCATION</p>
            <h3 style={{ "marginBottom": "-12px" }}>Master Of Business Administration</h3>
            <h5 style={{ "color": "#228BE6", "marginBottom": "2px" }}>New York University</h5>
            <div style={{ "display": "flex" }}>
              <p style={{ "marginTop": "0", "color": "grey" }}>2006 - 2008</p>
              <p style={{ "marginTop": "0", "paddingLeft": "1.125rem", "color": "grey" }}>New York City,NY</p>
              <p style={{ "marginTop": "0", "paddingLeft": "18px", "border": ".125rem solid grey", "display": "flex", "textJustify": "center", "color": "grey" }}>GPA 3.8 / 4.0</p>
            </div>
          </div>
          <div>
            <h3 style={{ "marginTop": "2px", "marginBottom": "-12px" }}>B.S Exercise Physiology</h3>
            <h5 style={{ "color": "#228BE6", "marginBottom": "2px" }}>New York Medical College</h5>
            <div style={{ "display": "flex" }}>
              <p style={{ "marginTop": "0", "color": "grey" }}>2004 - 2006</p>
              <p style={{ "marginTop": "0", "paddingLeft": "1.125rem", "color": "grey" }}>New York City,NY</p>
              <p style={{ "marginTop": "0", "paddingLeft": "1.125rem", "border": ".125rem solid grey", "display": "flex", "textJustify": "center", "color": "grey" }}>GPA 4.0 / 4.0</p>
            </div>
          </div>
          <div>
            <p style={{ "marginTop": "3px" }}>EXPERIENCE</p>
            <h3 style={{ "marginTop": "-9px" }}>General Manager</h3>
            <div style={{ "display": "flex", "marginTop": "-12px" }}>
              <p style={{ "marginTop": "0", "color": "#228BE6" }}>Planet Fitness</p>
              <p style={{ "marginTop": "0", "paddingLeft": "1.125rem" }}>2013 - Ongoing</p>
              <p style={{ "marginTop": "0", "paddingLeft": "1.125rem" }}>New York City,NY</p>
            </div>
            <p style={{ "marginTop": "-5px" }}>
              With its 2,039 clubs,Planet Fitness is one of the largest fitness club
              franchises in the world.There are locations across the US as well as in
              other countries such as Canada and Mexico.We are reported to be the
              nation's fastest growing fitness center franchise.
              <ul>
                <li>Managing over 5000 employees</li>
                <li>Discovered and corrected errors in accounting software that were causing
                  a false $30,000 loss on inventory reports
                </li>
                <li>Exceeded growth targets across 10 new locations by 30%</li>
                <li>Decreased the company's attrition by 33% by listening to our employees's needs</li>
              </ul>
            </p>
          </div>
          <div>
            <h3 >Assistant General Manager</h3>
            <div style={{ "display": "flex", "marginTop": "-12px" }}>
              <p style={{ "marginTop": "0", "color": "#228BE6" }}>24 Hours Fitness</p>
              <p style={{ "marginTop": "0", "paddingLeft": "18px", "color": "grey" }}>2010 - 2013</p>
              <p style={{ "marginTop": "0", "paddingLeft": "18px", "color": "grey" }}>New York City,NY</p>
            </div>
            <p style={{ "marginTop": "-5px" }}>Managed 1 location in New York City</p>
            <ul>
              <li>Screened,hired,and trained 20+ FOH employees and created schedules</li>
              <li>Let and motivated 15+ staff on a daily basis resulting in satisfied
                customers and a 15% increase in bussiness
              </li>
              <li>Co-engineered the 28-day Step Up Program in collaboration with the University
                of Pennsylvania's Behavior Change for Good Initiative
              </li>
              <li>The Program attracted over 200k new members and increased revenue by 20% to $1.44B in 2017</li>
            </ul>
          </div>
          <div>
            <h3>Personal Trainer</h3>
            <div style={{ "display": "flex", "marginTop": "-12px" }}>
              <p style={{ "marginTop": "0", "color": "#228BE6" }}>24 Hours Fitness</p>
              <p style={{ "marginTop": "0", "paddingLeft": "18px", "color": "grey" }}>2008 - 2010</p>
              <p style={{ "marginTop": "0", "paddingLeft": "18px", "color": "grey" }}>New York City,NY</p>
            </div>
            <p style={{ "marginTop": "-5px" }}>
              24-Hour Fitness is one of the most popular average-cost gyms in the US,operating
              420 clubs in only 13 states with 4 million active clients.
            </p>
            <ul>
              <li>
                Administered client health history questionnairies and  interpreted physical assessment data,
                nutritional counselling,personal program design and implementation for over 500 members
              </li>
              <li>
                Increased personal training 56% in first year and 3-7% in subsequent years over year
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p style={{ "color": "grey" }}>ACHIVEMENTS</p>
            <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 50 50"
              style={{ "fill": "#228BE6", "height": "25px", "padding": "0px" }}>
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg> Discovered and fixed a false #30K loss</h4>
            <p style={{ "marginTop": "-15px" }}>On inventory reports in Planet Fitness' accouting software.</p>

            <h4 style={{ "marginTop": "-10px" }}><img width="30" height="30" src="https://img.icons8.com/fluency-systems-filled/48/228BE6/bullish.png" alt="bullish" /> Increased revenue by 20%</h4>
            <p style={{ "marginTop": "-15px" }}>To $1.44B in 2017 at 24 Hour Fitness.</p>

            <h4 style={{ "marginTop": "-10px" }}><img width="30" height="30" src="https://img.icons8.com/external-prettycons-solid-prettycons/60/228BE6/external-badge-shopping-prettycons-solid-prettycons.png" alt="external-badge-shopping-prettycons-solid-prettycons" />10x Best Employee of the Month</h4>
            <p style={{ "marginTop": "-15px" }}>At 24 Hour Fitness when I was working as a Personal Training.
              Customers would always give me 5-star reviews for being patient,delicate and supportive with them.</p>
          </div>
          <div>
            <p style={{ "color": "grey" }}>SKILLS</p>
            <div style={{ "display": "flex" ,"gap":"15px"}} >
              <h4 style={{ "marginTop": "0px", "borderBottom": "2px solid grey", "paddingBottom": "2px"}}>FOH & BOH Management</h4>
              <h4 style={{ "paddingLeft": "18px", "marginTop": "0px", "borderBottom": "2px solid grey","paddingBottom": "7px" }} >HR</h4>
              <h4 style={{ "paddingLeft": "18px", "marginTop": "0px", "borderBottom": "2px solid grey" }} >PR</h4>
            </div>
            <div style={{ "display": "flex","gap":"15px"}} >
              <h4 style={{ "marginTop": "0px", "borderBottom": "2px solid grey", "paddingBottom": "7px" }}>Employee Training</h4>
              <h4 style={{ "paddingLeft": "18px", "marginTop": "0px", "borderBottom": "2px solid grey"}} >QuikBooks</h4>
            </div>
            <div style={{ "display": "flex","gap":"15px" }} >
              <h4 style={{ "marginTop": "0px", "borderBottom": "2px solid grey", "paddingBottom": "7px" }}>Payroll Management</h4>
              <h4 style={{ "paddingLeft": "18px", "marginTop": "0px", "borderBottom": "2px solid grey"}} >Gusto</h4>
            </div>
            <div style={{ "display": "flex","gap":"15px" }} >
              <h4 style={{ "marginTop": "0px", "borderBottom": "2px solid grey", "paddingBottom": "7px" }}>Cash Flow Management</h4>
            </div>
            <div style={{ "display": "flex","gap":"15px" }} >
              <h4 style={{ "marginTop": "0px", "borderBottom": "2px solid grey", "paddingBottom": "7px" }}>Customer Service</h4>
            </div>
          </div>
          <div>

            <p style={{ "color": "grey" }}>CERTIFICATION</p>
            <h4 style={{ "marginBottom": "3px", "marginTop": "-4px" }}>Certified Manager</h4>
            <p style={{ "marginTop": "0px", "color": "#228BE6" }} >Institute of Certified Professional Managers,2015</p>

            <h4 style={{ "marginBottom": "3px" }}>FirstAid</h4>
            <p style={{ "marginTop": "0px", "color": "#228BE6" }} >Trained in CPR,AED and First Aid yearly by the
              Red Cross since 2010</p>

            <h4 style={{ "marginBottom": "3px" }}>Advanced Personal Training Certification</h4>
            <p style={{ "marginTop": "0px", "color": "#228BE6" }} >  Certified American Fitness Professionals & Associates and renewed
              every two years since 2010</p>
          </div>
          <div>
            <p style={{ "color": "grey" }}>TRAINING / COURCES</p>
            <h4 style={{ "marginBottom": "3px", "marginTop": "-4px" }}>Fundamentals of Project Management</h4>
            <p style={{ "marginTop": "0px", "color": "grey" }}>Project Management Institute,2018 - Grade A</p>

            <h4 style={{ "marginBottom": "3px" }}>Leadership</h4>
            <p style={{ "marginTop": "0px", "color": "grey" }}>Harvard via edX,2016 - Grade A</p>
          </div>
        </div>
      </div>
    </div>

</>
  );
}
