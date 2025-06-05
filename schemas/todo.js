const Comment = new Schema({
  name: { type: String, default: 'taks' },
  userId: { type: String, require: true },
  details: { type: String},
  date: { type: Date, default: Date.now }
});