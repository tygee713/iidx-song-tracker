import { Meteor } from 'meteor/meteor'
import { SongsCollection } from './SongsCollection'
import { SectionsCollection } from './SectionsCollection'

Meteor.publish('songs', function publishSongs() {
  return SongsCollection.find({ userId: this.userId })
});

Meteor.publish('sections', () => SectionsCollection.find({}))