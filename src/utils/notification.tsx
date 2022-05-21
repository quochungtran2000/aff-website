import { notification } from 'antd';
type TypeNotification = 'success' | 'info' | 'warning' | 'error';

const openNotificationWithIcon = (type: TypeNotification, message: string, description?: string) => {
  notification[type]({
    message,
    description,
  });
};

export default Object.freeze(openNotificationWithIcon);
