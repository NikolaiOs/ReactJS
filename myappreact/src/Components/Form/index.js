import { useEffect, useRef, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { ThemeProvider, useTheme, createTheme } from "@material-ui/core/styles";   
import "./style.css";


const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9800",
      },
      secondary: {
        main: "#0098FF",
      },
    },
});

function ButtonForm() {
    const theme = useTheme();
    return (
      <Button
        type="submit"
        variant="outlined"
        style={{
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.secondary.main,
        }}
      >
        Отправить
      </Button>
    );
}

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState("");
    const textField = useRef();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    };

    useEffect(() => {
        textField.current?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <ThemeProvider theme={theme} >
                <TextField 
                    style={{ margin: '0'}}
                    id="outlined-basic"
                    label="Напиши"
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    inputRef={textField}
                />
                <ButtonForm />
            </ThemeProvider>
        </form>
    );
};