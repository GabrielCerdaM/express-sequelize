const express = require('express')
const { boomErrorHandle, errorHandle, logErrors } = require('./middlewares/handleError')

const serviceRouter = require('./routes/servicio.routes')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')
const { authenticateToken } = require('./middlewares/authenticateToken')

const app = express();

const port = 3000;
const router = express.Router();

app.use(express.json())
app.use('/api/v1', router)

router.use('/servicios', serviceRouter)

router.use('/users', userRouter)

router.use('/auth', authRouter)

app.use(logErrors)
app.use(boomErrorHandle);
app.use(errorHandle)

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
});
