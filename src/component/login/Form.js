import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import validate from 'component/login/controller/controller_form';


const useStyles = makeStyles(theme => ({

 LoginInput: {
  margin: '10px',
 },
 Button: {
  margin: '10px',
 }
}))


const FormInput = ({Tname, Tlabel, Ttype, loginFn, err}) => {
  const [error, setErr] = React.useState(err)
  const classes = useStyles()
  
  React.useEffect(() => {
    setErr(err)
  },[err])

 return(
  <TextField
    name={Tname}
    label={Tlabel}
    variant="outlined"
    className={classes.LoginInput}
    type={Ttype}
    onChange={
      (e)=>{
        loginFn(e)
        setErr(validate.handleInput(e))
      }}
    error={error}
    onBlur={(e)=>setErr(validate.handleInput(e))}
  />
 )
}
FormInput.propTypes = {
 Tname: PropTypes.string.isRequired,
 Tlabel: PropTypes.string.isRequired,
 Ttype: PropTypes.string,
 loginFn: PropTypes.func.isRequired,
 err: PropTypes.bool
}


export default function LoginForm({loginFn, submitFn}){
  const [update, setUpdate] = React.useState(true)
  const [check, setCheck] = React.useState(validate.isValidated())
  
  React.useEffect(() => {
    setCheck(validate.isValidated())
  }, [update])
  const classes = useStyles()
  
    return (
    <form 
      onSubmit={(e)=>{
        submitFn(e)
        setUpdate(!update)
      }}
      style={{
        display:'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '25px',
      }}
    > 
      <FormInput
	      Tname={"email"}
        Tlabel={"Email"}
        loginFn={loginFn}
        err={check.email}
      />
      <FormInput 
	      Tname={"password"}
        Tlabel={"Password"}
	      Ttype={"password"}
        loginFn={loginFn}
        err={check.password}
      />
      <Button 
        color="primary" 
        variant="contained"  
        className={classes.Button}
        type="submit"
      >
        Submit
      </Button>	
  </form>
   
    )
}
