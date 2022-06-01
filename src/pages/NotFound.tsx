import { Result, Button } from 'antd';
import MainLayout from 'components/Layout';
import { useHistory } from 'react-router-dom';

export default function NotFound() {
  const history = useHistory();
  return (
    <MainLayout>
      <div className="p-20">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          className="text-black"
          extra={
            <Button type="primary" className="text-black" onClick={() => history.push('/')}>
              Quay lại trang chủ
            </Button>
          }
        />
      </div>
    </MainLayout>
  );
}
