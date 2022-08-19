import { useState, useEffect } from "react"
import {
    Box,
    Image
  } from 'grommet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ImagePreviewProps {
    file: File;
}

export default function ImagePreview(props: ImagePreviewProps) {
    const { file } = props;
    const [preview, setPreview] = useState<string>();
    useEffect(() => {
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
     }, [file])
    return (
        <Box height=" " width="small">
            <LazyLoadImage
                height={192}
                src={preview}
                width={192}
            />
      </Box>
    )
}