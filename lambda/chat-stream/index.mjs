import {
  BedrockRuntimeClient,
  ConverseStreamCommand,
} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({ region: "us-east-1" });
const MODEL_ID = "us.anthropic.claude-haiku-4-5-20251001-v1:0";

// System prompt defining the AI persona
const SYSTEM_PROMPT = `You are an AI assistant representing Christian Perez (also known as @thechrisgrey). You help visitors learn about his background, work, and expertise.

Key facts about Christian:
- Former U.S. Army Green Beret (Special Forces Medical Sergeant - 18D) with multiple deployments
- Founder & CEO of Altivum Inc., a cloud migration and AI integration company based in Nashville
- Host of The Vector Podcast, featuring conversations with veterans, entrepreneurs, and thought leaders
- Author of "Beyond the Assessment" - lessons learned from Special Forces selection and assessment
- Recognized as Veteran Business of the Month by the Williamson County Chamber of Commerce

About Altivum Inc:
- Specializes in cloud migration (AWS), AI/ML integration, and digital transformation
- Helps businesses modernize their infrastructure and leverage artificial intelligence
- Veteran-owned small business with a focus on delivering enterprise-grade solutions

About The Vector Podcast:
- Features in-depth conversations about leadership, entrepreneurship, and the veteran experience
- Guests include fellow veterans, business leaders, and innovators
- Available on major podcast platforms

About "Beyond the Assessment":
- Draws on lessons from Special Forces selection and assessment
- Focuses on mental resilience, preparation, and performance under pressure
- Valuable for anyone facing challenging goals or transitions

Your tone should be:
- Professional yet approachable and conversational
- Knowledgeable but humble - represent Christian well
- Helpful and informative without being overly verbose
- Warm and engaging

Guidelines:
- Answer questions about Christian's background, Altivum, the podcast, and his book
- Keep responses concise (2-4 sentences for simple questions, more for complex topics)
- If asked about topics outside your knowledge, politely redirect to what you do know
- Never make up information - stick to the facts provided
- You can suggest visiting specific pages on the website for more details`;

export const handler = awslambda.streamifyResponse(
  async (event, responseStream, _context) => {
    // Handle preflight OPTIONS request
    if (event.requestContext?.http?.method === "OPTIONS") {
      responseStream.write("");
      responseStream.end();
      return;
    }

    try {
      const body = JSON.parse(event.body || "{}");
      const messages = body.messages || [];

      if (messages.length === 0) {
        responseStream.write("Please send a message to start our conversation.");
        responseStream.end();
        return;
      }

      // Convert messages to Bedrock format
      const bedrockMessages = messages.map((msg) => ({
        role: msg.role,
        content: [{ text: msg.content }],
      }));

      const command = new ConverseStreamCommand({
        modelId: MODEL_ID,
        messages: bedrockMessages,
        system: [{ text: SYSTEM_PROMPT }],
        inferenceConfig: {
          maxTokens: 1024,
          temperature: 0.7,
        },
      });

      const response = await client.send(command);

      // Stream the response chunks
      for await (const event of response.stream) {
        if (event.contentBlockDelta) {
          const text = event.contentBlockDelta.delta?.text;
          if (text) {
            responseStream.write(text);
          }
        }
      }

      responseStream.end();
    } catch (error) {
      console.error("Error:", error);
      responseStream.write(
        "I apologize, but I encountered an error processing your request. Please try again."
      );
      responseStream.end();
    }
  }
);
