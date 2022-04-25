import React, { useEffect } from "react";
import { Select, Typography, Button, Table } from 'antd';
import { VscRunAll } from "react-icons/vsc";

import HeroesService from "../../services/HeroesService";

const { Title } = Typography;
const { Option } = Select;

interface HeroInterface {
  id: number;
  name: string;
	images: {
    sm: string;
  };
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}

interface DataSourceInterface {
  key: number;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

const columns = [
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


const Game = () => {
  const [heroes, setHeroes] = React.useState<HeroInterface[]>([]);
  const [hero1, setHero1] = React.useState<number>();
  const [hero2, setHero2] = React.useState<number>();
  const [heroDataSource1, setHeroDataSource1] = React.useState<DataSourceInterface[]>([]);
  const [heroDataSource2, setHeroDataSource2] = React.useState<DataSourceInterface[]>([]);

  const loadHeroes = async () => {
    const { data } = await HeroesService.findAll();

    setHeroes(data);
  }

  const setValuesHero = (id: number, heroPos: number) => {
    const hero = heroes.find((hero) => hero.id === id);
    
    if (!hero) return

    const heroDataSource: DataSourceInterface = {
      key: hero.id,
      intelligence: hero.powerstats.intelligence,
      strength: hero.powerstats.strength,
      speed: hero.powerstats.speed,
      durability: hero.powerstats.durability,
      power: hero.powerstats.power,
      combat: hero.powerstats.combat
    }

    if (heroPos === 1) {
      setHeroDataSource1([heroDataSource]);
    } else {
      setHeroDataSource2([heroDataSource]);
    }
  }

  const setValuesHero1 = (value: any) => {
    setValuesHero(+value, 1);
  }

  const setValuesHero2 = (value: any) => {
    setValuesHero(+value, 2);
  }

  const compareHeroes = async () => {
    console.log('1: ', hero1);
    console.log('2: ', hero2);
  }

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Title>Hero Combat</Title>
      </div>
      <div style={{
        display: 'flex',
        marginTop: '100px'
      }}>
        <div
          style={{
            width: '80%',
            textAlign: 'center'
          }}
        >

          <Title>Hero 1</Title>
          <Select 
            defaultValue={heroes[0] ? heroes[0].id : null } 
            style={{ width: '80%' }}
            onChange={setValuesHero1}
          >
            {heroes.map(hero => (
              <Option key={hero.id}>{hero.name}</Option>
            ))}
          </Select>
          <div
            style={{
              marginTop: '15px'
          }}>
            {
              !!heroDataSource1.length &&
              (
                <Table 
                  dataSource={heroDataSource1} 
                  columns={columns}
                  pagination={false}
                />
              )
            }
          </div>
        </div>
        <div
          style={{
            width: '80%',
            textAlign: 'center'
          }}
        >
          <Title>Hero 2</Title>
          <Select 
            defaultValue={heroes[0] ? heroes[0].id : null } 
            style={{ width: '80%' }}
            onChange={setValuesHero2}
          >
            {heroes.map(hero => (
              <Option key={hero.id}>{hero.name}</Option>
            ))}
          </Select>
          <div
            style={{
              marginTop: '15px',
              marginLeft: '15px'
          }}>
            {
              !!heroDataSource2.length &&
              (
                <Table 
                  dataSource={heroDataSource2} 
                  columns={columns}
                  pagination={false}
                />
              )
            }
          </div>
        </div>
      </div>
      <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button 
            type="primary"
            icon={<VscRunAll />} 
            style={{
              marginTop: 30
            }}
            onClick={compareHeroes}
          >
            Fight
          </Button>
      </div>
    </>
  )
}

export default Game;