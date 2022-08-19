import { useContext, createContext, useState } from 'react';
import _ from 'lodash';

type SharedStateContextType = {
  selectedItems: any[];
  totalPrice: number;
  addItem: (label: string) => void;
  removeItem: (index: number) => void;
};

const initalState: SharedStateContextType = {
  selectedItems: [],
  totalPrice: 0,
  addItem: (label: string) => {},
  removeItem: (index: number) => {},
};

const SharedStateContext = createContext(initalState);
const SharedStateContextWrapper: React.FC<{ children: any }> = ({
  children,
}) => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const addItem = (label: string) => {
    const price = 50;
    setSelectedItems(prevItems => ([
        ...prevItems,
        {
          label,
          price,
        }
    ]));
    setTotalPrice(totalPrice + price);
  };

  const removeItem = (index: number) => {
    const item = selectedItems[index];
    const currentItems = _.cloneDeep(selectedItems);
    currentItems.splice(index, 1);
    setSelectedItems(currentItems);
    setTotalPrice(totalPrice - item.price);
  };

  return (
    <SharedStateContext.Provider
      value={{
        selectedItems,
        totalPrice,
        addItem,
        removeItem,
      }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

const useSharedStateContext = () => useContext(SharedStateContext);

export { useSharedStateContext, SharedStateContextWrapper };
