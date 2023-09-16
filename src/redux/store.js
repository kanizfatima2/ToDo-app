import { configureStore } from "@reduxjs/toolkit";
import { boardService } from "./features/boardService";

export const store = configureStore({
  reducer: {
    [boardService.reducerPath]: boardService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boardService.middleware),
});
