class Certificate {
  constructor (inputValue,box)
  {
    this._liContent = inputValue
    this._checked = box
  }

  get liContent() {
    return this._liContent
  }
  get checked() {
    return this._checked
  }
}