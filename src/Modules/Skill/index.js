import React from 'react';
import { Bottom, SkillsBox, Box,  Skillbody, Top,SkillIcon } from './Styled';
import { Skills } from '../../Components/Utils';
import Skillicon from '../../Assets/Skillicon.svg';

const Index = () => {

    return (
        <Skillbody >
            <Top>
               <h1>Skills</h1>
            </Top>
            <Bottom>
                <SkillsBox>
                    {Skills?.map((data,id)=>(
                        <>
                        <Box key={id}>
                        <img src={data?.logo} />
                        <p>{data?.skill}</p>
                    </Box>
                    </>
                    ))}

                </SkillsBox>

                <SkillIcon src={Skillicon} />

            </Bottom>
        </Skillbody>
    );
}

export default Index;
