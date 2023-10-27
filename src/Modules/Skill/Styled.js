import styled, { css } from "styled-components";

export const Skillbody =styled.div`
height:calc( 100vh - 30px);
width:100%;
display:flex; 
flex-direction:column; 
padding-bottom 30px;
`
export const Top =styled.div`
height:30vh;
width:calc(100% - 50px);
// background:blue;
display:flex; 
// align-items:center;
gap:40px;
padding-left:50px; 


h1{
    font-size:48px;
    color:white;
}
`
export const Bottom =styled.div`
height:70vh;
width:calc(100% - 50px);
padding-left:50px; 
display:flex; 
justify-content:center;

gap:100px;

@media only screen and (max-width: 700px) {
    width:100%;
padding-left:0;
}
`



export const SkillsBox =styled.div`
width:500px;
height:max-content;
padding-bottom:20px;
border:2px solid white;
border-top:none;
display:flex;
justify-content:center;
align-items:center;
flex-wrap: wrap;
gap:10px;



@media only screen and (max-width: 700px) {
    border:none;
}

`
export const SkillIcon =styled.img`
width:40%;
height:95%;

@media only screen and (max-width: 900px) {
    display:none;
}
`

export const Box =styled.div`
width:100px;
height:100px;
background:olive;
border-radius:16px;
background:linear-gradient(to bottom right,#00e0ff ,#00b7ff,#004fff );

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;

img{
    width:50px;
    height:50px;
}
p{
    margin:0;
    color:white;
}
`
export const Box2 =styled.div`
width:100px;
height:100px;
background:olive;
border-radius:16px;
background:linear-gradient(to bottom right,#00e0ff ,#00b7ff,#004fff );

opacity:0;
`