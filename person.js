export class Person {
  #picture;
  #name;
  #email;
  #location;
  #phone;
  #currentime;

  constructor(picture, name) {
      this.#picture = picture;
      this.#name = name;
  }

  get picture() {
      return this.#picture;
  }

  get name() {
      return this.#name;
  }

  get email() {
      return this.#email;
  }

  set email(value) {
      this.#email = value;
  }

  get phone() {
      return this.#phone;
  }

  set phone(value) {
      this.#phone = value;
  }

  get location() {
      return this.#location;
  }

  set location(value) {
      this.#location = value;
  }

  get currentime() {
      return this.#currentime;
  }

  set currentime(value) {
      this.#currentime = value;
  }
}