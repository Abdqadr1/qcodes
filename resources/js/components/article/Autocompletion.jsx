import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery, useMutation } from 'react-query';

export default function Autocompletion({ name, httpClient, setData, info, defaultValue }) {
  const isMultiple = !name.includes('Parent');
  const [isLimitReached, setLimitReached] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [timeoutId, setTimeoutId] = React.useState(null);
  const [defValue, setDefValue] = React.useState(isMultiple ? [] : { name: defaultValue ?? "", id: null });
  const links = {
    categories: '/api/c/category/all',
    'parent category': '/api/c/category/all',
    tags: '/api/c/tag/all',
    'parent': '/api/c/article/all',
  }
  const dataName = `${name}Data`;
  const url = links[name.toLowerCase()];

  React.useEffect(() => {
    setDefValue(info?.data)
  }, [info]);

  const { isLoading, data: response, mutate } =
    useMutation(({ url, keyword }) => httpClient.get(`${url}?keyword=${keyword}`), {
          refetchOnWindowFocus: false ,
        onSuccess: (data) => {
          //TODO: filter def value from result;
          setList(data.data.forEach());
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

  const handleChange = (e, val) => {
    setDefValue(val);
    if (isMultiple) {
      const limitReached = val.length >= 5;
      if (limitReached) {
        setLimitReached(true);
        return;
      }
      console.log(val);
      setData(s => ({ ...s, data: [...val] }));
      return;
    }
    setData(s => ({...s, data: val ?? null}));
  }

  const handleInput = (e, input) => {
    setInputValue(input);
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(
        () => {
          mutate({ url, keyword: input })
        },
        1000
      )
    );
  }

    
  return (
      <Autocomplete
        filterOptions={(x) => x}
        multiple={isMultiple}
        limitTags={3}
        size={!isMultiple ? 'small' : 'medium'}
        value={defValue}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInput}
        getOptionLabel={(option) => option?.name ?? option.title}
        isOptionEqualToValue={(option, value) => {
          if (option?.title) return option.title === value.title;
          return option.name === value.name;
        }}
        freeSolo={true}
        getOptionDisabled={() => isLimitReached}
        id="tags-standard"
        options={list}
        loading={isLoading}
        renderInput={(params) => (
          <TextField
            error={info.isError}
            helperText={info.isError ? info.errorMessage : ""}
            {...params}
            label={name}
            placeholder={name}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
  );
}