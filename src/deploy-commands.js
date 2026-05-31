import { REST, Routes } from 'discord.js';
import { commands } from './commands/index.js';
import { config, validateConfig } from './config.js';

validateConfig({ forDeploy: true });

const rest = new REST({ version: '10' }).setToken(config.token);
const body = commands.map((command) => command.data.toJSON());

try {
  if (config.guildId) {
    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId),
      { body },
    );
    console.log(`Registered ${body.length} guild command(s).`);
  } else {
    await rest.put(
      Routes.applicationCommands(config.clientId),
      { body },
    );
    console.log(`Registered ${body.length} global command(s).`);
  }
} catch (error) {
  console.error('Failed to register slash commands.');
  console.error(error);
  process.exitCode = 1;
}
