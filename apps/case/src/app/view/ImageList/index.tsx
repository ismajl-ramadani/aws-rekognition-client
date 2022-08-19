import { useContext } from 'react';
import { Box, Grid, Card, ResponsiveContext, Spinner, Text } from 'grommet';
import ImagePreview from '../../components/ImagePreview';
import SuggestLabel from '../../components/SuggestLabel';
import useImageLabels from '../../hook/useImageLabels';
import { useSharedStateContext } from '../../context/SharedStateContext';
interface ImageListProps {
  images: File[];
}

export default function ImageList(props: ImageListProps) {
  const size = useContext(ResponsiveContext);
  const { images } = props;
  const { loading, labels } = useImageLabels(images);
  const { addItem } = useSharedStateContext();
  return (
    <Box pad="large">
      {loading && (
        <Box align="center" direction="row" gap="small" pad="small">
          <Spinner />
          <Text size="small">Hold tight, we're preparing your results...</Text>
        </Box>
      )}
      <Grid
        columns={size !== 'small' ? 'small' : '100%'}
        gap="small"
        margin={{ top: '20px' }}
      >
        {images.map((image, index) => (
          <Card
            pad="large"
            key={index}
            style={{ padding: 10 }}
            flex
            align="center"
          >
            <ImagePreview file={image} />
            <SuggestLabel
              labels={labels[index]}
              labelFoundItemAddClicked={(label: string) => {
                addItem(label);
              }}
            />
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
