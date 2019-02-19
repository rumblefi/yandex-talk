export const selectStyles = {
    control: (base, state) => ({
        ...base,
        marginBottom: 12,
        height: '38px',
        maxWidth: '100%',
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
        boxShadow: '0 1px 10px 0 rgba(0,44,92,0.28)'
    }),
    menuList: (base, state) => ({
        ...base,
        maxHeight: '145px'
    }),
    placeholder: (base, state) => ({
        ...base,
        color: state.isFocused ? '#000' : '#858E98'
    }),
    valueContainer: (base, state) => ({
        ...base,
        paddingLeft: '10px',
        paddingRight: '10px',
        whiteSpace: 'nowrap',
        flexWrap: 'nowrap',
        position: 'absolute',
        left: 0,  
        right: 0,  
        top: 0,  
        bottom: 0,  
    }),
}
