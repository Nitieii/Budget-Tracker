import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  addDays,
  eachDayOfInterval,
  subDays,
  eachWeekOfInterval,
  format,
  isSameDay,
} from 'date-fns';
import PagerView from 'react-native-pager-view';

import {COLORS, SIZES, FONTS, icons} from '~/constants';

import {useDate} from '~/hooks';

const DateSlider = () => {
  const {date, setDate, page} = useDate();

  const dates = eachWeekOfInterval(
    {
      start: subDays(new Date(date), 14),
      end: addDays(new Date(date), 14),
    },
    {
      weekStartsOn: 1,
    },
  ).reduce((acc, date) => {
    const allDays = eachDayOfInterval({start: date, end: addDays(date, 6)});
    acc.push(allDays);
    return acc;
  }, []);

  return (
    <View style={{height: 90}}>
      <PagerView style={styles.container} initialPage={page}>
        {dates.map((week, index) => (
          <View key={index}>
            <View style={styles.row}>
              {week.map((day, index) => {
                const txtDayOfWeek = format(day, 'EEE');

                return (
                  <View style={styles.day} key={index}>
                    <Text style={styles.dayOfWeek(FONTS)}>{txtDayOfWeek}</Text>
                    <TouchableOpacity
                      style={styles.buttonDay(isSameDay(date, day))}
                      // Date is a non-seriazable value, so we need to pass it as a string so that it can be serialized
                      onPress={() => setDate(day.getTime())}>
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: isSameDay(date, day)
                            ? COLORS.white
                            : COLORS.black,
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
    </View>
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

    paddingHorizontal: 15,
  },

  day: {
    alignItems: 'center',
  },

  dayOfWeek: FONTS => ({
    ...FONTS.body5,
  }),

  buttonDay: isToday => ({
    backgroundColor: isToday ? COLORS.primary : COLORS.lightGray3,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,

    marginTop: 5,
  }),
});
