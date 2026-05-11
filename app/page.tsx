'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { PRDSchema } from '@/lib/validations/prd.schema';

export default function HomePage() {
  const { submit, object, isLoading, error } = useObject({
    api: '/api/generate-prd',
    schema: PRDSchema,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    submit({
      prompt: formData.get('prompt'),
    });
  };

  console.log('object', object);

  return (
    <main className='p-8'>
      <form onSubmit={handleSubmit}>
        <textarea
          name='prompt'
          className='border p-4 w-full'
          placeholder='Describe your feature...'
        />

        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate PRD'}
        </button>
      </form>

      {error && <p>{error.message}</p>}

      {object && (
        <div className='mt-8 space-y-6'>
          <section>
            <h2>Title</h2>
            <p>{object?.title}</p>
          </section>

          <section>
            <h2>Overview</h2>
            <p>{object?.overview}</p>
          </section>

          <section>
            <h2>Problem Statement</h2>
            <p>
              Summary: {object?.problemStatement?.summary}
              <br />
              Pain Points: {object?.problemStatement?.painPoints?.join(', ')}
              <br />
              Business Impact: {object?.problemStatement?.businessImpact}
            </p>
          </section>

          <section>
            <h2>User Stories</h2>

            {object?.userStories?.map((story, index) => (
              <div key={index}>
                <p>
                  As a {story?.actor ?? '...'}, I want to{' '}
                  {story?.action ?? '...'}, so that {story?.benefit ?? '...'}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2>Acceptance Criteria</h2>

            {object?.acceptanceCriteria?.map((criteria, index) => (
              <div key={index}>
                <p>
                  {criteria?.criterion ?? '...'} (Priority:{' '}
                  {criteria?.priority ?? '...'})
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2>Technical Considerations</h2>

            {object?.technicalConsiderations?.map((consideration, index) => (
              <div key={index}>
                <p>
                  {consideration?.category ?? '...'}:{' '}
                  {consideration?.detail ?? '...'}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2>Edge Cases</h2>

            {object?.edgeCases?.map((edgeCase, index) => (
              <div key={index}>
                <p>
                  Scenario: {edgeCase?.scenario ?? '...'}
                  <br />
                  Expected Behavior: {edgeCase?.expectedBehavior ?? '...'}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2>Assumptions</h2>

            {object?.assumptions?.map((assumption, index) => (
              <p key={index}>{assumption?.assumption ?? '...'}</p>
            ))}
          </section>

          <section>
            <h2>Non-Functional Requirements</h2>

            {object?.nonFunctionalRequirements?.map((requirement, index) => (
              <div key={index}>
                <p>
                  Category: {requirement?.category ?? '...'}
                  <br />
                  Requirement: {requirement?.requirement ?? '...'}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2>Recommendations</h2>

            {object?.recommendations?.map((recommendation, index) => (
              <div key={index}>
                <p>
                  Issue: {recommendation?.issue ?? '...'}
                  <br />
                  Explanation: {recommendation?.explanation ?? '...'}
                  <br />
                  Suggested Fix: {recommendation?.suggestedFix ?? '...'}
                  <br />
                  Severity: {recommendation?.severity ?? '...'}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2>Out of Scope</h2>

            {object?.outOfScope?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </section>

          <section>
            <h2>Success Metrics</h2>

            {object?.successMetrics?.map((metric, index) => (
              <div key={index}>
                <p>
                  {metric?.metric ?? '...'} (Target: {metric?.target ?? '...'})
                </p>
              </div>
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
