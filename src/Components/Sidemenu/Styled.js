import styled from "styled-components";

export const Sidebody=styled.div`

height:60%;
width:50px;
background:rgba(256,256,256,.7);
border-radius:0px 32px 32px 0;
position:fixed;
top:20%;
display:flex;
align-items:center;

@media only screen and (max-width: 700px) {
display:none;
}
`

export const Listicons=styled.ul`
list-style-type:none;
height:80%;
padding:0;
display:flex;
width:100%;
flex-direction:column;
justify-content:space-between;

li{
text-align:center;
font-size:20px;
padding:10px;

&:hover
{
    background:yellow;
}

a{
    color:black;
}
}
`