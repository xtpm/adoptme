import { SlashCommandBuilder } from 'discord.js';
import { attachmentUrl, buildBaseEmbed, COLORS } from '../utils/embeds.js';

export const data = new SlashCommandBuilder()
  .setName('house')
  .setDescription('Post an Adopt Me house showcase with an image or video.')
  .addStringOption((option) =>
    option
      .setName('title')
      .setDescription('House name or theme')
      .setMaxLength(256)
      .setRequired(true),
  )
  .addAttachmentOption((option) =>
    option
      .setName('media')
      .setDescription('Image or video file')
      .setRequired(true),
  )
  .addStringOption((option) =>
    option
      .setName('description')
      .setDescription('Details about the house')
      .setMaxLength(1024),
  )
  .addStringOption((option) =>
    option
      .setName('price')
      .setDescription('Optional price, budget, or trade value')
      .setMaxLength(256),
  );

export async function execute(interaction) {
  const title = interaction.options.getString('title', true);
  const media = interaction.options.getAttachment('media', true);
  const description = interaction.options.getString('description') ?? 'House showcase';
  const price = interaction.options.getString('price');
  const mediaType = media.contentType ?? '';

  const embed = buildBaseEmbed({
    title,
    description,
    color: COLORS.blue,
    author: interaction.user,
  });

  if (price) {
    embed.addFields({ name: 'Price / Value', value: price });
  }

  const mediaUrl = attachmentUrl(media);
  if (mediaType.startsWith('image/') && mediaUrl) {
    embed.setImage(mediaUrl);
    await interaction.reply({ embeds: [embed] });
    return;
  }

  await interaction.reply({
    content: mediaUrl,
    embeds: [embed],
  });
}
