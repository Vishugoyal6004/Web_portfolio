import React from 'react';
import styled from 'styled-components';


export const Navbody=styled.div`
width:100%;
height:10vh;
display:flex;

@media only screen and (min-width: 700px) {
    justify-content:center;
}
`
export const Navlisticons=styled.ul`
width:60%;
margin-top:0;
list-style-type:none;
height:80%;
padding:0;
display:flex;
justify-content:space-between;
align-items:end;

li{
text-align:center;
font-size:20px;
padding:10px;
color:white;
font-size:1.125rem;
cursor:pointer;
}

@media only screen and (max-width: 700px) {
    width:100%;
    li{
        font-size:0.875rem;

    }
}
`

const Index = () => {
    return (
        <Navbody>
           <Navlisticons>
            <li>About</li>
            <li>Work</li>
            <li>LOGO</li>
            <li>Skill</li>
            <li>Contact</li>
            </Navlisticons> 
        </Navbody>
    );
}

export default Index;
