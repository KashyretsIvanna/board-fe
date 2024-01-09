import { FormControl, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

import SearchIcon from '../../../images/icons/search.svg';

const TypeSearch = (props: { onSearch: (value: string) => void }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <div id="app">
      <FormControl>
        <TextField
          size="small"
          variant="outlined"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  onClick={() => {
                    props.onSearch(search);
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  );
};

export default TypeSearch;
