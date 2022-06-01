import { Button, Form, Input, Modal, Select } from 'antd';
import { useEffect, useRef, useState } from 'react';

import { AuthApi } from 'apis/authApi';
import { EyeOutlined } from '@ant-design/icons';
import { ILoginVars } from '../../types';
import notification from 'utils/notification';
import { useUser } from 'context/userContext';
import { useForm } from 'antd/lib/form/Form';

const { Option } = Select;

interface IProps {
  isModalVisible: boolean;
  onCancel: () => void;

  onRegisterClick: () => void;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function LoginModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, onRegisterClick } = props;
  const { setUser } = useUser();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [form] = useForm();
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const handleChangeUsername = (e: any) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const handleChangPassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const onSubmitLogin = async (e: any) => {
    const data: ILoginVars = {
      username,
      password,
    };
    AuthApi.login(data)
      .then(({ data }) => {
        const { token, user } = data;
        localStorage.setItem('token', token);
        form.resetFields();
        onCancel();
        setUser(user);
        notification('success', 'Đăng nhập thành công');
      })
      .catch((error: any) => {
        notification('error', error.response?.data?.message[0]);
      });
  };
  return (
    <Modal
      visible={isModalVisible}
      onCancel={onCancel}
      footer={null}
      className="rounded-2xl"
      style={{ borderRadius: '20px' }}
    >
      <div className="flex flex-col m-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Đăng Nhập</h1>
          {/* <p className="text-sm dark:text-coolGray-400">Sign in to access your account</p> */}
        </div>
        <Form
          form={form}
          name="role_based_auth"
          layout="horizontal"
          onFinish={onSubmitLogin}
          className="space-y-12 ng-untouched ng-pristine ng-valid"
          ref={formRef}
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
                required
                value={username}
                onChange={handleChangeUsername}
                className="w-full px-3 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                id="username"
              />
            </Form.Item>

            <Form.Item name="password" label="Mật khẩu" htmlFor="pasword" className="my-4">
              <Input
                required
                value={password}
                onChange={handleChangPassword}
                type={'password'}
                className="w-full px-3 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
                id="password"
              />
            </Form.Item>

            <Form.Item className="flex justify-center mt-4">
              <div>
                <button
                  type="submit"
                  className="w-full mt-4 mb-2 px-2 py-2 rounded-md dark:bg-violet-400 dark:text-coolGray-900 border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
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
