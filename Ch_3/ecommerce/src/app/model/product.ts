export class Product {

  description: string;
  quantity: number;

  // TODO: See if ImageBitmaps (or any) can be made static for application rather than just passed in as argument
  // TODO: Make Cart model to hold list of Product objects
  constructor(public name: string, public price: number, public imageUrl: string, public onSale: boolean) {
    this.description = "Quam accumsan dui facilisi imperdiet class quis mollis. Quisque semper accumsan cursus quisque semper sed tortor dolor. " +
      "Fusce varius quam in commodo potenti lacinia lobortis. Nisi lorem enim potenti egestas aliquet. Orci cubilia neque; viverra netus nisl conubia. " +
      "In ridiculus donec eget conubia lobortis facilisi? Praesent quisque cras morbi id ultricies ligula tincidunt " +
      "potenti. Ad convallis amet nulla purus nullam placerat vivamus."
    this.quantity = 0;
  }
}
