import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { SectionsCollection } from '../imports/api/SectionsCollection'
import '/imports/api/dbMethods'
import '/imports/api/dbPublications'

const SEED_USERNAME = 'meteorite'
const SEED_PASSWORD = 'password'

Meteor.startup(() => {
  if (SectionsCollection.find().count() === 0) {
    SectionsCollection.insert({ title: 'Songs to practice', order: 1 })
    SectionsCollection.insert({ title: 'Songs close to passing', order: 2 })
    SectionsCollection.insert({ title: 'Songs not near passing', order: 3 })
  }

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    })
  }
})