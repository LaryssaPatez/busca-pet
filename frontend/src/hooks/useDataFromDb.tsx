import { useEffect, useState } from "react";
import {API_URL} from '../utils/constants.ts';

export default function useDataFromDb(url:string = `${API_URL}/post`) {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Resposta da rede não OK');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Ocorreu um erro ao buscar os cards:', error);
            }
        };

        fetchData();
    }, [url]);

    return data;
};