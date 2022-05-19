import { Button, Form, Input, Modal, Select } from 'antd';
import { useEffect } from 'react';

const { Option } = Select;

interface IProps {
  isModalVisible: boolean;
  onCancel?: () => void;
  handleUpdateUser?: (data: any) => void;
  onLoginClick: () => void;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function RegisterModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, handleUpdateUser, onLoginClick } = props;

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
          <h1 className="my-3 text-4xl font-bold">Đăng Ký</h1>
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
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm">
                Họ và tên
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Your full name"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm">
                Tên đăng nhập
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="hung@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block mb-2 text-sm">
                Số điện thoại
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="0123345698"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Mật khẩu
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="confirmPassword" className="text-sm">
                  Xác nhận mật khẩu
                </label>
              </div>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="button" className="w-full px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                Đăng Ký
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-coolGray-400">
              Đã có tài khoản?
              <a
                rel="noopener noreferrer"
                href="/"
                className="hover:underline dark:text-violet-400"
                onClick={(e) => {
                  e.preventDefault();
                  onLoginClick();
                }}
              >
                Đăng nhập
              </a>
              .
            </p>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
