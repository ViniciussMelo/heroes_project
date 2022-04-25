import { Request, Response } from "express";
import axios from "axios";

import { CompareHeroDto, GetHeroesDto } from "../dto/heroes-dto";

const BASE_URL = "https://akabab.github.io/superhero-api/api";

interface CompareResponseDto {
  message: string;
  winner: number;
}

class HeroesController {

  async index(request: Request, response: Response) {
    const heroes = await axios(`${BASE_URL}/all.json`);

    const heroDto = heroes.data.map((hero: any) => {
      return GetHeroesDto.fromEntity(hero)
    });

    return response.json(heroDto);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const { data } = await axios(`${BASE_URL}/id/${id}.json`);
  
      const hero = GetHeroesDto.fromEntity(data);
  
      return response.json(hero);
    } catch (err) {
      return response.status(400).json({
        error: 'Error when get hero by id'
      })
    }
  }

  compare(request: Request, response: Response) {
    const { hero1, hero2 } = request.body;
    const formattedHero1 = hero1 as CompareHeroDto;
    const formattedHero2 = hero2 as CompareHeroDto;
    const data: CompareResponseDto = {
      message: 'Draw! Both have the same attributes!',
      winner: 0
    };

    if (formattedHero1.id !== formattedHero2.id) {
      const sumHeroStats = (hero: CompareHeroDto): Number => {
        let sumHero  = 0;
    
        sumHero += +hero.powerstats.combat || 0;
        sumHero += +hero.powerstats.durability || 0;
        sumHero += +hero.powerstats.intelligence || 0;
        sumHero += +hero.powerstats.power || 0;
        sumHero += +hero.powerstats.speed || 0;
        sumHero += +hero.powerstats.strength || 0;
    
        return sumHero;
      }

      const sumHero1  = sumHeroStats(formattedHero1);
      const sumHero2  = sumHeroStats(formattedHero2);

      if (sumHero1 > sumHero2) {
        data.message = 'Hero 1 Win! The hero 1 has better attributes!';
        data.winner = 1;
      } else if (sumHero2 > sumHero1) {
        data.message = 'Hero 2 Win! The hero 2 has better attributes!';
        data.winner = 2;
      }
    }

    return response.json({ data });
  }
}

export default HeroesController;