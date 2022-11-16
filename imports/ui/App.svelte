<script>
  import Song from './Song.svelte'
  import SongForm from './SongForm.svelte'
  import { SongsCollection } from '../api/SongsCollection'

  $m: songs = SongsCollection.find({}, { sort: { createdAt: -1 } }).fetch()
</script>

<div class="container">
  <header>
    <h1>IIDX Songs</h1>
  </header>

  <SongForm />

  <ul>
    { #each songs as song(song._id) }
      <Song song={song} />
    { /each }
  </ul>
</div>
