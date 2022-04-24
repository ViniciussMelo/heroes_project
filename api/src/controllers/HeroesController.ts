import { Request, Response } from "express";
import axios from "axios";
import { GetHeroesDto } from "../dto/heroes-dto";

const BASE_URL = "https://akabab.github.io/superhero-api/api";

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
}

export default HeroesController;