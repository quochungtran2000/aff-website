import { titles } from 'constants/title';
import { useRouteMatch } from 'react-router-dom';

/**
 * Set document title
 * @param title
 * @returns void
 */
export const UpdateDocumentTitle = (): JSX.Element => {
  for (const elm of titles) {
    if (!elm) break;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const match = useRouteMatch(elm.path);
    if (match?.isExact) {
      if (elm.param) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        document.title = elm.setTitle((match.params as any)[elm.param]);
      } else {
        document.title = elm.setTitle();
      }
      break;
    }
  }

  return <></>;
};
