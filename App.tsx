import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, } from "@gluestack-ui/themed";

import { NavigationContainer } from "@react-navigation/native";
import MainStacks from "./navigation/stacks/MainStacks";

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <MainStacks />
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
