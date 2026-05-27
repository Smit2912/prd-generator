import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    lineHeight: 1.6,
  },

  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 700,
    lineHeight: 1.4,
    letterSpacing: -0.8,
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 700,
  },

  paragraph: {
    marginBottom: 8,
  },

  bullet: {
    marginLeft: 12,
    marginBottom: 4,
  },

  card: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },

  label: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 4,
  },

  smallText: {
    fontSize: 10,
    color: '#555',
    marginBottom: 4,
  },
});

type PRDPdfDocumentProps = {
  data: any;
};

export default function PRDPdfDocument({ data }: PRDPdfDocumentProps) {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <Text style={styles.title}>{data?.title || 'PRD'}</Text>

        {data?.overview && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>

            <Text style={styles.paragraph}>{data.overview}</Text>
          </View>
        )}

        {data?.problemStatement && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Problem Statement</Text>

            <Text style={styles.paragraph}>
              {data.problemStatement.summary}
            </Text>

            {data.problemStatement.painPoints?.map(
              (point: string, index: number) => (
                <Text key={index} style={styles.bullet}>
                  • {point}
                </Text>
              ),
            )}
          </View>
        )}

        {data?.userStories?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>User Stories</Text>

            {data.userStories.map((story: any, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.paragraph}>
                  As a {story.actor}, I want to {story.action}, so that{' '}
                  {story.benefit}
                </Text>
              </View>
            ))}
          </View>
        )}

        {data?.acceptanceCriteria?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Acceptance Criteria</Text>

            {data.acceptanceCriteria.map((item: any, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.smallText}>Priority: {item.priority}</Text>

                <Text style={styles.paragraph}>{item.criterion}</Text>
              </View>
            ))}
          </View>
        )}

        {data?.technicalConsiderations?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Considerations</Text>

            {data.technicalConsiderations.map((item: any, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.label}>{item.category}</Text>

                <Text style={styles.smallText}>Priority: {item.priority}</Text>

                <Text style={styles.paragraph}>{item.detail}</Text>
              </View>
            ))}
          </View>
        )}

        {data?.edgeCases?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Edge Cases</Text>

            {data.edgeCases.map((item: any, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.label}>{item.scenario}</Text>

                <Text style={styles.smallText}>Priority: {item.priority}</Text>

                <Text style={styles.paragraph}>{item.expectedBehavior}</Text>
              </View>
            ))}
          </View>
        )}

        {data?.assumptions?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Assumptions</Text>

            {data.assumptions.map((item: any, index: number) => (
              <Text key={index} style={styles.bullet}>
                • {item.assumption}
              </Text>
            ))}
          </View>
        )}

        {data?.nonFunctionalRequirements?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Non Functional Requirements</Text>

            {data.nonFunctionalRequirements.map((item: any, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.label}>{item.category}</Text>

                <Text style={styles.paragraph}>{item.requirement}</Text>
              </View>
            ))}
          </View>
        )}

        {data?.recommendations?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommendations</Text>

            {data.recommendations.map((item: any, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.label}>{item.issue}</Text>

                <Text style={styles.smallText}>Severity: {item.severity}</Text>

                <Text style={styles.smallText}>
                  Related Section: {item.relatedSection}
                </Text>

                <Text style={styles.paragraph}>{item.explanation}</Text>

                <Text style={styles.paragraph}>
                  Suggested Fix: {item.suggestedFix}
                </Text>
              </View>
            ))}
          </View>
        )}

        {data?.outOfScope?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Out of Scope</Text>

            {data.outOfScope.map((item: string, index: number) => (
              <Text key={index} style={styles.bullet}>
                • {item}
              </Text>
            ))}
          </View>
        )}

        {data?.successMetrics?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Success Metrics</Text>

            {data.successMetrics.map((item: any, index: number) => (
              <View key={index} style={styles.card}>
                <Text style={styles.label}>{item.metric}</Text>

                <Text style={styles.paragraph}>Target: {item.target}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
