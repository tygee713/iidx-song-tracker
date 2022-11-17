<script>
  export let song
</script>

<tr>
  <td>{ song.name }</td>
  <td>{ song.level }</td>
  <td>{ song.pass ? 'PASS' : 'FAIL' }</td>
  <td>{ song.grade }</td>
  <td>{ song.notes }</td>
</tr>