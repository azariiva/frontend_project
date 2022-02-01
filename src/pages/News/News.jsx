import React from "react";
import { Link } from "react-router-dom";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import { observer } from "mobx-react";
import { Typography, Button } from "@mui/material";
import category from "../../store/category";

const News = observer(() => {
    const [news, setNews] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        fetch("https://demo-api.vsdev.space/api/articles")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setNews(data);
                    setLoading(false);
                }, 1000);
            });
    }, []);

    SetTitle("News");

    return (
        <div className="news">
            {loading ? (
                <Loader />
            ) : (
                <div style={{
                }}>
                    {news.map((item) => (
                        <div key={item.id} style={{ marginTop: "30px" }}>
                            <Typography style={{position: 'relative', top: '220px', left: '30px', maxWidth: '400px'}} color="#FFF" variant="h4" gutterBottom>
                                {item.name}
                            </Typography>
                            <img
                                src={item.preview_image}
                                alt={item.name}
                                style={{
                                    height: "400px",
                                    maxHeight: "400px",
                                }}
                            />
                            <Button
                                color="success"
                                variant="contained"
                                LinkComponent={Link}
                                to={`/news/${item.id}`}
                                style={{ position: 'relative', right: '500px', bottom: '150px'}}
                            >
                                Подробнее
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export default News;
