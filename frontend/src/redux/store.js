import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import rootSaga from "./sagas";

const SagaMiddleware = createSagaMiddleware();

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const configurestore = (preloadedState) =>
	createStore(
		reducer,
		preloadedState,
		composeEnhancers(applyMiddleware(SagaMiddleware))
	);

const store = configurestore({});

SagaMiddleware.run(rootSaga);

export default store;
