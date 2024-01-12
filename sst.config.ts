import { SSTConfig } from "sst";
import { BedrockAgentStack } from "./stacks/bedrock-agent-stack";

export default {
  config(_input) {
    return {
      name: "bedrock-agent-lambda",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(BedrockAgentStack);
  },
} satisfies SSTConfig;
