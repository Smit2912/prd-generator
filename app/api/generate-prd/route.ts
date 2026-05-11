import { streamObject } from 'ai';
import { PRDSchema } from '@/lib/validations/prd.schema';
import { groq } from '@/lib/ai/groq';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = streamObject({
      model: groq('openai/gpt-oss-120b'),

      maxRetries: 0,
      schema: PRDSchema,

      system: `
        You are a senior product manager working closely with engineering teams.

        Generate a production-grade Product Requirements Document.

        Requirements:
        - Return valid structured JSON only
        - Follow the provided schema exactly
        - Include realistic technical considerations
        - Include operational and edge-case scenarios
        - Avoid generic statements
        - No markdown
        - No explanations outside JSON

        Include actionable recommendations for identified risks, quality concerns, compliance issues, or UX gaps.

        Each recommendation must include:
        - issue
        - explanation
        - suggested fix
        - severity
      `,

      prompt: `
        Generate a PRD for this feature idea:

        ${prompt}
      `,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: 'Failed to generate PRD',
      },
      {
        status: 500,
      }
    );
  }
}
