<script>
  import SongForm from './SongForm.svelte'
  import LoginForm from './LoginForm.svelte'
  import SongsTable from './SongsTable.svelte'
  import { SectionsCollection } from '../api/SectionsCollection'
  import { SongsCollection } from '../api/SongsCollection'
  import { Meteor } from 'meteor/meteor'

  let user = null
  let sections = []
  let songsToPractice = []
  let songsCloseToPassing = []
  let songsNotNearPassing = []

  Meteor.subscribe('songs')
  Meteor.subscribe('sections')

  $m: {
    user = Meteor.user()

    if (user) {
      const songsFilter = (section) => ({ userId: user._id, section })
      sections = SectionsCollection.find({}).fetch()
      songsToPractice = SongsCollection.find(songsFilter(1), { sort: { createdAt: -1 } }).fetch()
      console.log(songsToPractice)
      songsCloseToPassing = SongsCollection.find(songsFilter(2), { sort: { createdAt: -1 } }).fetch()
      songsNotNearPassing = SongsCollection.find(songsFilter(3), { sort: { createdAt: -1 } }).fetch()
    }


  }

  const logout = () => Meteor.logout()
</script>

<div class="container">
  <div class="page-header container-fluid navbar-collapse row">
    <div class="navbar-left">
      <h1>Bemani Tracker</h1>
    </div>
    <div class="navbar-right navbar-form">
      {#if user}
        <button class="btn btn-default" on:click={logout}>Log Out</button>
      {:else}
        <LoginForm />
      {/if}
    </div>
  </div>
  {#if user}
      <div class="container-fluid">
        <SongForm user={user} sections={sections} />

        <!-- TODO: make sections dynamic -->
        <div>
          <h3>SONGS TO PRACTICE</h3>
          <SongsTable songs={songsToPractice} />
        </div>

        <div>
          <h3>SONGS CLOSE TO PASSING</h3>
          <SongsTable songs={songsCloseToPassing} />
        </div>

        <div>
          <h3>SONGS NOT NEAR PASSING</h3>
          <SongsTable songs={songsNotNearPassing} />
        </div>
      </div>
  {/if}
</div>
