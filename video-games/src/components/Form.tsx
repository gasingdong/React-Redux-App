import React, { useState } from 'react';

const Form = (): React.ReactElement => {
  const [name, setName] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  return (
    <div className="form">
      <form>
        <input
          type="text"
          value={name}
          id="name"
          placeholder="Search by name"
          onChange={changeHandler}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
