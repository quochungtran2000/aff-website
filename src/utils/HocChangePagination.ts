import updateQueryStringParameter from './updateQueryStringParameter';
// import { useHistory } from 'react-router-dom';

export const HocChangePagination = (history: any) => {
  return (page: number, pageSize?: number | undefined) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    history.push({
      pathname: location.pathname,
      search: updateQueryStringParameter(location.search, {
        page: page,
        page_size: pageSize,
      }),
    });
  };
};
