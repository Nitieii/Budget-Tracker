import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

import PagerView from 'react-native-pager-view';

import {COLORS, FONTS, SIZES} from '~/constants';

import ARROW_LEFT from '~/assets/icons/chevron-left.svg';
import ARROW_RIGHT from '~/assets/icons/chevron-right.svg';

import {useDate} from '~/hooks';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Calendar = () => {
  const {date, setDate, setSearchMode} = useDate();
  const [activeDate, setActiveDate] = useState(new Date(date));
  const [year, setYear] = useState(activeDate.getFullYear());
  const [month, setMonth] = useState(activeDate.getMonth());

  const [firstDay, setFirstDay] = useState(new Date(year, month, 1).getDay());

  let maxDays = nDays[month];

  const changeDate = item => {
    if (!item.match && item != -1) {
      setActiveDate(new Date(activeDate.setDate(item)));
      setDate(new Date(activeDate.setDate(item)).getTime());
      setSearchMode(false);
    }
  };

  const changeMonth = n => {
    const newActiveDate = new Date();
    newActiveDate.setMonth(month + n);
    setMonth(newActiveDate.getMonth());
    const newMonth = newActiveDate.getMonth();

    if (month + n === 12) {
      setYear(year + 1);
    } else if (month + n === -1) {
      setYear(year - 1);
    }

    const newYear = year;

    setFirstDay(new Date(newYear, newMonth, 1).getDay());
  };

  if (month == 1) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays = 29;
    }
  }

  function generateMatrix() {
    var matrix = [];

    matrix[0] = days;
    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay - 1) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }

    return matrix;
  }

  var matrix = generateMatrix();

  function RowItems() {
    var rows = [];
    rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        return (
          <TouchableOpacity
            key={colIndex}
            style={{
              width: 35,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                item == activeDate.getDate() &&
                activeDate.getMonth() == month &&
                activeDate.getFullYear() == year
                  ? COLORS.primary
                  : item != -1 && rowIndex !== 0
                  ? COLORS.white
                  : 'transparent',
              borderRadius: 50,
            }}
            onPress={() => {
              changeDate(item);
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: 'GTWalsheimPro-Regular',
                fontSize: rowIndex == 0 ? 12 : 14,
                color:
                  item == activeDate.getDate() &&
                  activeDate.getMonth() == month &&
                  activeDate.getFullYear() == year
                    ? COLORS.white
                    : COLORS.black,
                textAlign: 'center',
                fontWeight:
                  item == activeDate.getDate() &&
                  activeDate.getMonth() == month &&
                  activeDate.getFullYear() == year
                    ? 'bold'
                    : '',
              }}>
              {item != -1 ? item : ''}
            </Text>
          </TouchableOpacity>
        );
      });

      return (
        <View
          key={rowIndex}
          style={{
            // flex: 1,
            flexDirection: 'row',
            paddingVertical: 3,
            paddingHorizontal: 15,
            justifyContent: 'space-around',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          {rowItems}
        </View>
      );
    });

    return rows;
  }

  return (
    <View style={styles.container}>
      <RowItems />

      <View style={styles.changeMonthContainer(COLORS)}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => changeMonth(-1)}>
          <ARROW_LEFT width={30} height={30} />
        </TouchableOpacity>
        <Text style={styles.monthYearTxt(FONTS)}>
          {months[month]} {year}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <ARROW_RIGHT width={30} height={30} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
        }}></View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: '85%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: SIZES.height,
  },

  changeMonthContainer: COLORS => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,

    borderTopWidth: 0.2,
    borderColor: COLORS.lightGray,
  }),

  monthYearTxt: FONTS => ({
    ...FONTS.body3,
  }),
});
