import { useEffect, useState } from "react"


const ServicesData = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return {
        services
    }
}

export default ServicesData;