<script>
  import Song from './Song.svelte'

  export let songs
</script>

<table class="songs">
  <thead>
    <tr>
      <th>SONG TITLE</th>
      <th>LEVEL</th>
      <th>PASS</th>
      <th>GRADE</th>
      <th>NOTES</th>
    </tr>
  </thead>
  <tbody>
    { #each songs as song(song._id) }
      <Song song={song} />
    { /each }
  </tbody>
</table>