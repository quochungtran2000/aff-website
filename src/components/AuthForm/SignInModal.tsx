import { Button, Form, Input, Modal, Select } from 'antd';
import { useEffect } from 'react';

const { Option } = Select;

interface IProps {
  isModalVisible: boolean;
  onCancel: () => void;
  handleUpdateUser: (data: any) => void;
}

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function UserModal(props: IProps): JSX.Element {
  const { isModalVisible, onCancel, handleUpdateUser } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, []);

  return (
    <Modal title="Phân quyền user" visible={isModalVisible} onCancel={onCancel} footer={null}>
      <Form
        form={form}
        name="role_based_auth"
        onFinish={handleUpdateUser}
        className="bg-white p-2 gap-4 lg:w-90 md:w-90 sm:w-100"
        {...formLayout}
      >
        <Form.Item label="Mã nhân viên" name="id">
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

        <Form.Item label="Group" name="group">
          {/* <Select>
            {groups?.map((group) => (
              <Option key={group.name} value={group.name}>
                {group.title}
              </Option>
            ))}
          </Select> */}
        </Form.Item>

        <Form.Item className="flex items-center justify-center">
          <Button type="primary" htmlType="submit" className="bg-primary">
            CHỈNH SỬA
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
