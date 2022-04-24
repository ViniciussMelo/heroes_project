import React, { useEffect, useState } from "react";

import 'antd/dist/antd.css';
import { Table } from "antd";
import { Link } from "react-router-dom";
import HeroesService from "../../services/HeroesService";

interface HeroInterface {
  id: number;
  name: string;
  slug: string;
}

const columns = [
  {
    title: 'Row',
    dataIndex: 'row',
    align: 'right' as const,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: any, record: any, index: any) => {
      return (        
        <Link to={`/hero/` + record.key}>{text}</Link>
      );
    },
  },
  {
    title: 'slug',
    dataIndex: 'slug',
  },
];

const Heros = () => {
  const [heroes, setHeroes] = useState<HeroInterface[]>([]);

  useEffect(() => {
    loadHeroes();
  }, []);

  const loadHeroes = async () => {
    const { data } = await HeroesService.findAll();
    const heroesFormatted = data.map((hero: HeroInterface, index: number) => {
      return (
        {
          key: hero.id,
          row: index,
          name: hero.name,
          slug: hero.slug,
        }
      )
    });

    setHeroes(heroesFormatted);
  }

  return (
    <>
      <Table 
        dataSource={heroes} 
        columns={columns}
        pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
      />;
    </>
  )
}

export default Heros;