class Person {

}

class Member extends Person {
  access() {
    console.log('У тебя есть доступ!')
  }
}

class Guest extends Person {
  access() {
    console.log('У тебя нет доступа!')
  }
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBeckend() {}
}

class PersonFromDifferentCompany extends Guest {
  canCreateGuest() {}
}

function openSecretDoor(person) {
  person.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentCompany())