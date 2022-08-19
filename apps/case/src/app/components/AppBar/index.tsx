import { Box } from 'grommet';

export default function AppBar(props: any) {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="white"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: '1' }}
      {...props}
    />
  );
}
