import { color } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const cachedArticles = JSON.parse(localStorage.getItem("articles"));
        const cacheTimestamp = localStorage.getItem("articles_timestamp");

        // Check if cached articles exist and are not older than 1 hour
        if (cachedArticles && cacheTimestamp) {
            const now = new Date().getTime();
            const oneHour = 60 * 60 * 1000;

            if (now - cacheTimestamp < oneHour) {
                setArticles(cachedArticles);
                return;
            }
        }

        // Fetch articles from your backend API
        fetch("http://localhost:8010/fetch-articles?query=healthcare&pages=2")
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
                // Cache the articles and current timestamp in localStorage
                localStorage.setItem("articles", JSON.stringify(data.articles));
                localStorage.setItem("articles_timestamp", new Date().getTime());
            })
            .catch((error) => console.error("Error fetching articles:", error));
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center lg:px-20 lg:py-20 py-10 px-10 gap-10">
            <div className="flex flex-col w-full justify-center items-center text-center">
                <p className="uppercase lg:text-lg text-base">Our Blog</p>
                <p className="text-[#28661E] lg:text-4xl md:text-3xl text-xl">Latest news</p>
            </div>
            {articles.length > 0 ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
                    {articles?.map((item, index) => (
                        <div
                            key={index}
                            className={`lg:h-[30rem] lg:flex w-full ${index % 2 !== 0 ? "items-end" : "items-start"}`}
                            data-aos="zoom-in-down"
                        >
                            <div
                                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${item.image_url || "fallback-image-url.jpg"})`}}
                                className="bg-cover bg-start h-96 p-4 w-full rounded-xl"
                            >
                                <div className="relative ml-[-25px] bg-[#28661E] rounded-r-full inline-block px-2 text-white lg:text-lg w-auto">
                                    <p className="inline">{new Date(item.publish_date).toLocaleDateString()}</p>
                                </div>
                                <div className="flex flex-col justify-start items-start text-white lg:text-lg">
                                    <p>{item.headline}</p>
                                    <p>{item.abstract}</p>
                                </div>
                                <div>
                                  <br />
                                    <a href={item.url} className="flex flex-col justify-start items-start text-white lg:text-lg" target="_blank" rel="noopener noreferrer">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading articles...</p>
            )}
        </div>
    );
};

export default Articles;
