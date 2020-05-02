import React, { Component } from "react";
import { Container, Button, Text, View } from "native-base";

import { StyleSheet } from "react-native";

interface Props {}

export default (props: Props) => {
  return (
    <View style={styles.all}>
      <View style={styles.container}>
        <View style={styles.emptyHeader}></View>
        <View style={styles.body}>
          <View>
            <View style={styles.appTitleView}>
              <Text style={styles.appTitleLarge}>POSAH |</Text>
              <Text style={styles.appTitleSmall}>Remittance</Text>
            </View>
          </View>
          <View>
            <Text style={styles.appDetail}>Send money to Cameroon.</Text>
            <Text style={styles.appDetail2}>Send to Mobile Money.</Text>
            <Text style={styles.appDetail2}>Fast. Cheap.</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{ marginLeft: 150 }}></View>
          <Button transparent>
            <Text style={{ fontWeight: "bold", color: "blue" }}>
              Get started
            </Text>
          </Button>
          <Button primary rounded bordered style={{ backgroundColor: "white" }}>
            <Text style={{ fontWeight: "bold", color: "blue" }}>Sign in</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "white",
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
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    fontWeight: "bold",
    color: "blue",
  },
  appTitleSmall: {
    fontSize: 30,
    fontFamily: "Legal Std Bold",
    marginLeft: 10,
    color: "blue",
  },
  appDetail: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 30,
    color: "blue",
  },
  appDetail2: {
    fontSize: 23,
    fontFamily: "Legal Std Bold",
    marginTop: 10,
    color: "blue",
  },
  appTitleView: {
    flexDirection: "row",
  },
});
