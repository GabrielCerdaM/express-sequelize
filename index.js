const express = require('express')
const { boomErrorHandle, errorHandle, logErrors } = require('./middlewares/handleError')
const serviceRouter = require('./routes/services.routes')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')

const app = express();

const port = 3000;

const router = express.Router();

app.use(express.json())

app.use('/api/v1', router)

router.use('/auth', authRouter)

router.use('/users', userRouter)

router.use('/services', serviceRouter)

// router.use('/',UrnRouter)

app.use(logErrors)
app.use(boomErrorHandle);
app.use(errorHandle)

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
});
