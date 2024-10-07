import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon, TabBarIcon2 } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#DF4058",
        tabBarInactiveTintColor: "#A0A0A0",
        tabBarStyle: {
          paddingTop: 12,
          paddingBottom: 12,
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
          height: 94,
        },

        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 9,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"search-outline"}
              color={color}
              style={undefined}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "WishList",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"heart-outline"}
              color={color}
              style={undefined}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon2 name={"airbnb"} color={color} style={undefined} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              style={undefined}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              style={undefined}
            />
          ),
        }}
      />
    </Tabs>
  );
}
