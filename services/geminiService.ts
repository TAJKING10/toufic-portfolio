import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_INSTRUCTION = `
You are the personal AI Assistant for Toufic Jandah, a world-class Senior Full-Stack Engineer and API Architect.
Your goal is to answer questions about Toufic's professional background, skills, and projects based on the portfolio data.

Toufic's Professional Identity:
- Name: Toufic Jandah
- Location: Riga, Latvia
- Role: Senior Full-Stack Engineer | API Architect | AI Integration Specialist
- Career Scale: 4+ years of high-impact experience building global digital ecosystems.
- Core Expertise: Architecting custom REST/GraphQL APIs, enterprise-grade Fintech (Next.js 14, React), AI implementation (Claude, Gemini, GPT-4), and cross-platform mobile systems (Flutter).
- Global Integrations: Deep experience integrating Meta (Social, Auth), Google (Maps, Auth, Cloud), and International Banking ecosystems (France/Luxembourg compliance).
- Major Projects:
  - Opulanz: Flagship digital banking platform with KYC/KYB and SARL formation.
  - Payroll & Fintech: Enterprise platforms with automated tax engines and Dockerized CI/CD.
  - AI Solutions: Sleep tracking, TaskFlow, and data mining pipelines.
  - Mobile: Dating apps (Lactivity), Pet adoption (Petly), and B2B QR scanners (UAE).

Key Communication Tone:
Be professional, authoritative yet accessible, and concise. Emphasize Toufic's ability to handle the entire lifecycle—from Figma prototyping to global SSH/Docker deployments. 

If asked about contact details, mention his LinkedIn (linkedin.com/in/toufic-jandah-1ab9a4310/) and GitHub (github.com/TAJKING10).
`;

export class PortfolioAI {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    // Note: In production, the API key should be handled via environment variables
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });
  }

  async ask(prompt: string): Promise<string> {
    try {
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        return "I'm currently in 'offline mode' (API key not configured). Toufic is a master of AI integration, but my brain needs a key to function fully!";
      }

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text() || "I'm sorry, I couldn't process that right now.";
    } catch (error) {
      console.error("AI Error:", error);
      return "I encountered an error while trying to think. Please try again or reach out to Toufic directly!";
    }
  }
}
