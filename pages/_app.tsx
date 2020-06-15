import "./_app.scss";

import { Provider } from "mobx-react";
import { useStore } from "../store";

export default function App({ Component, pageProps }) {
    // store 사용
	const store = useStore();

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
