import { ImageListItem } from '@mui/material';
import ImageList from '@mui/material/ImageList';

export default function ImgList({ imgCollection }) {

    return (
        <ImageList
            sx={{ width: "100%", height: 80 }}
            cols={imgCollection.length}
            rowHeight={80}
            variant={'masonry'}
            style={{ overflowX: "hidden" }}
        >
            {imgCollection.map((item, index) => (
                <ImageListItem key={item.img} >
                    <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={"itemPreview"}
                        loading="lazy"
                        style={{ cursor: "pointer" }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
};