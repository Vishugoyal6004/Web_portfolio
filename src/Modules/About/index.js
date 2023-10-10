import React from 'react';
import { Aboutbody, Left, Journeydiv, Timeline, Right, RightArrow } from './Styled'
import aboutperson from '../../person2.svg';
import schoollogo from '../../Assets/schoollogo.jpeg';
import collegelogo from '../../Assets/collegelogo.png';
import companylogo from '../../Assets/comapnylogo.png';

const Index = () => {
    return (
        <Aboutbody>
            <Left>
                <img src={aboutperson} />
                <h1>About me</h1>
                <p>I am a qualified full stack developer with one years of experience in frontend technologies. Looking for a challenging role in a reputed company to utilize my engineering skills that can contribute to the company's growth .
                </p>
            </Left>
            <Right>
                <Timeline>
                    <Journeydiv>
                        <img src={schoollogo} />
                        <h2>DAV Public School</h2>
                        <span>2017-2019</span>
                        <p>I am a qualified full stack developer with one years of experience in front</p>
                        <RightArrow></RightArrow>
                    </Journeydiv>
                    <Journeydiv>
                        <img src={collegelogo} />
                        <h2>Chitkara University</h2>
                        <span>2019-2023</span>
                        <p>I am a qualified full stack developer with one years of experience in front</p>
                        <RightArrow></RightArrow>
                    </Journeydiv>
                    <Journeydiv>
                        <img src={companylogo} />
                        <h2>Sequoia Consulting Group</h2>
                        <span>2022-2023</span>
                        <p>I am a qualified full stack developer with one years of experience in front</p>
                        <RightArrow></RightArrow>
                    </Journeydiv>
                </Timeline>
            </Right>
        </Aboutbody>
    );
}

export default Index;
