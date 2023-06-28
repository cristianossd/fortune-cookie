import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const closedCookie = require('./assets/cookie.png');
const openedCookie = require('./assets/opened-cookie.png');

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const fortuneCookiePhrases = [
  'Don’t hold onto things that require a tight grip.',
  'I didn’t come this far to only come this far.',
  'Vulnerability sounds like faith and looks like courage.',
  'And into the forest I go, to lose my mind and find my soul.',
  'Do it scared.',
  "Look how far you've come.",
  'Sitting in silence with you is all the noise I need.',
  'Every good and perfect gift is from above.',
  'Be careful who you trust. Salt and sugar look the same.',
  'Little by little, one travels far.',
  'What good are wings, without the courage to fly.',
  'She lives the poetry she cannot write.',
  'If you want the rainbow, you gotta put up with the rain!',
];

export default function App() {
  const [fortunePhrase, setFortunePhrase] = useState('');
  const [isCookieOpened, setCookieOpened] = useState(false);

  const getFortunePhrase = () => {
    const phrase = fortuneCookiePhrases.random();
    setFortunePhrase(`"${phrase}"`);
    setCookieOpened(true);
  };

  const clear = () => {
    setFortunePhrase('');
    setCookieOpened(false);
  };

  return (
    <View style={styles.container}>
      {isCookieOpened ? (
        <Image style={styles.img} source={openedCookie} />
      ) : (
        <Image style={styles.img} source={closedCookie} />
      )}

      <Text style={styles.phrase}>{fortunePhrase}</Text>

      {isCookieOpened ? (
        <TouchableOpacity style={styles.btn} onPress={clear}>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>Clear</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={getFortunePhrase}>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>Break cookie!</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  phrase: {
    fontSize: 20,
    color: 'orange',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 25,
  },

  btnView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },

  img: {
    width: 250,
    height: 250,
  },
});
