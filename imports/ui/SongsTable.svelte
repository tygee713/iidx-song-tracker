<script>
  import Song from './Song.svelte'

  export let songs
</script>

<div class="table-responsive">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Song title</th>
        <th>Level</th>
        <th>Clear</th>
        <th>Grade</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      { #each songs as song(song._id) }
        <Song song={song} />
      { /each }
    </tbody>
  </table>
</div>