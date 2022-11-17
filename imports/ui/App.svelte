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

<div class="app">
  <header>
    <h1>IIDX Songs</h1>
    {#if user}
      <button on:click={logout}>Log Out</button>
    {:else}
      <LoginForm />
    {/if}
  </header>
  {#if user}
      <div class="main">
        <SongForm user={user} sections={sections} />

        <!-- TODO: make sections dynamic -->
        <div>
          <h1>SONGS TO PRACTICE</h1>
          <SongsTable songs={songsToPractice} />
        </div>

        <div>
          <h1>SONGS CLOSE TO PASSING</h1>
          <SongsTable songs={songsCloseToPassing} />
        </div>

        <div>
          <h1>SONGS NOT NEAR PASSING</h1>
          <SongsTable songs={songsNotNearPassing} />
        </div>
      </div>
  {/if}
</div>
