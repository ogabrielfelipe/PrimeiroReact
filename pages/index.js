import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import React from 'react';

function GlobalStyle() {
    return (
        <style global jsx>{`
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                list-style: none;
            }

            body{
                font-family: 'Open Sans', sans-serif;
            }

            /*App fit Height*/
            html, body, #__next{
                min-height: 100vh;
                display: flex;
                flex: 1;
            }
            #__next{
                flex: 1;
            }

            #__next > *{
                flex: 1;
            }
        `}</style>
    )
}
function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals['100']};
                    font-size: 72px;
                    margin-left: 15px;
                }
            `}</style>


        </>
    );
}


export default function PaginaInicial() {

    const [username, setUsername] = React.useState('ogabrielfelipe');
    const rotear = useRouter();

    return (
        <>
            <GlobalStyle />

            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    backgroundColor: appConfig.theme.colors.neutrals['500'],
                    backgroundImage: 'url(https://cdn2.hubspot.net/hubfs/3350762/Top%20Cybersecurity%20Zoom%20Backgrounds-4.png)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        textAlign: 'center',
                    }}
                >
                    <Titulo>Seja Bem Vindo</Titulo>
                    <Text variant="body3" styleSheet={{
                        color: appConfig.theme.colors.neutrals['100'],
                        fontSize: '32px',
                    }}>Ao canal do Hacker</Text>
                </Box>


                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'column',
                        backgroundColor: appConfig.theme.colors.neutrals['800'],
                        width: '450px', height: '100%',
                    }}
                >
                    <Box
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',

                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                // border: '1px solid #52667A',
                                boxShadow: '0 0 4px #FFFFFF',
                                width: '200px',
                                height: '200px',
                                marginBottom: '15px',
                            }}
                            src={`https://github.com/${username}.png`}

                        />
                        <Text
                            styleSheet={{
                                backgroundColor: appConfig.theme.colors.neutrals['999'],
                                padding: '3px 10px',
                                color: appConfig.theme.colors.neutrals['000'],
                                borderRadius: '1000px',
                            }}
                        >
                            {username}
                        </Text>
                    </Box>


                    <Box
                        as='form'
                        onSubmit={function (event) {
                            event.preventDefault();
                            console.log(rotear);
                            
                            rotear.push({
                                pathname: '/chat', 
                                query: {user: username}},
                                undefined,
                                {}
                            )
                        }}

                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <TextField
                            value={username}
                            onChange={function (evento) {
                                if (evento.target.value.length < 2) {
                                    console.log('Teste')
                                }

                                setUsername(evento.target.value);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[100],
                                    mainColor: appConfig.theme.colors.neutrals[400],
                                    mainColorHighlight: appConfig.theme.colors.neutrals[300],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}

                        >
                        </TextField>



                        <Button
                            type='submit'
                            label='Entrar'
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.neutrals[600],
                                mainColorLight: appConfig.theme.colors.neutrals[400],
                                mainColorStrong: appConfig.theme.colors.neutrals[300],
                            }}
                        >

                        </Button>
                    </Box>



                </Box>

            </Box>

        </>

    )
}
