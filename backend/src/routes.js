export default (app) => {
    app.get('/alive', (req, res) => {
        res.send('Hello world')
    })
}