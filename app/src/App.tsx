import { ChangeEvent, useState } from 'react';
import { Button } from "@mono/ui";
import { add } from "@mono/utils";
import './App.css';

function App() {
  const [nums, setNums] = useState({a: '', b: ''})

    const handleNumChange = (key: keyof typeof nums) => (e: ChangeEvent<HTMLInputElement>) => {
      setNums((prevState) => ({
          ...prevState,
          [key]: e.target.value,
      }));
    }
  return (
    <div>
        <input type="text" value={nums.a} onChange={handleNumChange('a')}/>
        <input type="text" value={nums.b} onChange={handleNumChange('b')}/>
        <Button onClick={() => {
            alert(add(Number(nums.a), Number(nums.b)));
        }}>Add</Button>
    </div>
  )
}

export default App
