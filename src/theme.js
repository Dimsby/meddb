import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
    myDrawer: {
        widthOpen: 300,
        widthClosed: 50
    },
    content: {
        flexGrow: 1,
        marginLeft: 300,
    }
})
export default theme