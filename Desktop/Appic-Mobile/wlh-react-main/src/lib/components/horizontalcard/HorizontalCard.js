import React from 'react'
import { Card, Grid, Divider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'
const HorizontalCard = ({ data, colorCode, backgroundOpacityValue,width }) => {
    const theme = createTheme({
        typography: {
            fontFamily: 'Heebo',
            color: '#33415C',
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Card variant="outlined" sx={{ padding: '16px 0', backgroundColor: `${backgroundOpacityValue ? backgroundOpacityValue : 'rgba(92, 103, 125, 0.05)'}`, display: 'inline-block' }}>
                <Grid container sx={{ borderLeft: `3.2px solid ${colorCode ? colorCode : '#5C677D'}`, padding: 0 ,width:`${width && width}`}}>
                    {data && data.map((comp, id) => (
                        <>
                            {id !== 0 ?
                                <Divider orientation="vertical" variant="middle" flexItem />
                                : ""}
                            <Grid item xxl key={id} sx={{ padding: 0.8, display: 'flex', alignItems: 'center' }}>
                                {comp.component}
                            </Grid>
                        </>
                    ))}
                </Grid >
            </Card >
        </ThemeProvider>
    )
}

export default HorizontalCard
