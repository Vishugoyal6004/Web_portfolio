import React from 'react';
import styled from 'styled-components';
import './circle.css';
export const Circlebody=styled.div`
position:absolute;
border-radius:50%;
top:-75px;
left:-75px;
width:200px;
height:200px;
background:radial-gradient(#0f0c29,#302b63 , #24243e);
`

const Index = () => {
    return (
        <section class="stage">
        <figure class="ball">
          <span class="shadow"></span>
          {/* <span class="eight"></span> */}
        </figure>
      </section>
    );
}

export default Index;
