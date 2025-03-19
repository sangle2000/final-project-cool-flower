import {createContext, useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

const DeviceCheckedContext = createContext(null)

export const DeviceCheckedProvider = ({ children }) => {
    const [device, setDevice] = useState("PC")

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            if (width <= 721) {
                setDevice("Small Mobile");
            }
            else if (width <= 991) {
                setDevice("Mobile");
            } else {
                setDevice("PC");
            }
        };

        checkDevice()

        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, [])

    return (
        <DeviceCheckedContext.Provider value={device}>
            {children}
        </DeviceCheckedContext.Provider>
    )
}

export const useDeviceChecked = () => useContext(DeviceCheckedContext);

DeviceCheckedProvider.propTypes = {
    children: PropTypes.node.isRequired, // `node` can be React component, text, or JSX
}
