import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Table,
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-disable no-template-curly-in-string */

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const columns = [
  {
    title: 'Row',
    dataIndex: 'row',
    align: 'right' as const,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
  {
    title: 'Class',
    dataIndex: 'heroClass',
  },
  {
    title: 'Breed',
    dataIndex: 'breed',
  },
  {
    title: 'Perform Tutorial',
    dataIndex: 'tutorial',
  },
];


interface CreateHeroInterface {
  name: string;
  city: string;
  heroClass: string;
  breed: string;
  tutorial: string;
}
interface HeroTableInterface extends CreateHeroInterface{
  row: number;
  key: number;
}

const CreateHero = () => {
  const [heroes, setHeroes] = useState<HeroTableInterface[]>([]);

  const onFinish = ({
    name,
    city,
    heroClass,
    breed,
    tutorial
  }: CreateHeroInterface) => {
    const row = heroes.length + 1
    setHeroes([
      ...heroes, 
      {
        row,
        key: row,
        name,
        city,
        heroClass,
        breed,
        tutorial
      }
    ]);
  };

  const downloadHeroesXlsx = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(heroes)));
    element.setAttribute('download', 'heroes.json');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <>
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}
          style={{
            marginTop: '50px'
          }}
          validateMessages={validateMessages}
        >
          <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={'city'} label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item 
            label="Class"
            name={'heroClass'}
            rules={[{ required: true, message: 'Class is required' }]}
          >
            <Select>
              <Select.Option value="warrior">Warrior</Select.Option>
              <Select.Option value="archer">Archer</Select.Option>
              <Select.Option value="mage">Mage</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item 
            label="Breed"
            name={'breed'}
            rules={[{ required: true, message: 'Breed is required' }]}
          >
            <Select>
              <Select.Option value="human">Human</Select.Option>
              <Select.Option value="god">God</Select.Option>
              <Select.Option value="planet">Planet</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item 
            label="Perform Tutorial"
            name={'tutorial'}
            rules={[{ required: true, message: 'Tutorial is required' }]}
          >
            <Select>
              <Select.Option value="yes">Yes</Select.Option>
              <Select.Option value="No">No</Select.Option>
            </Select>
          </Form.Item>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      <div>
        <Table 
          dataSource={heroes} 
          columns={columns}
          pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button 
            type="primary"
            icon={<DownloadOutlined />} 
            style={{
              marginTop: 30
            }}
            onClick={downloadHeroesXlsx}
          >
            Download
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateHero;