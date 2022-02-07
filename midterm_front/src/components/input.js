import React from 'react'
import { createTheme, ThemeProvider, TextField } from '@material-ui/core'

export default function Input({
    placeholder = '',
    label = '',
    onChange = () => { },
    ...props
}) {

    const theme = createTheme({
        overrides: {
            MuiOutlinedInput: {
                root: {
                    position: 'relative',
                    '& $notchedOutline': {
                        // borderColor: 'rgba(0, 0, 0, 0.23)',
                        //borderColor: PRIMARY_COLOR,
                    },
                    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                        //borderColor: PRIMARY_COLOR,
                        borderWidth: 2,
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            //borderColor: PRIMARY_COLOR,
                        },
                    },
                    '&$focused $notchedOutline': {
                        //borderColor: PRIMARY_COLOR,
                        borderWidth: 2,
                    },
                },
            },
            MuiInputBase: {
                input: {
                    color: '#000',
                    backgroundColor: '#fff'
                }
            },
            MuiFormLabel: {
                // root: {
                //     color: INFO_COLOR,
                //     '&$focused': {
                //         color: PRIMARY_COLOR
                //     }
                // }
            }
        },
    })


    return (
        <ThemeProvider theme={theme}>
            <TextField
                fullWidth
                inputProps={{
                    color: '#ffffff'
                }}
                variant='outlined'
                color='primary'
                placeholder={placeholder}
                label={label}
                onChange={onChange}
                {...props}
            />
        </ThemeProvider>
    )
}

