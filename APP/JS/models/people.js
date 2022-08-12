class People {
  constructor(
    fullName,
    nickName,
    email,
    phone,
    birthday,
    age,
    linkedin,
    github,
    certificates,
    teamName,
    institution,
    graduation
  ) {
    (this._name = fullName),
    (this._nickName = nickName),
    (this._email = email),
    (this._phone = phone),
    (this._birthday = birthday),
    (this._age = age),
    (this._social = [linkedin, github]),
    (this._certificates = certificates),
    (this._teamName = teamName),
    (this._institution = institution),
    (this._graduation = graduation)
  }
  get name() {
    return this._name
  }
  get email() {
    return this._email
  }
  get phone() {
    return this._phone
  }
  get birthday() {
    return this._birthday
  }
  get age() {
    return this._age
  }
  get social() {
    return this._social
  }
  certificates(item) {
    return this._certificates[item]
  }
  get teamName() {
    return this._teamName
  }
  get institution() {
    return this._institution
  }
  get graduation() {
    return this._graduation
  }
}
