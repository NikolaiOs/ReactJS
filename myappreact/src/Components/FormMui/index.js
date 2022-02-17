import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material"; 
import { ButtonMui } from "../ButtonMui";
import "./style.css";

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
          <ButtonMui />
        </form>
    );
};