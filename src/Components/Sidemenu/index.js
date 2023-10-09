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
            <li><IoHome/></li>
            <li><IoMdPerson/></li>
            <li><IoMdBriefcase/></li>
            <li><BsFillPenFill/></li>
            <li><IoCall/></li>
           </Listicons>
        </Sidebody>
    );
}

export default Index;
