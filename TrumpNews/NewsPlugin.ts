import { PluginBase, WalletClientBase, createTool } from "@goat-sdk/core";
import { z } from "zod"; // Ensure zod is installed for validation

// Define the NewsPlugin class
export class NewsPlugin extends PluginBase<WalletClientBase> {
    private apiKey: string; // Store API Key

    constructor(apiKey: string) {
        super("news", []);
        this.apiKey = apiKey; // Set API Key
    }

    supportsChain = (chain: any) => true; // Supports all chains

    getTools(walletClient: WalletClientBase) {
        return [
            createTool(
                {
                    name: "get_news",
                    description: "Fetch latest news articles about Donald Trump",
                    parameters: z.object({
                        articlesPage: z.number().optional().default(1),
                        articlesCount: z.number().optional().default(10),
                        sourceLocationUri: z.array(z.string()).optional(),
                    }),
                },
                async (parameters) => {
                    const url = "https://eventregistry.org/api/v1/article/getArticles";

                    // Define the API request payload
                    const requestBody = {
                        action: "getArticles",
                        keyword: "Donald Trump", // Fixed keyword
                        sourceLocationUri: parameters.sourceLocationUri || [],
                        articlesPage: parameters.articlesPage,
                        articlesCount: parameters.articlesCount,
                        articlesSortBy: "date",
                        articlesSortByAsc: false,
                        dataType: ["news"],
                        resultType: "articles",
                        forceMaxDataTimeWindow: 31,
                        apiKey: this.apiKey, // Use passed API Key
                    };

                    // Fetch data from API
                    const response = await fetch(url, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(requestBody),
                    });

                    const data = await response.json();
                    if (!data || !data.articles) {
                        throw new Error("Failed to fetch news articles");
                    }

                    // Return formatted results
                    return data.articles.results.map((article: any) => ({
                        title: article.title,
                        source: article.source.title,
                        url: article.url,
                        date: article.dateTimePub,
                    }));
                }
            ),
        ];
    }
}

// Export function that requires an API key
export const news = (apiKey: string) => new NewsPlugin(apiKey);
