import React from "react";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import { observer } from "mobx-react";
import { Typography } from "@mui/material";
import Comments from "../../components/Comments/Comments";
import category from "../../store/category";

const NewsDetail = observer((props) => {
    const [news, setNews] = React.useState();
    const [loading, setLoading] = React.useState(true);

    let article_id = props.match.params.id;

    React.useEffect(() => {
        setLoading(true);
        fetch(`https://demo-api.vsdev.space/api/articles/${article_id}`)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setNews(data);
                    setLoading(false);
                }, 1000);
            });
    }, [article_id]);

    SetTitle(`Article #${article_id}`);

    return (
        <div className="news-detail" style={{marginTop: '100px'}}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div style={{ display: "flex" }}>
                        <img
                            src={"/" + news.full_image}
                            alt={news.name}
                            height="400px"
                            loading="lazy"
                        />
                        <div style={{ marginLeft: '50px' }}>
                            <Typography  variant="h5" gutterBottom>
                                {news.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {news.desc}
                            </Typography>
                        </div>
                    </div>
                    <br />
                    <div style={{ textAlign: "right" }}>
                        {category?.categories[news.category]?.name ? (
                            <Typography variant="body1" gutterBottom>
                                Category:{" "}
                                {category?.categories[news.category]?.name}
                            </Typography>
                        ) : (
                            ""
                        )}
                        <Typography variant="body1" gutterBottom>
                            Published on {news.date}
                        </Typography>
                    </div>
                    <Comments article_id={article_id} />
                </>
            )}
        </div>
    );
});

export default NewsDetail;
