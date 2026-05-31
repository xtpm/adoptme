import { SlashCommandBuilder } from 'discord.js';
import { attachmentUrl, buildBaseEmbed, COLORS } from '../utils/embeds.js';

export const data = new SlashCommandBuilder()
  .setName('trade')
  .setDescription('Post an Adopt Me trade request.')
  .addStringOption((option) =>
    option
      .setName('offering')
      .setDescription('What you are offering')
      .setMaxLength(1024)
      .setRequired(true),
  )
  .addStringOption((option) =>
    option
      .setName('looking_for')
      .setDescription('What you want in return')
      .setMaxLength(1024)
      .setRequired(true),
  )
  .addStringOption((option) =>
    option
      .setName('notes')
      .setDescription('Optional notes, adds, or rules')
      .setMaxLength(1024),
  )
  .addAttachmentOption((option) =>
    option
      .setName('image')
      .setDescription('Optional screenshot of the trade or pet inventory'),
  );

export async function execute(interaction) {
  const offering = interaction.options.getString('offering', true);
  const lookingFor = interaction.options.getString('looking_for', true);
  const notes = interaction.options.getString('notes');
  const image = interaction.options.getAttachment('image');

  const embed = buildBaseEmbed({
    title: 'Adopt Me Trade Request',
    description: `${interaction.user} is looking for a trade.`,
    color: COLORS.gold,
    author: interaction.user,
  })
    .addFields(
      { name: 'Offering', value: offering },
      { name: 'Looking For', value: lookingFor },
    );

  if (notes) {
    embed.addFields({ name: 'Notes', value: notes });
  }

  const imageUrl = attachmentUrl(image);
  if (imageUrl) {
    embed.setImage(imageUrl);
  }

  await interaction.reply({ embeds: [embed] });
}
