function Loading() {
    return (
        <>
            <div
                className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] h-[100vh] w-[100vw] flex justify-center align-items-center bg-[#000] opacity-[0.5]">
                <div className="loader">
                    <span className="loader-text">loading</span>
                    <span className="load"></span>
                </div>
            </div>
        </>
    )
}

export default Loading;