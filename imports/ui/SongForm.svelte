<script>
  import { SongsCollection } from '../api/SongsCollection'

  export let user = null
  export let sections = []

  let name = ''
  let level = ''
  let pass = false
  let grade = ''
  let notes = ''
  let section = 1

  const handleSubmit = () => {
    Meteor.call('songs.insert', {
      name,
      level,
      pass,
      grade,
      notes,
      section,
      userId: user._id,
      createdAt: new Date(),
    })

    name = ''
    level = ''
    pass = false
    grade = ''
    notes = ''
    section = 1
  }
</script>

<form class="song-form" on:submit|preventDefault={handleSubmit}>
  <input type="text" name="name" bind:value={name} />
  <input type="text" name="level" bind:value={level} />
  <input type="text" name="pass" bind:value={pass} />
  <input type="text" name="grade" bind:value={grade} />
  <input type="text" name="notes" bind:value={notes} />
  <select id="section" name="section" bind:value={section}>
    { #each sections as section(section._id) }
      <option value={section.order}>{ section.title }</option>
    { /each }
  </select>
  <button type="submit">Add Record</button>
</form>