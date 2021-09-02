export default () => {
    return {
        root: {
            borderRadius: 6,
            padding: '0.5rem 1rem',
            '&:hover': {
               // color: palette.text.primary,
               // backgroundColor: palette.grey[100],
            },
        },
        selected: {
            '&.Mui-selected': {
                fontWeight: 500,
               // backgroundColor: accentColor,
              //  color: palette.primary.main,
                '&:hover': {
                 //   color: palette.primary.main,
                 //   backgroundColor: accentColor,
                },
            },
        }
    };
};