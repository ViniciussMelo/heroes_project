import { Service } from "./Service";

class HeroesService extends Service {
    constructor(){
        super('/heroes');
    }
}

export default new HeroesService();