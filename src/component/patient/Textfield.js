import React from 'react'
import { TextField, FormLabel, makeStyles, FormControlLabel, RadioGroup, Radio, Box, Typography } from "@material-ui/core";
import clsx from 'clsx'
import { FIELDS as data,  Reducer} from './controller/TextFieldCtrllr'
import PropTypes from "prop-types";

const useStyle = makeStyles(theme => ({
  InputField: {
    margin: theme.spacing(1),
    flex: 6
  },
  tiny: {
    flex: 2
  },
  short: {
    flex: 2,
  },
  medium: {
    flex: 3
  }
}));


const InputField = props => {
    const classes = useStyle();
    const [state, DISPATCH] = React.useReducer(Reducer, [])
     

    return (

      <div style={{padding: '15px', margin: '15px', width: '100%'}}>
        <Typography variant="h5">{props.title}:</Typography>
      {props.fields.map(group => (
        <div key={group} style={{ display: "flex"}}>
          {group.map(name => name !== 'Gender'?(
            <TextField
              key={name}
              name={name}
              className={clsx(classes.InputField, {[classes.tiny]: name === 'Age' || 
              name==='House No.',  
              [classes.medium]: name === 'Height' || 
              name === 'Weight',
              [classes.small]: name === 'Birthday'
            })}
              autoFocus
              margin="dense"
              label={name}
              InputLabelProps={{
                shrink: true
              }}
              type={name === "Birthday" ? "date" : (name === "Age" || name === "Height" || name === 'Weight' ? "number":"text")}
              fullWidth
              variant="outlined"
              error={state[`${name}`]}
              onChange={event => DISPATCH({data: event.target.value, label: event.target.name, type: 'INPUT'})}
              helperText={state[`${name}`] && 'This field is required *'}
            />
          ): (
          <React.Fragment>
            <RadioGroup>
            <FormLabel style={{fontSize: '13px', marginLeft: '21px'}}>{name}</FormLabel>
              <Box className={classes.short} style={{display: 'flex', marginLeft: '8px'}}>
              <FormControlLabel value="male" control={<Radio color="primary"  />} label="Male" />
              <FormControlLabel value="female" control={<Radio color="primary"  />} label="Female" />
              <FormControlLabel value="others" control={<Radio color="primary" />} label="Others" />
              </Box>
            </RadioGroup>
          </React.Fragment>
          )
          )}
        </div>
      ))}
    </div>
    )
}
  InputField.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  };
  export default InputField