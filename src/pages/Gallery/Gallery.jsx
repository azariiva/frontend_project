import React from 'react';
import Loader from '../../components/Loader/Loader'
import { Typography } from "@mui/material";
const Gallery = () => {

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

    return (
        <div>
            <Typography style={{textAlign: 'center'}} variant="h3">Галлерея</Typography>
            {!loading
                ?
                (<div style={{display: 'grid', gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: '40px 0', marginTop: '50px'}}>{
                    news.map(item => <img src={item.preview_image} />)
                }</div>)
                :
                (<Loader />)
            }
        </div>
    );
};

export default Gallery;