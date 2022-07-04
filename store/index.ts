import {configureStore} from '@reduxjs/toolkit'
import CommonReducer from './common'
export const store = configureStore({
    reducer:{
      common:CommonReducer
    }
})


export type RootState = ReturnType<typeof store.getState>