import loadable from "@loadable/component"

import Child1 from './Child1'
import Modal from './Modal'
import Child2 from './Child2'
import Child3 from './Child3'

const TestRouter = loadable(()=>import('./TestRouter'))


export {
    Child1,
    Modal,
    Child2,
    Child3,
    TestRouter
}