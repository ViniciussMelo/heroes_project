import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import 'antd/dist/antd.css';

import HeroesService from "../../services/HeroesService";
import { Table } from "antd";

interface HeroInterface {
  key: number;
  id: number;
  name: string;
  slug: string;
	images: {
    sm: string;
  };
  powerstats: {
    intelligence:number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}

interface DataSourceInterface {
  key: number;
  id: number;
  slug: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

const imageStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '80px',
  textAlign: 'center' as const,
  background: '#364d79',
  position: 'relative' as const,
  zIndex: 2
};

const h1Style = {
  fontSize: '2em',
  fontWeight: "bold"
}

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    align: 'right' as const,
  },
  {
    title: 'slug',
    dataIndex: 'slug',
  },
  {
    title: 'Intelligence',
    dataIndex: 'intelligence',
    align: 'right' as const,
  },
  {
    title: 'Strength',
    dataIndex: 'strength',
    align: 'right' as const,
  },
  {
    title: 'Speed',
    dataIndex: 'speed',
    align: 'right' as const,
  },
  {
    title: 'Durability',
    dataIndex: 'durability',
    align: 'right' as const,
  },
  {
    title: 'Power',
    dataIndex: 'power',
    align: 'right' as const,
  },
  {
    title: 'Combat',
    dataIndex: 'combat',
    align: 'right' as const,
  },
];

const Hero = () => {
  const { id } = useParams();
  const [hero, setHero] = useState<HeroInterface>({} as HeroInterface);
  const [dataSource, setDataSource] = useState<DataSourceInterface>({} as DataSourceInterface);

  useEffect(() => {
    loadHero(`${id}`);
  }, []);

  const loadHero = async (id: string) => {
    const { data } = await HeroesService.find(+id);

    setHero(data);
    setDataSource({
      key: data.id,
      id: data.id,
      slug: data.slug,
      intelligence: data.powerstats.intelligence,
      strength: data.powerstats.strength,
      speed: data.powerstats.speed,
      durability: data.powerstats.durability,
      power: data.powerstats.power,
      combat: data.powerstats.combat,
    })
  }

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: "center"
      }}>
        <div>
          <h1 style={h1Style}>{hero.name}</h1>
          <img style={imageStyle} src={hero.images ? hero.images.sm : '' } id="firstMovie" alt="firstMovie"/>
        </div>
        <div style={{
          marginLeft: '100px',
          width: '100vh'
        }}>
          <Table 
            dataSource={[dataSource]} 
            columns={columns}
            pagination={false}
          />
        </div>
      </div>
    </>
  )
}

export default Hero;