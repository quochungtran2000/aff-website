import { titles } from 'constants/title';
import { useRouteMatch } from 'react-router-dom';

/**
 * Set document title
 * @param title
 * @returns void
 */
export const UpdateDocumentTitle = (): JSX.Element => {
  for (const elm of titles) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const match = useRouteMatch(elm.path);
    if (match?.isExact) {
      if (elm.param) {
        document.title = elm.setTitle((match.params as any)[elm.param]);
      } else {
        document.title = elm.setTitle();
      }
      break;
    }
  }

  return <></>;
};
