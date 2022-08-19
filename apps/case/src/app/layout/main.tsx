import { useState } from 'react';
import {
  Box,
  Grommet,
  Heading,
  Button,
  Collapsible,
  PageHeader,
  Page,
  PageContent,
} from 'grommet';
import AppBar from '../components/AppBar';
import SelectedItems from '../view/SelectedItems';

const theme = {
  global: {
    colors: {
      brand: '#1b535c',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};
export default function MainLayout(props: any) {
    const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none" color={'#141513'}>
            vinden case
          </Heading>
          <Button
            color={'black'}
            size={'small'}
            label={'Price'}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
          <Page>
            <PageContent>
              <PageHeader
                title="Estimate your storage price"
                subtitle={`Upload one or more photos with the objects you're trying to move,
                and get immediate estimations for the space you need and how much it will cost you.`}
              />
              {props.children}
            </PageContent>
          </Page>
          <Collapsible direction="horizontal" open={showSidebar}>
            <SelectedItems />
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
}
