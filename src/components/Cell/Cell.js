import React from 'react'

import { Link } from 'react-router-dom'


import { Slug, Fade } from 'mauerwerk'
//
// import { RenderGrocery } from '../RenderGrocery/RenderGrocery'
// import  GeneratePDF  from '../GeneratePDF/GeneratePDF'



import InsideLayout from './InsideLayout';

// @TODO move this stuff
// const { Header, Footer, Content } = Layout;

// function getLink(id){
//   return '/grocery/'+ id;
// }


const Cell = ({ toggle, name, height, description, css, maximized, id }) => (
  <div
    className="cell"
    style={{ backgroundImage: css, cursor: !maximized ? "pointer" : "auto" }}
    onClick={!maximized ? toggle : undefined}
  >
    <Fade show={maximized} delay={maximized ? 400 : 0}>


      <div className="details">

        <Slug delay={600}>

          <InsideLayout id={id} name={name} toggle={toggle}  />

        </Slug>
      </div>
    </Fade>


    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
      enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
      leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
      delay={maximized ? 0 : 400}
    >
      <div className="default">
        {name}
        {/* Maybe put icon */}
      </div>
    </Fade>
  </div>
);

export default Cell;
