import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
    myDrawer: {
        widthOpen: 200,
        widthClosed: 55
    },
    content: {
        flexGrow: 1,
        marginLeft: 200,
    }
})
export default theme