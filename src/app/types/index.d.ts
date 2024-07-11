declare module '*.jpg'
declare module '*.png'

declare type RootState = ReturnType<typeof import('../providers/store').store.getState>
declare type AppDispatch = typeof import('../providers/store').store.dispatch