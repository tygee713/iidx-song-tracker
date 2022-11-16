<script>
  import { SongsCollection } from '../api/SongsCollection'

  let newSong = ''

  const handleSubmit = () => {
    SongsCollection.insert({
      title: newSong,
      createdAt: new Date(),
    })

    newSong = ''
  }
</script>

<form class="song-form" on:submit|preventDefault={handleSubmit}>
  <input type="text" name="title" placeholder="Enter song name" bind:value={newSong} />
  <button type="submit">Add Song</button>
</form>