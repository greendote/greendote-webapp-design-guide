import { Box, Button, Stack } from '@mui/material';

export function GreendoteTheme() {
  return (
    <>
      <Stack direction='row' spacing={2}>
        <Box bgcolor='primary.main'>48 #0ECCE6</Box>
        <Box bgcolor='primary.main'>54 #23D8F1</Box>
        <Box bgcolor='primary.main'>64 #52E1F4</Box>
        <Box bgcolor='primary.main'>74 #82E9F7</Box>
        <Box bgcolor='primary.main'>80 #9FEEF9</Box>
        <Box bgcolor='primary.main'>88 #C5F5FB</Box>
        <Box bgcolor='primary.main'>94 #E2FAFD</Box>
        <Box bgcolor='primary.main'>100 #FFFFFF</Box>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Button>버튼</Button>
        <Button variant='filled' size='large'>
          버튼
        </Button>
        <Button variant='filled' size='medium'>
          버튼
        </Button>
        <Button variant='filled' size='small'>
          버튼
        </Button>
        <Button variant='filled' disabled>
          버튼
        </Button>
      </Stack>
    </>
  );
}
