import { Configuration, OpenAIApi } from "openai";

export class ChatGPT {
  configuration : Configuration;
  private openai : OpenAIApi;

  public constructor(chatApiKey : string) {
    this.configuration = new Configuration({ apiKey: chatApiKey });
    this.openai = new OpenAIApi(this.configuration);
  }
  
  public async summarize(discordMessages : string, callback : (v : string) => void) { //Messages string seperated by \n
    let request : string = "I've been away from a chat some time. Summarize theese messages in short terms: \n" + discordMessages;
    const response = await this.openai.createChatCompletion({
      messages : [{role: "user", content: discordMessages }],
      model: "gpt-3.5-turbo",
    });

    const botMessage : any = response.data.choices[0].message;
    callback(botMessage.content);
  }
}