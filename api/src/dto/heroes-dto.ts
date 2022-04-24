export class GetHeroesDto implements Readonly<GetHeroesDto> {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence:number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }

  public static from(dto: Partial<GetHeroesDto>) {
    const it = new GetHeroesDto();
    Object.assign(it, dto);
    return it;
  }

  public static fromEntity(entity: GetHeroesDto) {
    return this.from({
      id: entity.id,
      name: entity.name,
      slug: entity.slug,
      powerstats: {
        intelligence: entity.powerstats.intelligence,
        strength: entity.powerstats.strength,
        speed: entity.powerstats.speed,
        durability: entity.powerstats.durability,
        power: entity.powerstats.power,
        combat: entity.powerstats.combat,
      },
      images: {
        xs: entity.images.xs,
        sm: entity.images.sm,
        md: entity.images.md,
        lg: entity.images.lg,
      }
    });
  }
}