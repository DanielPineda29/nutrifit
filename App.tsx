import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, } from "@gluestack-ui/themed";

import { NavigationContainer } from "@react-navigation/native";
import MainStacks from "./navigation/stacks/MainStacks";
import { Provider } from "react-redux";
import { store } from "./src/lib/Api/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <GluestackUIProvider config={config}>
        <MainStacks />
      </GluestackUIProvider>
    </NavigationContainer>
    </Provider>
  );
}
