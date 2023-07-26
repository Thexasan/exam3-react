import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value) => console.log(value);
const Searching = () => (
  <Space direction="vertical">
   
    <Search
      placeholder="Введите свой вопрос..."
      allowClear
      onSearch={onSearch}
      style={{
        maxWidth: 600,
        
      }}
    />
  </Space>
);
export default Searching;