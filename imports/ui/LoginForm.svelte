<script>
  import { Meteor } from 'meteor/meteor'

  let username = ''
  let password = ''

  const handleSubmit = () => {
    Meteor.loginWithPassword(username, password)
  }
</script>

<form class="form-group navbar-form" on:submit|preventDefault={handleSubmit}>
    <input class="form-control" type="text" placeholder="Username" name="username" required bind:value={username} />
    <input class="form-control" type="text" placeholder="Password" name="password" required bind:value={password} />
    <button class="btn btn-default" type="submit">Log In</button>
</form>