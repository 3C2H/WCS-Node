const express = require('express')
const bodyParser = require('body-parser')

const router = express()

router.use(bodyParser.urlencoded({ extended: true }))

router.listen(3000, err => {
if (err) {
console.log(err)
return
}
console.log('connect on 3000')
})

router.get('/forms-:numeroForm(\\d+)', (req, res) => res.end() );

router.post('/forms-:numeroForm(\\d+)', (req, res) => {
   res.send(req.body.username)
   console.log(req.params.numeroForm)
   console.log(req.query.level)
   console.log(req.body.username)
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
