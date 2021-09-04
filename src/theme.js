import {createTheme, createStyles} from '@material-ui/core/styles';

const theme = createTheme({
    myDrawer: {
        widthOpen: 200,
        widthClosed: 85
    },
    content: {
        flexGrow: 1,
        marginLeft: 200,
    },

    overrides: {
        MuiPaper: {
            elevation1: {
                boxShadow: "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px"
            },
            rounded: {
                borderRadius: '16px'
            },
        },
        MuiListItem: {
            root: {
                borderRadius: '16px'
            }
        },
        MuiButton: {
            root: {
                borderRadius: '16px'
            }
        }
    }
})
export default theme