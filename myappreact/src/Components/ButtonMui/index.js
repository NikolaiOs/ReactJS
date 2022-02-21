import { Button } from "@mui/material"; 
import { useTheme } from "@mui/material/styles";

export function ButtonMui() {
    const theme = useTheme();

    return (
      <Button
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
};