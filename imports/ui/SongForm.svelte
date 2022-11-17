<script>
  import { SongsCollection } from '../api/SongsCollection'

  export let user = null
  export let sections = []

  let name = ''
  let level = ''
  let pass = true
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
    pass = true
    grade = ''
    notes = ''
    section = 1
  }
</script>

<form class="form-inline form-group" on:submit|preventDefault={handleSubmit}>
  <input class="form-control" type="text" name="name" placeholder="Song title" bind:value={name} />
  <input class="form-control" type="text" name="level" placeholder="Level" bind:value={level} />
  <select class="form-control" id="pass" name="pass" bind:value={pass}>
    <option value={true}>Pass</option>
    <option value={false}>Fail</option>
  </select>
  <input class="form-control" type="text" name="grade" placeholder="Grade" bind:value={grade} />
  <input class="form-control" type="text" name="notes" placeholder="Notes" bind:value={notes} />
  <select class="form-control" id="section" name="section" bind:value={section}>
    { #each sections as section(section._id) }
      <option value={section.order}>{ section.title }</option>
    { /each }
  </select>
  <button class="btn btn-default" type="submit">Add Record</button>
</form>