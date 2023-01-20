import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery, useMutation, useQueryClient } from 'react-query';

export default function Autocompletion({ name, httpClient, setData, info, defaultValue }) {
  const isMultiple = !name.includes('Parent');
  const [isLimitReached, setLimitReached] = React.useState(false);
  const [defValue, setDefValue] = React.useState((() => {
    return isMultiple ? [] : { name: defaultValue ?? "", id: null }
  }));
  const queryClient = useQueryClient();

  const links = {
    categories: '/api/c/category/all',
    'parent category': '/api/c/category/all',
    tags: '/api/c/tag/all',
    'parent': '/api/c/article/all',
  }
  const dataName = `${name}Data`;
  const url = links[name.toLowerCase()];


  const { isLoading, error, data: response, mutate } =
    useMutation(({ url, keyword }) => httpClient.get(`${url}?keyword=${keyword}`), {
        onSuccess: data => {
            queryClient.setQueryData(dataName, data);
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

  const handleChange = (e, val) => {
    if (isMultiple) {
      const limitReached = val.length >= 5;
      if (limitReached) {
        setLimitReached(true);
        return;
      }
      setData(s => ({ ...s, data: [...val] }));
      return;
    }
    setData(s => ({...s, data: val?.id ?? null}));
  }

  const handleInput = e => {
    console.log('handling input...', e.target.value);
    //TODO: throttling needed here
    mutate({ url, keyword: e.target.value });
  }

    
  return (
      <Autocomplete
        filterOptions={(x) => x}
        multiple={isMultiple}
        limitTags={3}
        size={!isMultiple ? 'small' : 'medium'}
        onOpen={() => {
          console.log('opened');
        }}
        onClose={() => {
          console.log('closed');
        }}
        onChange={handleChange}
        getOptionLabel={(option) => option.name ?? option.title}
        defaultValue={defValue}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        freeSolo={true}
        getOptionDisabled={() => isLimitReached}
        id="tags-standard"
        options={response?.data ?? []}
        loading={isLoading}
        renderInput={(params) => (
          <TextField
            onInput={handleInput}
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