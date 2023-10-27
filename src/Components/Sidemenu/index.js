import React from 'react';

//CSS
import { Listicons, Sidebody } from './Styled';

//Icons
import {IoHome,IoCall} from 'react-icons/io5';
import { IoMdBriefcase,IoMdSearch,IoMdPerson } from 'react-icons/io';
import {BsFillPenFill} from 'react-icons/bs';



const Index = () => {
    return (
        <Sidebody>
           <Listicons>
            <li><a href='#Home'><IoHome/></a></li>
            <li><a href='#About'><IoMdPerson/></a></li>
            <li><a href='#Work'><IoMdBriefcase/></a></li>
            <li><a href='#Skill'><BsFillPenFill/></a></li>
            <li><a href='#About'><IoCall/></a></li>
           </Listicons>
        </Sidebody>
    );
}

export default Index;
