import { Box, List, Menu, Text } from 'grommet';
import { More } from 'grommet-icons';
import { useSharedStateContext } from '../../context/SharedStateContext';
import { findIndex } from 'lodash';

export default function SelectedItems(props: any) {
  const { selectedItems, totalPrice, removeItem } = useSharedStateContext();
  return (
    <Box
      flex
      width="medium"
      background="light-2"
    >
      <Box pad="large">
        <List
          data={selectedItems.map(item => ({ label: item.label, entry: `${item.label} ${item.price} kr/mo`}))}
          pad={{ left: 'small', right: 'none' }}
          action={(item: any, index) => (
            <Menu
              key={index}
              icon={<More />}
              hoverIndicator
              items={[{ label: 'Remove', onClick: () => {
                const _index = findIndex(selectedItems, (selectedItem) => selectedItem.label === item?.label);
                removeItem(_index);
              } }]}
            />
          )}
        />
         {selectedItems.length === 0 && <Text size="xsmall" margin={{ top: '20px' }}>
            Please select some items to see price suggestions.
        </Text>}
        <Box pad="small">
            <Text color="brand">Total Price: {totalPrice} kr/mo</Text>
        </Box>
      </Box>
    </Box>
  );
}
