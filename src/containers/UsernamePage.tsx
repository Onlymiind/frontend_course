import { useState } from 'preact/hooks';
import { TextInput } from '../components/TextInput';
import { storeUsername } from '../store/Username';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';

export function UsernamePage(): React.JSX.Element {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const setUsernameCallback = (newUsername: string) => {
    console.log(username);
    setUsername(newUsername);
  };

  const onSubmitCallback = () => {
    console.log(username);
    dispatch(storeUsername(username));
  };

  return (
    <Box
      sx={{
        placeItems: 'center',
        gap: '1em',
        display: 'flex',
        margin: '1em',
      }}
    >
      <TextInput
        callback={setUsernameCallback}
        label='Имя пользователя'
      ></TextInput>
      <Button onClick={onSubmitCallback} variant='outlined'>
        Установить имя пользователя
      </Button>
    </Box>
  );
}
