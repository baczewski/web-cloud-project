import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      padding: 30,
      backgroundColor: 'white',
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'center'
  },
  button: {
      width: '80%',
      alignSelf: 'center'
  },
  inputWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%',
      gap: 5
  },
  inputLabel: {
      alignSelf: 'flex-start'
  },
  input: {
      width: '100%'
  },
  header: {
      fontSize: 26,
      marginBottom: 20
  },
  textarea: {
      width: '100%',
      maxWidth: '120%',
      maxHeight: '200px',
      minWidth: '100%',
      border: '1px solid gray'
  }
}));