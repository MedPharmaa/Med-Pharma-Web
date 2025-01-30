import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Get token from local storage
                // const storedToken = localStorage.getItem('token');
                console.log(token);

                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    // credentials: 'include',
                });

                const result = await res.json();
                if (!res.ok) {
                    throw new Error(result.message + " 😑");
                }

                setData(result.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        };

        fetchData();
    }, [url, token]);

    return {
        data,
        loading,
        error,
    };
};

export default useFetchData;
