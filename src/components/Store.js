import React from 'react';
import { Tab, Box, Typography, Stack } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import StoreButtonGroup from './StoreButton';

const Store = ({ game }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box width='20%'>
      <Stack direction='column' alignItems={'center'}>
        <Typography variant='h6' color={'primary'}>
          Store
        </Typography>
        <Box width='100%'>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
              >
                <Tab label='Buy' value='1' />
                <Tab label='Sell' value='2' />
              </TabList>
            </Box>
            <TabPanel sx={{ p: 0 }} value='1'>
              <StoreButtonGroup type='buy' game={game} />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='2'>
              <StoreButtonGroup type='sell' game={game} />
            </TabPanel>
          </TabContext>
        </Box>
      </Stack>
    </Box>
  );
};

export default Store;
