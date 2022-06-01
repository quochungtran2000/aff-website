import { Button, Form, Input, Modal, Select } from 'antd';
import { useEffect, useState } from 'react';

import { AuthApi } from 'apis/authApi';
import { UserInput } from 'types';
import notification from 'utils/notification';

interface IProps {
  isModalVisible: boolean;
  onCancel: () => void;
  handleUpdateUser?: (data: any) => void;
  onLoginClick: () => void;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function RegisterModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, handleUpdateUser, onLoginClick } = props;
  const [username, setUserName] = useState<string>('');
  const [fullname, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const handleChangeUserName = (e: any) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const handleChangeFullName = (e: any) => {
    e.preventDefault();
    setFullName(e.target.value);
  };
  const handleChangeEmail = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e: any) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };
  const handleChangePhoneNumber = (e: any) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };

  const submitResigner = async (e: any) => {
    console.log(1);
    if (password !== confirmPassword) {
      return notification('error', 'Mật khẩu không khớp');
    }
    const data: UserInput = {
      fullname,
      email,
      phoneNumber,
      username,
      password,
    };
    console.log(data);
    AuthApi.register(data)
      .then(({ data }) => {
        form.resetFields();
        onCancel();
        notification('success', 'Đăng kí thành công');
        onLoginClick();
      })
      .then((error: any) => {
        console.log(error.response.data);
        notification('error', error.response?.data?.message[0]);
      });
  };

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [form]);

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
          onFinish={submitResigner}
          className="space-y-12 ng-untouched ng-pristine ng-valid"
          {...formLayout}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm">
                Họ và tên
              </label>
              <input
                required
                onChange={handleChangeFullName}
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
                required
                onChange={handleChangeUserName}
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
                required
                onChange={handleChangeEmail}
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
                required
                onChange={handleChangePhoneNumber}
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
                required
                onChange={handleChangePassword}
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
                onChange={handleChangeConfirmPassword}
                required
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
              <button
                type="submit"
                className="w-full border-2 border-orange-900 hover:bg-orange-900 hover:text-white transition-all duration-500 px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900"
              >
                Đăng Ký
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-coolGray-400">
              Đã có tài khoản?
              <a
                rel="noopener noreferrer"
                href="/"
                className="hover:underline text-blue-600 dark:text-violet-400"
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
