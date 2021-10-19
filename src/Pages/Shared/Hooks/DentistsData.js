import { useEffect, useState } from "react"


const DentistsData = () => {
    const [dentists, setDentists] = useState([]);

    useEffect(() => {

        fetch('/Dentists.json')
            .then(res => res.json())
            .then(data => setDentists(data))

    }, [])

    return {
        dentists
    }
}

export default DentistsData;