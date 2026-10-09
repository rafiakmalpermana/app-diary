import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import DiaryCard from '../components/DiaryCard';
import DiaryHeader from '../components/DiaryHeader';
import { diaryEntries } from '../data/diaryEntries';

export default function DiaryListScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <DiaryHeader title="Buku Harian" username="Rafi" />

        {diaryEntries.map((entry) => (
          <DiaryCard
            key={entry.id}
            title={entry.title}
            date={entry.date}
            preview={entry.preview}
            mood={entry.mood}
            moodSource={entry.moodSource}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  content: { padding: 16 },
});
