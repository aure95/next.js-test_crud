

export default function ConnexionForm() {

	const connectData = async event => {
		event.preventDefault();
		const res = await fetch('/api/users/connexion', {
      body: JSON.stringify({
        mail: event.target.mail.value,
        password: event.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

	}

	return (
	<div>
	    <form onSubmit={connectData}>
	      <label>mail</label>
	      <input name="mail" type="text" autoComplete="mail" required />
	      <label>mot de passe</label>
	      <input  name="password" type="password" required />
	      <button type="submit">Connexion</button>
	      <button type="reset">Annuler</button>
	    </form>
    </div>
  )
	
}