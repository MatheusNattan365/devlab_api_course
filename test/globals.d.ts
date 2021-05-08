declare namespace NodeJS {
  interface Global {
    testRequest: import("supertest").SuperTest<import("supertest").Test>;
  }
}

// imports inlines para sobreescrever o estado global "!important"
