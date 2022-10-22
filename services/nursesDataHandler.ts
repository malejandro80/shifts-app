/** @format */

const fs = require('fs')

let nurses = require('data/nurses.json')

export const nursesRepo = {
  getAll: () => nurses,
  getById: id => nurses.find(x => x.id.toString() === id.toString()),
  find: x => nurses.find(x),
  create,
  update,
  delete: _delete
}

function create(user) {
  // generate new user id
  user.id = nurses.length ? Math.max(...nurses.map(x => x.id)) + 1 : 1

  // set date created and updated
  user.dateCreated = new Date().toISOString()
  user.dateUpdated = new Date().toISOString()

  // add and save user
  nurses.push(user)
  saveData()
}

function update(id, params) {
  const user = nurses.find(x => x.id.toString() === id.toString())

  // set date updated
  user.dateUpdated = new Date().toISOString()

  // update and save
  Object.assign(user, params)
  saveData()
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted user and save
  nurses = nurses.filter(x => x.id.toString() !== id.toString())
  saveData()
}

// private helper functions

function saveData() {
  fs.writeFileSync('data/nurses.json', JSON.stringify(nurses, null, 4))
}
