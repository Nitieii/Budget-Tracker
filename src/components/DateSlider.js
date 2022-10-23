import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  addDays,
  eachDayOfInterval,
  subDays,
  eachWeekOfInterval,
  format,
  isToday,
} from 'date-fns';
import PagerView from 'react-native-pager-view';
import {COLORS, SIZES, FONTS} from '~/constants';

const dates = eachWeekOfInterval(
  {
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
  },
  {
    weekStartsOn: 1,
  },
).reduce((acc, date) => {
  const allDays = eachDayOfInterval({start: date, end: addDays(date, 6)});
  acc.push(allDays);
  return acc;
}, []);

// check if the day is today

const DateSlider = () => {
  return (
    <PagerView style={styles.container} initialPage={2}>
      {dates.map((week, index) => (
        <View key={index}>
          <View style={styles.row}>
            {week.map((day, index) => {
              const txtDayOfWeek = format(day, 'EEE');

              return (
                <View style={styles.day} key={index}>
                  <Text style={styles.dayOfWeek(FONTS)}>{txtDayOfWeek}</Text>
                  <TouchableOpacity style={styles.buttonDay(isToday(day))}>
                    <Text
                      style={{
                        ...FONTS.body3,
                        color: isToday(day) ? COLORS.white : COLORS.black,
                      }}>
                      {day.getDate()}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      ))}
    </PagerView>
  );
};

export default DateSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  day: {
    alignItems: 'center',
  },

  dayOfWeek: FONTS => ({
    ...FONTS.body4,
  }),

  buttonDay: isToday => ({
    backgroundColor: isToday ? COLORS.primary : COLORS.lightGray3,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,

    marginTop: 5,
  }),
});
