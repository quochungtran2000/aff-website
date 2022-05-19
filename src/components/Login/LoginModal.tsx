import { Button, Form, Input, Modal, Select } from 'antd';
import { useEffect } from 'react';

const { Option } = Select;

interface IProps {
  isModalVisible: boolean;
  onCancel?: () => void;
  handleUpdateUser?: (data: any) => void;
  onRegisterClick: () => void;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function LoginModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, handleUpdateUser, onRegisterClick } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, []);

  return (
    <Modal
      visible={isModalVisible}
      onCancel={onCancel}
      footer={null}
      className="rounded-2xl"
      style={{ borderRadius: '20px' }}
    >
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Đăng Nhập</h1>
          {/* <p className="text-sm dark:text-coolGray-400">Sign in to access your account</p> */}
        </div>
        <Form
          form={form}
          name="role_based_auth"
          layout="horizontal"
          onFinish={handleUpdateUser}
          className="space-y-12 ng-untouched ng-pristine ng-valid"
          {...formLayout}
        >
          {/* <Form.Item label="Mã nhân viên" name="id">
            <Input disabled />
          </Form.Item>

          <Form.Item label="Họ và Tên" name="fullName">
            <Input disabled />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input disabled />
          </Form.Item>

          <Form.Item label="Điện thoại" name="phoneNumber">
            <Input disabled />
          </Form.Item>

          <Form.Item className="hidden" name="jobTitleCode">
            <Input className="hidden" />
          </Form.Item>

          <Form.Item label="Chức vụ" name="jobTitle">
            <Input disabled />
          </Form.Item>

          <Form.Item label="Tên bộ phận/Cửa hàng" name="departmentName">
            <Input className="w-full" disabled />
          </Form.Item>


          <Form.Item className="flex items-center justify-center">
            <Button type="primary" htmlType="submit" className="bg-primary">
              CHỈNH SỬA
            </Button>
          </Form.Item> */}

          <div className="space-y-4">
            <Form.Item name="username" label="Tên đăng nhập" htmlFor="username">
              <Input
                className="w-full px-3 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                id="username"
              />
            </Form.Item>

            <Form.Item name="password" label="Mật khẩu" htmlFor="pasword" className="my-4">
              <Input
                className="w-full px-3 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                id="password"
              />
            </Form.Item>
            <Form.Item className="flex justify-center mt-4">
              <div>
                <button
                  type="submit"
                  className="w-full mt-4 mb-2 px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900"
                >
                  Đăng nhập
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-coolGray-400">
                Chưa có tài khoản?
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline dark:text-violet-400"
                  onClick={(e) => {
                    e.preventDefault();
                    onRegisterClick();
                  }}
                >
                  Đăng kí
                </a>
                .
              </p>
            </Form.Item>
          </div>
          {/* <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-coolGray-400">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="button" className="w-full px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-coolGray-400">
              Dont have an account yet?
              <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">
                Sign up
              </a>
              .
            </p>
          </div> */}
        </Form>
      </div>
    </Modal>
  );
}
