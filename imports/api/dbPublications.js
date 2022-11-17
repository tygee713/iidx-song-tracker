import { Meteor } from 'meteor/meteor'
import { SongsCollection } from './SongsCollection'
import { SectionsCollection } from './SectionsCollection'

Meteor.publish('Songs', function publishSongs() {
  return SongsCollection.find({ userId: this.userId })
});

Meteor.publish('Sections', () => SectionsCollection.find({}))