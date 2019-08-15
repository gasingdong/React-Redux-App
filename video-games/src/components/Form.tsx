import React, { useState } from 'react';
import { QueryState } from '../store/query/types';

interface FormProps {
  setQuery: (query: QueryState) => void;
}

const Form = ({ setQuery }: FormProps): React.ReactElement => {
  const [name, setName] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setQuery({
      name,
    });
    setName('');
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          id="name"
          placeholder="Search by name"
          onChange={changeHandler}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
