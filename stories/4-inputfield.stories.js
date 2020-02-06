import React from 'react'
import DialogContent from "@material-ui/core/DialogContent";
import { TextField, Container, makeStyles, Portal } from "@material-ui/core";
//import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from "prop-types";


export default {
    title: 'Fields'
}

const useStyle = makeStyles(theme => ({
  InputField: {
    margin: theme.spacing(1)
  }
}));



const FIELDS = [
  ["Patient's Name"],
  ["Sex", "Age", "Birthday"],
  ["House No.", "Street", "City"],
  ["Mother's Name", "Mother's Occupation"],
  ["Father's Name", "Father's Occupation"]
];

function Reducer(state, action){
    switch(action.type){
        case 'INPUT':
            return action.data !== ''? (state = {...state, [action.label]:false}):(
            state = {...state, [action.label]:true})
        default:
            return state
    
        }
}

const InputField = props => {
  const classes = useStyle();
  const [state, DISPATCH] = React.useReducer(Reducer, [])

  React.useEffect(() => console.log(state), [state])

  return (
    <div>
      {props.fields.map(group => (
        <div key={group} style={{ display: "flex" }}>
          {group.map(name => (
            <TextField
              key={name}
              name={name}
              className={classes.InputField}
              autoFocus
              margin="dense"
              label={name}
              InputLabelProps={{
                shrink: true
              }}
              type={name === "Birthday" ? "date" : (name === "Age"? "number":"text")}
              fullWidth
              variant="outlined"
              error={state[`${name}`]}
              onChange={event => DISPATCH({data: event.target.value, label: event.target.name, type: 'INPUT'})}
              helperText={state[`${name}`] && 'This field is required *'}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
InputField.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export const SampleFields = () => {
    return <InputField fields={FIELDS} />
}