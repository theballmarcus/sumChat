import { Configuration, OpenAIApi } from "openai";
import { Stream } from 'stream';

export class ChatGPT {
  configuration : Configuration;
  private openai : OpenAIApi;

  public constructor(chatApiKey : string) {
    this.configuration = new Configuration({ apiKey: chatApiKey });
    this.openai = new OpenAIApi(this.configuration);
  }
  public async askGPT(message: string) {
    return this.openai.createChatCompletion({
      messages : [{role: "user", content: message}],
      model: "gpt-3.5-turbo",
    });
  }
}