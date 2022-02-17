import { useEffect, useRef, useState } from "react";
import { TextField, Button } from "@mui/material";   
import "./style.css";
import { useTheme } from "@mui/material/styles";

function ButtonForm() {
    const theme = useTheme();

    function getFocus() {
      document.getElementById("outlined-basic").focus();
    };
  
    return (
      <Button
        onClick={getFocus}
        type="submit"
        variant="outlined"
        style={{
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.secondary.main,
          color: "black"
        }}
      >
        Отправить
      </Button>
    );
}

export const FormMui = ({ onSubmit }) => {
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
        </form>
    );
};