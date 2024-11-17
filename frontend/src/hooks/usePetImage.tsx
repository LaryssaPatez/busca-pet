import { useEffect, useState } from "react";
import { CATAPI_URL, DOGAPI_URL, PLACEHOLDER_URL } from "../utils/constants";
import { PetImageProps } from "../utils/types";

const usePetImage = ({ imgX = 100, imgY = 100, type = 'Dog'}: PetImageProps) => {
    const [petImage, setPetImage] = useState(`${PLACEHOLDER_URL}/${imgX}x${imgY}`);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                let data;

                if (type === 'Dog') {
                    response = await fetch(DOGAPI_URL);
                    data = await response.json();
                    setPetImage(data.message);
                } else {
                    response = await fetch(CATAPI_URL);
                    data = await response.json();
                    setPetImage(data[0].url);
                }
            } catch (error) {
                console.error("Error fetching pet image:", error);
            }
        };

        fetchData();
    }, [type]);

    return petImage;
};

export default usePetImage;