import { useSnackbar } from 'notistack'


class Notification {
    notify(props){
        const { enqueueSnackbar } = useSnackbar()
    }
}

export default new Notification()