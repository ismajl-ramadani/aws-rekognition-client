import { useState, useEffect } from 'react';
import { Button, Box, Text, Anchor } from 'grommet';

interface SuggestLabelProps {
  labels: any[];
  labelFoundItemAddClicked: any;
}

export default function SuggestLabel(props: SuggestLabelProps) {
  const { status, labels }: any = props.labels;
  const [completed, setCompleted] = useState('');
  const [suggestedIndex, setSuggestedIndex] = useState(0);

  if (status === 'loading') {
    return <span>still fetching</span>;
  }

  const handleNoOnClick = (e: any) => {
    e.preventDefault();
    const nextIndex = suggestedIndex + 1;
    if (nextIndex < labels.length) {
      setSuggestedIndex(nextIndex);
    } else {
      setCompleted('nomatch');
    }
  };

  const handleYesOnClick = (e: any) => {
    setCompleted('match');
    props.labelFoundItemAddClicked(labels[suggestedIndex]);
  }
  return (
    <Box pad="small">
      <div>
        {completed === 'nomatch' ? (
          <Text size="xsmall">
            Sorry, there are no available suggestions at this moment for this
            image.
          </Text>
        ) : completed === 'match' ? (
          <Text size="xsmall">Match found, see price in the right side of the app.</Text>
        ) : (
          <Text size="small">
            Is this a <b>{labels[suggestedIndex]}</b>?
          </Text>
        )}
      </div>
      <div>
        {completed === '' && (
          <Box pad="small" align="center">
            <Anchor
              size="small"
              href=""
              label="No"
              margin={{ bottom: '10px' }}
              onClick={handleNoOnClick}
            />
            <Button size="small" label="Yes, add it" onClick={handleYesOnClick} />
          </Box>
        )}
      </div>
    </Box>
  );
}
