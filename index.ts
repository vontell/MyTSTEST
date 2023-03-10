import { RGBot } from "rg-bot";

/**
 * This strategy is the simplest example of how to get started with the rg-bot package.
 */
export function configureBot(bot: RGBot) {

    bot.setDebug(true);

    // The bot says a message when spawning
    bot.on('spawn', async () => {
        bot.chat('Hello, I have arrived!');
    });

}
