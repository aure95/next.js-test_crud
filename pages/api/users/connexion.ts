export default function handler(req, res) {
	const mail = req.body.mail;
	const password = req.body.password;
	console.log(mail);
	console.log(password);
	res.status(200).send('OK');
}