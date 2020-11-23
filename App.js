import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
// console.log(Constants.statusBarHeight);

const App = () => {
  return (
    <>
      <ScrollView style={[styles.barStatus, styles.container]}>
        {/*  défini le style de la bar avec l'heure et tout */}
        <View style={styles.body}>
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require("./assets/imdb.png")}
            ></Image>
          </View>
          <View style={styles.container1}>
            <View>
              <Text style={[styles.white, styles.h1]}>Interstellar</Text>
              <Text style={styles.white}>
                2014 PG-13 2h49 min Adventure, Drama, SCI-FI
              </Text>
            </View>

            <View style={styles.infoMoovie}>
              <View>
                <Image
                  style={styles.poster}
                  source={require("./assets/poster.jpg")}
                ></Image>
              </View>
              <View style={styles.infoText}>
                <Text style={[styles.white]}>
                  A team of explore travel throught a wormhole in space in an
                  attempt to ensure humanity's survival
                </Text>

                <TouchableOpacity>
                  <Text style={[styles.buttonAdd, styles.white]}>
                    {" "}
                    <Entypo
                      name="circle-with-plus"
                      size={24}
                      color="white"
                    />{" "}
                    ADD TO WATCHLIST
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.allInfoStars}>
              <View style={styles.star1}>
                <Entypo name="star" size={24} color="yellow" />
                <Text style={styles.white}>8,6/10</Text>
                <Text style={[styles.greyFin, styles.white]}>1,1M</Text>
              </View>
              <View style={styles.star2}>
                <Entypo name="star-outlined" size={24} color="white" />
                <Text style={styles.white}>RATE THIS</Text>
              </View>
              <View style={styles.star3}>
                <Text style={styles.white}>74</Text>
                <Text style={styles.white}>Métascore</Text>
                <Text style={[styles.greyFin, styles.white]}>
                  46 critics review
                </Text>
              </View>
            </View>
          </View>
          {/* ACTEURS */}
          <View style={styles.container2}>
            <Text style={[styles.white, styles.h2]}>Top Billed Cast</Text>
            <ScrollView horizontal={true}>
              <View style={styles.gallery}>
                <View>
                  <Image
                    style={styles.images}
                    source={require("./assets/acteur1.jpg")}
                  ></Image>
                  <Text style={styles.white}> Matthew McConaughey</Text>
                  <Text style={[styles.greyFin, styles.white]}>
                    Joseph Cooper
                  </Text>
                </View>
                <View>
                  <Image
                    style={styles.images}
                    source={require("./assets/acteur2.png")}
                  ></Image>
                  <Text style={styles.white}> Anne Hathaway</Text>
                  <Text style={[styles.greyFin, styles.white]}>
                    Amelia Brand
                  </Text>
                </View>
                <View>
                  <Image
                    style={styles.images}
                    source={require("./assets/acteur3.jpeg")}
                  ></Image>
                  <Text style={styles.white}> Jessica Chastain</Text>
                  <Text style={[styles.greyFin, styles.white]}>
                    Murphy Cooper
                  </Text>
                </View>
                <View style={styles.borderImages}>
                  <Image
                    style={styles.images}
                    source={require("./assets/acteur4.jpg")}
                  ></Image>
                  <Text style={styles.white}> Michael Caine</Text>
                  <Text style={[styles.greyFin, styles.white]}>
                    Proffesseur John Brand
                  </Text>
                </View>
                <View>
                  <Image
                    style={styles.images}
                    source={require("./assets/acteur5.jpg")}
                  ></Image>
                  <Text style={styles.white}> Mackenzie Foy</Text>
                  <Text style={[styles.greyFin, styles.white]}>
                    Murphy Cooper
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.director}>
              <Text style={[styles.white, styles.h2]}> Director</Text>
              <Text style={styles.white}>Christopher Nolan</Text>
              <Text style={[styles.white, styles.h2]}> Writters</Text>
              <Text style={styles.white}>
                Jonathan Nolan Says His Original Ending To 'Interstellar' Was
                “Much More Straightforward” | IndieWire
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default App;
// View =
const styles = StyleSheet.create({
  barStatus: {
    marginTop: Constants.statusBarHeight,
    // prend en compte la taille des encoches
  },
  container1: {
    backgroundColor: "#212121",
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20,
  },

  container2: {
    backgroundColor: "#212121",
    paddingLeft: 5,
    paddingRight: 5,
  },
  header: {
    height: 70,
    backgroundColor: "#393939",
  },
  logo: {
    marginTop: 12,
    height: 50,
    width: 150,
    resizeMode: "cover",
    borderRadius: 10,
    marginLeft: 5,
  },

  white: {
    color: "white",
  },
  greyFin: {
    fontSize: 10,
  },

  body: {
    backgroundColor: "black",
  },

  h1: {
    fontSize: 30,
  },

  h2: {
    fontSize: 20,
  },

  infoMoovie: {
    height: 300,

    flexDirection: "row",
  },
  poster: {
    width: 150,
    height: 250,
    resizeMode: "contain",
    flex: 1,
  },
  infoText: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  buttonAdd: {
    backgroundColor: "#0477BD",
    borderRadius: 5,
    textAlign: "center",
  },
  allInfoStars: {
    flexDirection: "row",
  },
  star1: {
    flex: 1,
  },

  star2: {
    flex: 1,
  },

  // GALLERIE PHOTOS

  images: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  gallery: {
    flex: 1,
    flexDirection: "row",
  },
  borderImages: {
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
  },

  // INFO WRITTER

  director: {
    paddingTop: 20,
  },
});
