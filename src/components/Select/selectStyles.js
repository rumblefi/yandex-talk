export const selectStyles = {
    control: (base, state) => ({
        ...base,
        height: '38px',
        fontSize: '13px',
        transitionDuration: '0.3s',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '4px',
        boxShadow: 'none',
        borderColor: state.isFocused
            ? '#007DFF'
            : '#E9ECEF',
        '&:hover': {
            borderColor: '#007DFF'
        }
    }),
    menu: (base, state) => ({
        ...base,
        margin: '0',
        boxShadow: '0 1px 10px 0 rgba(0,44,92,0.28)',
    }),
    menuList: (base, state) => ({
        ...base,
        padding: 0
    }),
    placeholder: (base, state) => ({
        ...base,
        color: state.isFocused ? '#000' : '#858E98'
    }),
    valueContainer: (base, state) => ({
        ...base,
        paddingLeft: '10px',
        paddingRight: '10px',
    }),
}