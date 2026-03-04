import { useState } from 'preact/hooks';
import { TextInput } from '../components/TextInput';
import { storeUsername } from '../store/Username';
import { useDispatch } from 'react-redux';

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
    <div>
      <TextInput callback={setUsernameCallback}></TextInput>
      <button onClick={onSubmitCallback}>Установить имя пользователя</button>
    </div>
  );
}
