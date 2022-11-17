<script>
  import SongForm from './SongForm.svelte'
  import LoginForm from './LoginForm.svelte'
  import SongsTable from './SongsTable.svelte'
  import { SectionsCollection } from '../api/SongsCollection'
  import { SongsCollection } from '../api/SongsCollection'
  import { Meteor } from 'meteor/meteor'

  let user = null
  let sections = []
  let songsToPractice = []
  let songsCloseToPassing = []
  let songsNotNearPassing = []

  let isLoading = true
  const handler = Meteor.subscribe('songs')
  Meteor.subscribe('sections')

  $m: {
    user = Meteor.user()

    if (user) {
      isLoading = !handler.ready()

      const songsFilter = (sectionId) => { userId: user._id, sectionId }
      songs = SongsCollection.find(userFilter, { sort: { createdAt: -1 } }).fetch()
      sections = SectionsCollection.find({}, { sort: { order: 1 } }).fetch()
      songsToPractice = SongsCollection.find(songsFilter(1), { sort: { createdAt: -1 } }).fetch()
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
    {#if isLoading}
      <div class="loading">loading...</div>
    {:else}
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
  {/if}
</div>
