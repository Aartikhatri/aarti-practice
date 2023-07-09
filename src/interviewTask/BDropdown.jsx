import React, { useState } from 'react'


const arr = [
    {
        country: "india",
        cities: ["delhi", "indore"]
    },
    {
        country: "pakistan",
        cities: ["karachi", "kabul"]
    },
    {
        country: "USA",
        cities: ["London", "america"]
    }
]


const BDropdown = () => {
    const [selectedCounrty, setSelectedCountry] = useState(arr[0].country);
    const [cities, setCities] = useState(arr[0].cities)


    const handleCountry = (e) => {
        console.log(e, arr[e].country, arr[e].cities)
        setSelectedCountry(arr[e].country)
        setCities(arr[e].cities)
    }

    return (
        <div>
            <select onChange={(e) => handleCountry(e.target.value)} >
                {
                    arr.map((item, i) => (
                        <option key={i} value={i} >{item.country} </option>
                    ))
                }

            </select>
             
            {
                    selectedCounrty && (
                        <select>
                            {
                                cities.map((item, i) => (
                                    <option key={i}>{item} </option>
                                ))
                            }
                        </select>
                    )
                }
        </div>
    )
}

export default BDropdown
