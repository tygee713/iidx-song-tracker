import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { SectionsCollection } from './SectionsCollection'
import { SongsCollection } from './SongsCollection'
 
Meteor.methods({
  'songs.insert'(song) {
    check(text, String)
 
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.')
    }
 
    const { name, level, pass, grade, notes, sectionId } = song
    SongsCollection.insert({
      name,
      level,
      pass,
      grade,
      notes,
      sectionId,
      userId: this.userId,
      createdAt: new Date(),
    })
  },
 
  // TODO: remove and update functionality
  // 'songs.remove'(songId) {
  //   check(taskId, String);
 
  //   if (!this.userId) {
  //     throw new Meteor.Error('Not authorized.');
  //   }
 
  //   SongsCollection.remove(songId);
  // },

  // SongsCollection.update(songId, {
  //   $set: {
  //     isChecked
  //   }
  // });
 
  // TODO: use when sections are made dynamic
  // 'sections.insert'(title, order) {
  //   check(title, String)
  //   check(order, Number)
 
  //   if (!this.userId) {
  //     throw new Meteor.Error('Not authorized.');
  //   }
 
  //   SectionsCollection.insert({
  //     title,
  //     userId: this.userId,
  //     order,
  //     createdAt: new Date(),
  //   })
  // }
});