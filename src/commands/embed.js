import { SlashCommandBuilder } from 'discord.js';
import { attachmentUrl, buildBaseEmbed, parseColor } from '../utils/embeds.js';

export const data = new SlashCommandBuilder()
  .setName('embed')
  .setDescription('Post a custom embed.')
  .addStringOption((option) =>
    option
      .setName('title')
      .setDescription('Embed title')
      .setMaxLength(256)
      .setRequired(true),
  )
  .addStringOption((option) =>
    option
      .setName('description')
      .setDescription('Main embed text')
      .setMaxLength(4000)
      .setRequired(true),
  )
  .addStringOption((option) =>
    option
      .setName('color')
      .setDescription('Embed color')
      .addChoices(
        { name: 'Pink', value: 'pink' },
        { name: 'Blue', value: 'blue' },
        { name: 'Green', value: 'green' },
        { name: 'Gold', value: 'gold' },
        { name: 'Purple', value: 'purple' },
        { name: 'Red', value: 'red' },
      ),
  )
  .addAttachmentOption((option) =>
    option
      .setName('image')
      .setDescription('Optional image to display in the embed'),
  )
  .addStringOption((option) =>
    option
      .setName('footer')
      .setDescription('Optional footer text')
      .setMaxLength(2048),
  );

export async function execute(interaction) {
  const title = interaction.options.getString('title', true);
  const description = interaction.options.getString('description', true);
  const color = parseColor(interaction.options.getString('color'));
  const image = interaction.options.getAttachment('image');
  const footer = interaction.options.getString('footer');

  const embed = buildBaseEmbed({
    title,
    description,
    color,
    author: interaction.user,
  });

  if (footer) {
    embed.setFooter({
      text: footer,
      iconURL: interaction.user.displayAvatarURL(),
    });
  }

  const imageUrl = attachmentUrl(image);
  if (imageUrl) {
    embed.setImage(imageUrl);
  }

  await interaction.reply({ embeds: [embed] });
}
