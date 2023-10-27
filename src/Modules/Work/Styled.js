import {styled , css} from "styled-components";

export const Workbody=styled.div`
height:100vh;
width:calc(100% - 70px);
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding-left:70px;

@media only screen and (max-width: 700px) {
    flex-direction:column;
    padding:0;
    width:100%;
    height:115vh;
}
`

export const Left=styled.div`
width:30%;
height:60%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

h1{
    margin:0;
    line-height:1;
    font-size:5rem;
    color:white;
    font-weight:700;
    font-family: Franklin Ghotics Medium;
    margin-bottom:50px;
}
span{
    font-weight:400;
}

img{
    height:400px;
    width:400px;
}

@media only screen and (max-width: 900px) {
    height:max-content;
    h1{
        font-size:4rem;
        margin-bottom:0px;
    }
    img{
        display:none;
    }
}
@media only screen and (max-width: 700px) {
    width:100%;
    margin-top:100px;
    padding-bottom:40px;

    h1{
        font-size:3rem;
    }
}
`

export const Right=styled.div`
position:relative;
width:60%;
height:90%;

@media only screen and (max-width: 900px) {
    width:100%;
}

`

export const Projectcss=css`
position:absolute;
width:55%;
height:45%;
background:white;
border-radius:8px;
top:2%;
right:2%;
transform:skew(-12deg,0deg);
box-shadow: 0px 10px 10px 0px grey;

display:flex;
justify-content:center;
align-items:center;
img{
    width:94%;
    height:92%;
    background:olive;
}



&:hover{
    transform: skew(-12deg,0deg) scale(1.1);
    box-shadow: 0px 15px 30px 0px white;

}

@media only screen and (max-width: 900px) {
 transform:skew(-5deg,0deg);
 right:10%;
 width:75%;

 &:hover{
    transform: skew(-5deg,0deg) scale(1.1);
    box-shadow: 0px 15px 30px 0px white;
}
}

@media only screen and (max-width: 700px) {
    right:12.5%;
   }

`

export const Project1=styled.div`
${Projectcss}

${props=>props.pstyle.top &&
 css`
    top:${props.pstyle?.top}%;
    right:${props.pstyle?.right}%;
 `}

`