import {Router} from 'express'
import {getDoctor} from '../controllers'

const router = Router()

router.get('/doctor', getDoctor);

export default router