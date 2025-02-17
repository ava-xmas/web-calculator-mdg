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
        <Box>
            <Card sx={{ backgroundColor: 'transparent', color: 'white' }}>
                <CardContent>

                    <Typography className='history-heading' variant="h4">History</Typography>
                    <div className="history-body">
                        <ul>
                            {history.map((item, index) => (
                                <li className='history-box' style={{ paddingBottom: '10px', paddingTop: '10px', listStyleType: 'none', }} key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </Box>

    );
}

export default History;
