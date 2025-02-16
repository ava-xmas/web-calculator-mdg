import { TextField } from "@mui/material";

function Display({ value }) {
    return (
        <div>
            <TextField value={value} size="large" sx={{
                '& input': {
                    textAlign: 'right',
                    direction: 'ltr',
                    color: "white",
                }
            }}></TextField>
        </div>
    );
}

export default Display