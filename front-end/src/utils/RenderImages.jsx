import React, { useState, useEffect } from 'react';

const RenderImages = ({ imageName }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        import(`../assets/image/${imageName}.png`)
            .then((imageModule) => {
                setImage(imageModule.default);
            })
            .catch((error) => {
                return;
            });
    }, [imageName]);

    return (
        <>
            {image && <img src={image} alt="" />}
        </>
    );
};

export default RenderImages;
