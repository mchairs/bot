import mongoose from 'mongoose';

let UserSchema = mongoose.Schema({

}, {
  // I am not sure what yet composes a 'User'
  strict: false
});

export default mongoose.model('User', UserSchema);
