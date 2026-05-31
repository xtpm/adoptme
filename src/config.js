import 'dotenv/config';

export const config = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
};

export function validateConfig({ forDeploy = false } = {}) {
  const missing = [];

  if (!config.token) {
    missing.push('DISCORD_TOKEN');
  }

  if (forDeploy && !config.clientId) {
    missing.push('CLIENT_ID');
  }

  if (missing.length > 0) {
    throw new Error(`Missing required environment variable(s): ${missing.join(', ')}`);
  }
}
