import { Button } from "@react-navigation/elements";
import { View } from "react-native";

import { useTheme } from "@/contexts/ThemeProvider";
import { Text } from "@/ui/Text";

export default function Index() {
  const { setMode, resolvedTheme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Resolved theme: {resolvedTheme}</Text>
      <Button variant="filled" onPress={() => setMode("light")}>
        Light
      </Button>
      <Button variant="tinted" onPress={() => setMode("dark")}>
        Dark
      </Button>
      <Button variant="plain" onPress={() => setMode("system")}>
        System
      </Button>
    </View>
  );
}
