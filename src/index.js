import { Client, Events, GatewayIntentBits } from 'discord.js';
import { commandMap } from './commands/index.js';
import { config, validateConfig } from './config.js';
import { startHealthServer } from './server.js';

validateConfig();
startHealthServer();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const commands = commandMap();

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  const command = commands.get(interaction.commandName);

  if (!command) {
    await interaction.reply({
      content: 'That command is not available right now.',
      ephemeral: true,
    });
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`Error while running /${interaction.commandName}`);
    console.error(error);

    const response = {
      content: 'Something went wrong while running that command.',
      ephemeral: true,
    };

    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(response);
    } else {
      await interaction.reply(response);
    }
  }
});

client.login(config.token);
