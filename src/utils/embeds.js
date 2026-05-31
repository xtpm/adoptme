import { EmbedBuilder } from 'discord.js';

export const COLORS = {
  pink: 0xff72b6,
  blue: 0x4da3ff,
  green: 0x55c878,
  gold: 0xffc857,
  purple: 0x9b72ff,
  red: 0xff5c5c,
};

export function attachmentUrl(attachment) {
  return attachment?.url ?? null;
}

export function buildBaseEmbed({ title, description, color = COLORS.pink, author }) {
  const embed = new EmbedBuilder()
    .setColor(color)
    .setTimestamp();

  if (title) {
    embed.setTitle(title);
  }

  if (description) {
    embed.setDescription(description);
  }

  if (author) {
    embed.setFooter({
      text: `Posted by ${author.displayName ?? author.username}`,
      iconURL: author.displayAvatarURL(),
    });
  }

  return embed;
}

export function parseColor(name) {
  if (!name) {
    return COLORS.pink;
  }

  return COLORS[name] ?? COLORS.pink;
}
