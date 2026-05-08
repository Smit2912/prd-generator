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
        You are a senior product manager.

        Generate a structured Product Requirements Document.

        Follow the schema exactly.

        Do not return markdown.
        Do not return explanations.
        Return valid structured JSON only.
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
