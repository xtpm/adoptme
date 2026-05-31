import * as embed from './embed.js';
import * as house from './house.js';
import * as ping from './ping.js';
import * as trade from './trade.js';

export const commands = [embed, house, ping, trade];

export function commandMap() {
  return new Map(commands.map((command) => [command.data.name, command]));
}
