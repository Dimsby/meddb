import {
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputAdornment,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AccountCircle} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}))

export default function PatientsForm(props) {
    const classes = useStyles();

    const defaultValues = {
        firstName: "",
        lastName: "",
        surName: ""
    };

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField
                        id="firstName-input"
                        name="firstName"
                        label="Имя"
                        type="text"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="lastName-input"
                        name="lastName"
                        label="Фамилия"
                        type="text"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
            <Divider/>
            <Button color="primary" type="submit">
                Сохранить
            </Button>
        </form>
    )
}