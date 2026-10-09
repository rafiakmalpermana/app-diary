import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { moodStyles } from '../theme/moodStyles';

export default function DiaryCard({ title, date, preview, moodSource, mood }) {
  const variant = moodStyles[mood] ?? {};
  const { label, ...cardVariant } = variant;

  return (
    <View style={[styles.card, cardVariant]}>
      <Image source={moodSource} style={styles.mood} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {date}{label ? ` · ${label}` : ''}
        </Text>
        <Text style={styles.preview}>{preview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: { width: 64, height: 64, borderRadius: 32 },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: '700' },
  date: { fontSize: 12, color: '#6b7280', marginBottom: 6 },
  preview: { fontSize: 14 },
});
