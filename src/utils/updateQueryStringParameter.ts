import queryString from 'query-string';

export default function updateQueryStringParameter(search: string, newParams: any) {
  const searchObj = queryString.parse(search);

  return queryString.stringify({ ...searchObj, ...newParams }, { skipEmptyString: true, skipNull: true });
}
