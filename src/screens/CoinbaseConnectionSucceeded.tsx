import React, { Component, useEffect } from "react";
import { Container, Button, Text, View } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Linking, Alert, Platform } from "react-native";
//import navigation from "src/navigation";

import {
  useNavigation,
  useRoute,
  useFocusEffect,
  useNavigationState,
} from "@react-navigation/native";

interface Props {}

export default (props: Props) => {
  const navigation = useNavigation();
  // const route = useRoute();
  // const index = useNavigationState((state) => state.index);

  //

  ///
  return (
    <View style={styles.all}>
      <View style={styles.container}>
        <View style={styles.emptyHeader}></View>
        <View style={styles.body}>
          <View>
            <View style={styles.appTitleView}>
              <Text
                style={{
                  fontSize: 20,
                  fontStyle: "italic",
                  color: "white",
                }}
              >
                You have successfully authorized POSAH !
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          {/* <View style={{ marginLeft: 150 }}></View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "rgb(22, 82, 240)",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
  },
  emptyHeader: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 80,
  },
  appTitleLarge: {
    fontSize: 25,
    fontFamily: "Legal Std Bold",
    fontWeight: "bold",
    color: "white",
    // paddingLeft: 20,
    marginLeft: 20,
  },
  appTitleSmall: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    marginLeft: 10,
    color: "white",
  },
  appDetail: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 30,
    color: "white",
  },
  appDetail2: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 10,
    color: "white",
  },
  appTitleView: {
    flexDirection: "row",
  },
});
