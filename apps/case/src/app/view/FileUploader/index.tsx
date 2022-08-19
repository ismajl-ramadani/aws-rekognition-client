import { Box, FileInput } from 'grommet';

export default function FileUploader(props: any) {
  const { onChange } = props;
  return (
    <Box width="medium">
      <FileInput
        multiple={{
          max: 5,
        }}
        onChange={(event: any, { files }: any) => {
          onChange(files);
        }}
        renderFile={() => {
          return <span></span>;
        }}
      />{' '}
    </Box>
  );
}
