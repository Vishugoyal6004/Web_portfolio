import styled from "styled-components";

export const Body =styled.div`
height:90vh;
margin-top:0;
display:flex;

@media only screen and (min-width: 700px) {
    padding-left:100px;
}

`;

export const Left =styled.div`

width:calc( 60% - 100px );
display:flex;
align-items:center;
justify-content:center;

div{
    margin-top:50px;
}

h1{
    padding:2px;
    margin-top:0;
    color:white;
    line-height:0.6;
    font-size:3rem;
    font-family: Franklin Ghotics Medium;
}


@media only screen and (max-width: 900px) {
width:100%;
}

@media only screen and (max-width: 700px) {    
    h1{
        font-size:1.8rem;
        text-align:center;
    }
}

`

export const ButtonBox =styled.div`
display:flex;
justify-content:center;
gap:50px;

button{
    width:150px;
    height:40px;
    border-radius:32px;
    border:2px solid  #00e0ff;
    background:linear-gradient(to bottom right ,#00ffc2 ,#00e0ff,#00b7ff,#004fff );
}

@media only screen and (max-width: 700px) {
    gap:20px;
    }
`

export const Right =styled.div`

width:40%;
display:flex;
align-items:center;
justify-content:center;

img{
    height:50%;
}

@media only screen and (max-width: 900px) {
    display:none;
    }

`