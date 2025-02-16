import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

function History({ lastEquation }) {
    // State to store all the accumulated history
    const [history, setHistory] = useState([]);

    // This effect will run every time `lastEquation` changes
    useEffect(() => {
        if (lastEquation) {
            setHistory((prevHistory) => [...prevHistory, lastEquation]); // Append the new value to the array
        }
    }, [lastEquation]); // Dependency on `lastEquation`, so it runs every time it changes

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
