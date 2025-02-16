import { Button, ButtonGroup, Stack } from '@mui/material';

function Numbers({ handleNumber, handleOper, clearDisplay, handleBackspace, calculateResult }) {
    return (
        <div className="button-group">

            <ButtonGroup orientation="vertical" variant="contained">
                <Stack direction={'column'} spacing={2}>
                    <ButtonGroup>
                        <Stack direction={'row'} spacing={5}>
                            <Button size="large" variant="text" onClick={() => { clearDisplay() }}>Clear</Button>
                            <Button size="large" variant="text" onClick={() => { handleBackspace() }}>Backspace</Button>
                        </Stack>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Stack direction={'row'} spacing={3}>
                            <Button size="large" variant="text" onClick={() => handleNumber(7)}>7</Button>
                            <Button size="large" variant="text" onClick={() => handleNumber(8)}>8</Button>
                            <Button size="large" variant="text" onClick={() => handleNumber(9)}>9</Button>
                            <Button size="large" variant="text" onClick={() => handleOper('+')}>+</Button>
                        </Stack>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Stack direction={'row'} spacing={3}>
                            <Button size="large" variant="text" onClick={() => handleNumber(4)}>4</Button>
                            <Button size="large" variant="text" onClick={() => handleNumber(5)}>5</Button>
                            <Button size="large" variant="text" onClick={() => handleNumber(6)}>6</Button>
                            <Button size="large" variant="text" onClick={() => handleOper('-')}>-</Button>
                        </Stack>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Stack direction={'row'} spacing={3}>
                            <Button size="large" variant="text" onClick={() => handleNumber(1)}>1</Button>
                            <Button size="large" variant="text" onClick={() => handleNumber(2)}>2</Button>
                            <Button size="large" variant="text" onClick={() => handleNumber(3)}>3</Button>
                            <Button size="large" variant="text" onClick={() => handleOper('x')}>x</Button>
                        </Stack>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Stack direction={'row'} spacing={3}>
                            <Button size="large" variant="text" onClick={() => handleNumber(0)}>0</Button>
                            <Button size="large" variant="text" onClick={() => { }}>.</Button>
                            <Button size="large" variant="text" onClick={() => calculateResult()}>=</Button>
                            <Button size="large" variant="text" onClick={() => handleOper('/')}>/</Button>
                        </Stack>
                    </ButtonGroup>
                </Stack>
            </ButtonGroup >
        </div >
    );
}

export default Numbers