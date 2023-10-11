import React from 'react';

//Assets and Css
import { Skillbody, Left, Right, Project1 } from './Styled';
import Workicon from '../../Assets/Workicon.svg'

//Utils
import { Worklist } from '../../Components/Utils';

const Index = () => {
    return (
        <Skillbody>
            <Left>
                <h1><span>Ui & Design</span><br />Projects</h1>
                <img src={Workicon} />
            </Left>
            <Right>

                {Worklist?.map((data, id) => (
                    <a href="#" target='_blank'>
                        <Project1 key={id} pstyle={data?.pstyle}>
                            <img src={data.img} />
                        </Project1>
                    </a>
                ))}

            </Right>
        </Skillbody>
    );
}

export default Index;
