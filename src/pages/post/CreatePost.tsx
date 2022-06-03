import MainLayout from 'components/Layout';
import { Editor } from '@tinymce/tinymce-react';
import { Form, Input, Upload, message, Select, Button } from 'antd';
import type { UploadProps } from 'antd/es/upload/interface';
import { useEffect, useRef, useState } from 'react';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import notification from 'utils/notification';
import postApi from 'apis/postApi';
import { useForm } from 'antd/lib/form/Form';
const { Option } = Select;

const { Dragger } = Upload;

export default function CreatePostPage() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [content, setContent] = useState<string>();
  const [form] = useForm();
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) form.resetFields();
  }, [form]);

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    action: 'http://localhost:3333/api/v1/website/user/upload',
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        console.log(`done`, info.file);
        setImageUrl(info?.file?.response?.url);
        message.success(`${info.file.name} file uploaded successfully.`);
      }
    },
  };

  const onContentChange = (e: any) => {
    console.log(e);
    setContent(e.target.getContent());
  };

  const onFinish = (values: { postTitle: string; postType: string }) => {
    if (!imageUrl) return notification('error', 'Vui lòng cập nhật hình hiển thị');
    if (!content) return notification('error', 'Vui lòng nhập nội dung cho bài viết');
    const data = { ...values, postThumbnail: imageUrl, postContent: content };
    console.log('Received values of form: ', data);

    setLoading(true);
    postApi
      .createPost(data)
      .then(() => {
        notification('success', 'Đăng bài thành công');
        form.resetFields();
      })
      .catch((error) => notification('error', error.response?.data?.message[0]))
      .finally(() => setLoading(false));
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-4 py-6">
        <div className="col-start-3 col-span-8 bg-dark">
          <div className="space-y-2 pt-4">
            <h5 className="font-bold leading-tight text-center">Đăng bài</h5>
          </div>
          <section className="px-6">
            <Form className="px-8" layout="vertical" onFinish={onFinish} ref={formRef} form={form}>
              <Form.Item label=" Ảnh hiển thị" className="overflow-hidden">
                {!imageUrl && (
                  <Dragger {...props} id="thumbnail">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                      files
                    </p>
                  </Dragger>
                )}
                {imageUrl && (
                  <div className="col-span-full relative">
                    <img className="object-cover w-full h-90" id="thumbnail" src={imageUrl} />
                    <DeleteOutlined
                      onClick={() => setImageUrl('')}
                      className="absolute top-0 right-0 p-4 rounded-lg shadow-md"
                      style={{
                        color: 'red',
                        transform: 'translate(50%, -50%)',
                        background: 'white',
                        borderRadius: '50%',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                )}
              </Form.Item>
              <Form.Item
                name="postTitle"
                label="Tiêu đề"
                required={true}
                rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}
              >
                <Input placeholder="Vui lòng nhập tiêu đề" />
              </Form.Item>
              <Form.Item name="postType" label="Loại bài viết" required={true} rules={[{ required: true }]}>
                <Select placeholder="Vui lòng chọn loại bài viết">
                  <Option value="tips">Mẹo</Option>
                  <Option value="review">Trải nghiệm</Option>
                  <Option value="top-product">Sản phẩm nên mua</Option>
                </Select>
              </Form.Item>
              <div className="col-span-full">
                <label htmlFor="content" className="text-sm my-2">
                  Nội dung
                </label>

                <Editor
                  apiKey="edo5b4uc9kw0yj7i293rb3ikb9gb8ckgc96uitnlnryf6835"
                  id="content"
                  initialValue=""
                  onChange={onContentChange}
                />
              </div>
              <Form.Item className="text-center m-4">
                <Button htmlType="submit" type="text" className="bg-white">
                  Đăng bài
                </Button>
              </Form.Item>
            </Form>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
