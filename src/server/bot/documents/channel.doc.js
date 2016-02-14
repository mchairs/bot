import mongoose from 'mongoose';

let ChannelSchema = mongoose.Schema({

}, {
  // I am not sure what yet composes a 'Channel'
  strict: false
});

export default mongoose.model('Channel', ChannelSchema);
