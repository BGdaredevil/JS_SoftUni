const { assert } = require("chai");
let { Repository } = require("../solution.js");

describe("Tests …", function () {
  let repository = "";
  let properties = "";
  let entity = "";
  let entity2 = "";
  let entity3 = "";

  beforeEach(() => {
    properties = {
      name: "string",
      age: "number",
      birthday: "object",
    };
    repository = new Repository(properties);
    entity = { name: "stamat", age: 5, birthday: new Date(1998, 0, 7) };
    entity2 = { name: "stamat2", age: 5, birthday: new Date(1998, 0, 7) };
    entity3 = { name: "stamat3", age: 5, birthday: new Date(1998, 0, 7) };
  });
  it("Getter works", () => {
    assert.equal(repository.count, 0);
  });
  it("add, adds correct", () => {
    assert.equal(repository.add(entity), 0);
    assert.equal(repository.add(entity2), 1);
    assert.equal(repository.add(entity3), 2);
  });
  it("add throws", () => {
    let damaged = { namea: "stamat", age: 5, birthday: new Date(1998, 0, 7) };
    let damaged2 = {
      name: "stamat",
      age: "a",
      birthday: new Date(1998, 0, 7),
    };
    assert.throws(() => {
      repository.add(damaged);
    }, "Property name is missing from the entity!");
    assert.throws(() => {
      repository.add(damaged2);
    }, "Property age is not of correct type!");
  });
  it("Get ID should throw", () => {
    assert.throws(() => {
      repository.getId(5);
    }, "Entity with id: 5 does not exist!");
  });
  it("Get gets fine", () => {
    repository.add(entity);
    repository.add(entity2);
    repository.add(entity3);
    assert.deepEqual(repository.getId(0), entity);
    assert.deepEqual(repository.getId(1), entity2);
    assert.deepEqual(repository.getId(2), entity3);
  });
  it("Update updates fine", () => {
    let ok = { name: "pesho", age: 5, birthday: new Date(1998, 0, 7) };
    repository.add(entity);
    repository.add(entity2);
    repository.add(entity3);
    repository.update(1, ok);
    assert.deepEqual(repository.getId(0), entity);
    assert.deepEqual(repository.getId(1), ok);
    assert.deepEqual(repository.getId(2), entity3);
  });
  it("Update throws fine", () => {
    let ok = { name: "pesho", age: 5, birthday: new Date(1998, 0, 7) };
    let notOk = { name1: "pesho", age: 5, birthday: new Date(1998, 0, 7) };
    let dmg = { name: "pesho", age: "a", birthday: new Date(1998, 0, 7) };
    repository.add(entity);
    repository.add(entity2);
    repository.add(entity3);
    assert.throws(() => {
      repository.update(5, ok);
    }, "Entity with id: 5 does not exist!");
    assert.throws(() => {
      repository.update(1, notOk);
    }, "Property name is missing from the entity!");
    assert.throws(() => {
      repository.update(1, dmg);
    }, "Property age is not of correct type!");
  });
  it("Delete throws", () => {
    repository.add(entity);
    repository.add(entity2);
    repository.add(entity3);
    assert.throws(() => {
      repository.del(5);
    }, "Entity with id: 5 does not exist!");
  });
  it("Delete Deletes fine", () => {
    repository.add(entity);
    repository.add(entity2);
    repository.add(entity3);
    repository.del(1);
    assert.equal(repository.data.size, 2);
    assert.deepEqual(repository.getId(0), entity);
    assert.deepEqual(repository.getId(2), entity3);
  });
});
