export const withController = (Provider) => (Component) => () => {
    return (
        <Provider>
            <Component />
        </Provider>
    )
}