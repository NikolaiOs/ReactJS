import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { apiUrl } from "../../utils/constants";

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setError(false);
        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }

            return response.json();
        })
        .then((result) => setArticles(result))
        .catch((err) => {
            setError(true);
            console.warn(err);
        })
        .finally(() =>{
            setIsLoading(false)
        });
    }, []);

    return (
        <>
            <h3>Articles</h3>
            {error && <h5>Error</h5>}

            {isLoading ? (
                <CircularProgress />
            ) : (
                <ul>
                    {articles.map((art) => (
                        <li key={art.id}>{art.title}</li>
                    ))}
                </ul>
                )}
        </>
    )
};