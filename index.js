const express = require('express')
const { boomErrorHandle, errorHandle, logErrors } = require('./middlewares/handleError')

const serviceRouter = require('./routes/services.routes')
const clientRouter = require('./routes/client.routes')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')
const urnRouter = require('./routes/urn.routes')
const config = require('./config/env.config')

const app = express();

const port = config.port;

const router = express.Router();

app.use(express.json())

app.use('/api/v1', router)

router.use('/auth', authRouter)

router.use('/users', userRouter)

router.use('/urns', urnRouter)

// router.use('/services', serviceRouter)

// router.use('/client', clientRouter)


app.use(logErrors)
app.use(boomErrorHandle);
app.use(errorHandle)

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
});
