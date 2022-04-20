import { useState } from 'react';
import { Button, ButtonGroup, Container, Grid } from '@mui/material';

function Contador() {
    const [result, setResult] = useState(0);

    function handleResult(type: number, value: number){
        if(type){ // Function Acréscimo
            setResult(result + value)
        }else{ // Function Decréscimo
            setResult(result - value)
        }
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {result}
                </Grid>
                <Grid item xs={12}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button 
                            color="success"
                            onClick={() => {
                                handleResult(1, 1)
                            }}
                        >
                            +1
                        </Button>
                        <Button 
                            color="success"
                            onClick={() => {
                                handleResult(1, 10)
                            }}
                        >
                            +10
                        </Button>
                        <Button 
                            color="success"
                            onClick={() => {
                                handleResult(1, 100)
                            }}
                        >
                            +100
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item xs={12}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button 
                            color="error"
                            onClick={() => {
                                handleResult(0, 1)
                            }}
                        >
                            +1
                        </Button>
                        <Button 
                            color="error"
                            onClick={() => {
                                handleResult(0, 10)
                            }}
                        >
                            +10
                        </Button>
                        <Button 
                            color="error"
                            onClick={() => {
                                handleResult(0, 100)
                            }}
                        >
                            +100
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Contador;