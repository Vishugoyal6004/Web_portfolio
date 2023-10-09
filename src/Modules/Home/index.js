import React from 'react';

//Assets and Css
import { Body, ButtonBox, Left, Right } from './Styled';
import person from '../../person.png';

//Components
import SideMenu from '../../Components/Sidemenu';
import Navbar from '../Navbar';


const Index = () => {
    return (
       <>
       <SideMenu/>
       <Navbar/>
        <Body>
            <Left>
            <div>
            <h1>Hi, I am Vishu Goyal</h1>
            <h1>A Frontend Developer</h1>
            <h1>based in Kurukshetra</h1>
            <ButtonBox>
                <button>Hire Me</button>
                <button>Download CV</button>
            </ButtonBox>
            </div>
            </Left>
            <Right>
                <img src={person}  />
            </Right>
        </Body>
       </>
    );
}

export default Index;
