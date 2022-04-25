import { Service } from "./Service";
import { api } from '../api/api';

export interface CompareHeroes {
	hero1: CompareHero;
	hero2: CompareHero;
}

export interface CompareHero {
	id: number;
	powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
}
export interface CompareResponseDto {
  message: string;
  winner: number;
}

class HeroesService extends Service {
	constructor(){
		super('/heroes');
	}

	async compare (payload: CompareHeroes): Promise<CompareResponseDto> {
		const { data } = await api.post(`${this.url}/compare`, payload);
		return data.data;
	}
}

export default new HeroesService();