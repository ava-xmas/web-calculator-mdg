import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

function History({ lastEquation }) {
    // state to store all the accumulated history
    const [history, setHistory] = useState([]);

    // this effect will run every time `lastEquation` changes
    useEffect(() => {
        if (lastEquation) {
            setHistory((prevHistory) => [...prevHistory, lastEquation]);
        }
    }, [lastEquation]);

    return (
        <div>
            <Box width={300}>
                <Card sx={{ backgroundColor: 'transparent', color: 'white' }}>
                    <CardContent>
                        <Typography variant="h4">History</Typography>
                        <ul>
                            {history.map((item, index) => (
                                <li style={{ paddingBottom: '10px', paddingTop: '10px' }} key={index}>{item}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}

export default History;
