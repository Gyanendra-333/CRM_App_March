import React from 'react'
import styled from 'styled-components'

const LogInContainer = styled.div`
width:100%;
height:calc(100vh-40px);
display:flex;
justify-content:center;
align-items:center;
`;

const InputText = styled.input`
margin:20px;
padding:10px 12px;
border-radius:10px;
border:1px solid white;

`;

const LoginButton = styled.button`
color:white;
padding:8px 6px;
background:#2E2EFF;
margin:20px;
border-radius:10px;
cursor:pointer;
`;

const ContentWrpper = styled.div`
width:300px;
display:flex;
flex-direction:column;
margin-top:60px;
`;

const HeaderText = styled.span`
font-size:25px;
color: grey;
margin-right:20px;
padding-left:25px;

&: hover{
    background - color: white;
}
`;

export default function Login() {
    return (


        <LogInContainer>
            <ContentWrpper>

                <HeaderText>User Login</HeaderText>
                <InputText type="text" placeholder=' Username' />
                <InputText type="password" placeholder=' Password' />
                <LoginButton>Log In</LoginButton>

            </ContentWrpper>
        </LogInContainer>


    )
}
