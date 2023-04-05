import React from 'react'
import styled, { css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
    height:40px;
    background:#87CEEB;
    display:flex;
    align-item:center;
    justify-content:space-between;
    `;

const LogoContainer = styled.div`
margin:-10px 6px;
cursor:pointer;
`;

const LoginContainer = styled.div`
padding:2px
`;


const Button = styled.button`
color:white;
padding:4px 6px;
background:#2E2EFF;
margin:5px 8px;
border-radius:7px;
cursor:pointer;

${(props) => props.outline && css`
color:white;
background:#184CB4;
border:solid 1px #2E2EFF;
`}

`;

//  path={loc.pathname}

export default function Navbar(props) {
    const loc = useLocation();
    const nav = useNavigate();

    return (

        <NavbarContainer>

            <LogoContainer>
                <h3>Vision.Com</h3>
            </LogoContainer>

            <LoginContainer>

                {loc.pathname === "/Login" ?

                    (<Button outline onClick={() => { nav("/Signup") }}> Sign Up</Button>) :

                    (<Button onClick={() => { nav("/Login"); }}> Login</Button>)}


            </LoginContainer>

        </NavbarContainer >

    );
}
