import { useEffect, useState } from "react";
import {API_URL} from '../utils/constants.ts';

export default function useDataFromDb(url:string = `${API_URL}/post`) {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, [url]);

    return data;
};