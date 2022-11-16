import { Meteor } from 'meteor/meteor'
import { SongsCollection } from '/imports/api/SongsCollection'

const addSong = songName => SongsCollection.insert({ title: songName })

Meteor.startup(() => {
  if (SongsCollection.find().count() === 0) {
    [
      'One More Lovely',
      'Fire Fire',
      'Sakura Storm',
    ].forEach(addSong)
  }
})