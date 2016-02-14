import mongoose from 'mongoose';

let TeamSchema = mongoose.Schema({

}, {
  // I am not sure what yet composes a 'Team'
  strict: false
});

export default mongoose.model('Team', TeamSchema);
