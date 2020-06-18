/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable */

export default class User extends Resource {
  @field(new MongoId()) _id: string;
  @field(new Word(3, 16)) username: string;
  @field(new Email(true)) email: string;
  @field(new Text(), PRV) password: string;

  @expose("GET /:_id")
  @schema(User.schema.select("_id"))
  static async find({ _id }) {
    const document = await collection.findById({ _id });
    if (!document) {
      return State.NOT_FOUND();
    }
    return User.restore(document.toObject());
  }

  @expose("POST /")
  @schema(
    User.schema.exclude("_id", "password").extend({ password: new Hash(6) })
  )
  static async register({ username, email, password }) {
    const document = await collection.create({ username, email, password });
    return User.create(document.toObject());
  }
}
