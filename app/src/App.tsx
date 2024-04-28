import { ChangeEvent, useState } from 'react';

import { Button, Input, Text } from '@mono/ui';
import { add } from '@mono/utils';

import { Box } from '@widgets/box';
import { Box2 } from '@widgets/box2';

import { Form } from '@features/form';

import styles from './Styles.module.css';

const a = '';

function App() {
  const [nums, setNums] = useState({ a: '', b: '' });
  const handleNumChange = (key: keyof typeof nums) => (e: ChangeEvent<HTMLInputElement>) => {
    setNums((prevState) => ({
      ...prevState,
      [key]: e.target.value,
    }));
  };

  return (
    <Box className={styles.box}>
      <Box2>Example Second Box component</Box2>
      <Text tag="h1" className={styles.title}>
        Some Title Here
      </Text>
      <Form>
        <Input type="text" value={nums.a} onChange={handleNumChange('a')} />
        <Input type="text" value={nums.b} onChange={handleNumChange('b')} />
        <Button
          onClick={() => {
            alert(add(Number(nums.a), Number(nums.b)));
          }}>
          Add
        </Button>
      </Form>
    </Box>
  );
}

export default App;
