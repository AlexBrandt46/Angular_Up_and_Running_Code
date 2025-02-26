export class Stock {
  favorite: boolean;

  // public keyword in constructor automatically creates properties of this name in TypeScript class
  constructor(public name: string,
    public code: string,
    public price: number,
    public previousPrice: number
  ) {
    this.favorite = false;
  }

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
