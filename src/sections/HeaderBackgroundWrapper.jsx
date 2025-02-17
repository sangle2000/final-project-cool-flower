function HeaderBackgroundWrapper(WrapperComponent) {
    return ({image, ...props}) => {
        const style = {
            backgroundImage: `url(${image})`,
        }

        return (
            <div className="header-container" style={style}>
                <WrapperComponent {...props} />
            </div>
        )
    }
}

export default HeaderBackgroundWrapper;