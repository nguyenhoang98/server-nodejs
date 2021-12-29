import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

function NotFound(props) {
  return (
    <div>
      <Result
        title='Không tìm thấy trang này'
        extra={
          <Button type='primary' key='console'>
            <Link to='/'>Quay lại trang chủ</Link>
          </Button>
        }
      />
    </div>
  );
}

export default NotFound;
