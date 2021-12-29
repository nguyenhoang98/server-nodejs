import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Button, Card, Form, Input } from 'antd';

function Login(props) {
  const { login, state: dataState } = useContext(AuthContext);
  const { isLoading } = dataState;
  let navigate = useNavigate();
  const [formLogin] = Form.useForm();
  const onFinish = async () => {
    const data = formLogin.getFieldsValue();
    try {
      const result = await login(data);
      if (result.success) navigate('/');
    } catch (error) {}
  };
  return (
    <Card
      title='Đăng nhập'
      bordered={false}
      style={{ width: 450, margin: '20px auto' }}
    >
      <Form
        name='formLogin'
        form={formLogin}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label='Tài khoản'
          name='userName'
          rules={[{ required: true, message: 'Nhập thông tin bạn ơi' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Mật khẩu'
          name='password'
          rules={[{ required: true, message: 'Nhập thông tin bạn ơi' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Login;
