import React,{useEffect, useState} from 'react';
import axios from 'axios';
/*
const fetchServices = async() =>{
    try{
        const response = await axios.get("https://localhost:7073/api/Services");
        console.log(response.data);
    }catch(error){
        console.log("API Hatası :",error);
    }

    return(

    );
};


fetchServices();
*/

const NetworkTestService=()=>{
    const [services, setServices] = useState([]);

    useEffect(() =>{
        const testData = async() => {
            try{
                const response = await axios.get("https://localhost:7073/api/Services");
                setServices(response.data);
                console.log(response.data);
            }catch(error){
                console.log("API Hatası :",error);
            }
        };
        testData();
    },[]);

    return(

        <div>
            <h1>Hizmetlerim</h1>
            <ul>
                {services.map((services)=>(
                    <li key={services.id}>{services.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default NetworkTestService;