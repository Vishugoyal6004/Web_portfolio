import styled, { keyframes } from "styled-components";


const verticalline = keyframes`
    0% { height: 0;};
    100% { height: 100%};
   }
`
const showBox = keyframes`
    0% { opacity: 1;transform:translateY(-30px);};
    100% { opacity: 1;transform:translateY(0px);};
   }
`

export const Aboutbody = styled.div`
height:100vh;
width:100%;
display:flex;
align-items:center;
justify-content:center;
gap:250px;

@media only screen and (max-width: 900px) {
    flex-direction:column;
    gap:0;
}
`

export const Left = styled.div`
position:relative;
height:550px;
width:550px;
border-radius:50%;
background:olive;
background-image: linear-gradient(to bottom right, #004fff , #0ff );
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
    p,h1{
        padding-left:30%;
        width:60%;
        color:white;
        margin-top:0;
    }
    p{
        font-size:22px;
    }
    img{
        position:absolute;
        left:0;
    }

    @media only screen and (max-width: 900px) {
        transform:scale(0.8);
    }
    @media only screen and (max-width: 700px) {
        transform:scale(0.7);
    }
    @media only screen and (max-width: 400px) {
        transform:scale(0.55);
        p{
            font-size:26px;
        }
    }
`

export const Timeline = styled.div`
position:relative;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:40px;

&:after {
    content:'';
    position:absolute;
    width:6px;
    height:100%;
    background:rgba(256,256,256,.9);
    top:0;
    left:-20px;
    z-index:10;
    // animation:${verticalline} 6s linear forwards;



@media only screen and (max-width: 900px) {
    transform:rotate(90deg);
    top:-108px;
    left:135px;
    width:6px;
    height:300px;
    background:white;
}
}


@media only screen and (max-width: 900px) {
    flex-direction:row;
    gap:100px;
    margin-left:-40px;
    margin-top:-40px;
}
`

export const Right = styled.div`

`

export const Journeydiv = styled.div`
position:relative;
width:350px;
padding:15px 0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:10px;
background:white;
border-radius:8px;
// animation: ${showBox} 1s linear forwards;
// opacity:0;


h2,p,span{
    margin:0;
    width:90%;
}
h2{
    line-height:0.5;
    font-weight:600;
}
span{
    color:grey;
    font-size:14px;
}

img{
    background:white;
    position:absolute;
    width:30px;
    height:30px;
    left:-55px;
    top:13px;  
    z-index:15; 
    border-radius:50%;
    padding:1%;
}

@media only screen and (max-width: 900px) {
   width:0px;
   align-items:center;
   justify-content:space-around;

    h2,p,span{
        display:none;
    }
    img{ 
        padding:5px;
        width:35px;
        height:35px;
        top:0px;
        left:0px;
    }

}
`


export const RightArrow = styled.span`
height:0;
width:0;
position:absolute;
top:15px;
left:-94%;
z-index:15px;
border-top:15px solid transparent;
border-bottom:15px solid transparent;
border-right:15px solid white;

right:-15px;
    
`