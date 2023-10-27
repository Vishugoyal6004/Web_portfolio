import React from 'react';

//Assets and Css
import { Workbody, Left, Right, Project1 } from './Styled';
import Workicon from '../../Assets/Workicon.svg'

//Utils
import { Worklist } from '../../Components/Utils';

const Index = () => {
    return (
        <Workbody>
            <Left>
                <h1><span>Ui & Design</span><br />Projects</h1>
                <img src={Workicon} />
            </Left>
            <Right>

                {Worklist?.map((data, id) => (
                    <a href={data.link} target='_blank'>
                        <Project1 key={id} pstyle={data?.pstyle}>
                            <img src={data.img} />
                        </Project1>
                    </a>
                ))}

            </Right>
        </Workbody>
    );
}

export default Index;
